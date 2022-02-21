import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Logro, User } from '../interfaces/interfaces';
import { UserService } from '../services/user.service';
import { AuthServiceService } from '../services/auth-service.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css'],
})
export class UserDashboardComponent implements OnInit {
  constructor(
    private userService: UserService,
    public datepipe: DatePipe,
    private authService: AuthServiceService
  ) {}

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
    };

    this.cargaRegistro();
  }

  //VARIABLES:
  user: User = JSON.parse(<string>localStorage.getItem('user'));
  idUser = this.user.id;
  registro: Logro[] = [];
  registroFood: Logro[] = [];
  registroSport: Logro[] = [];
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  enviadoFood: boolean = false;
  enviadoSport: boolean = false;
  private fechaHoy = this.datepipe.transform(new Date(), 'dd-MM-yyyy');
  objetivoFood: number = this.user.objetivoFoodSemanal;
  objetivoSport: number = this.user.objetivoSportSemanal;
  avanceFood: number = this.user.avanceSemanaFood;
  avanceSport: Number = this.user.avanceSemanaSport;

  //MÉTODOS:

  pulsado(tipo: string, logrado: boolean) {
    let index = this.registro.findIndex(
      (logro) => logro.fecha === this.fechaHoy && logro.tipo === tipo
    ); //Compruebo que la fecha del logro tipo food no se encuentra en la lista = aún no se ha pulsado hoy

    //NO SE PRESIONA EL MISMO BOTÓN EL MISMO DÍA
    if (
      this.registro.findIndex(
        (logro) =>
          logro.fecha === this.fechaHoy &&
          logro.tipo === tipo &&
          logro.logradoDia === logrado
      ) == -1
    ) {
      //SE PULSA POR PRIMERA VEZ ESE DÍA
      if (index == -1) {
        this.userService
          .newRegistro(this.idUser, this.creaLogro(tipo, logrado))
          .subscribe((resp) => {
            this.registro.push(resp);
            this.getUser(); //actualizo avance
            this.cargaRegistroPorTipo(tipo);//para actualizar la lista
            this.dtTrigger.next(resp);
          //  this.ngOnDestroy();
          });
      }
      //SE CAMBIA EL LOGRO DE TRUE A FALSE
      else {
        const logro = this.registro.find(
          (logro) => logro.fecha === this.fechaHoy && logro.tipo === tipo,
          index
        );
        if (logro != null) {
          //Si no lo compruebo, me aparece que la variable puede ser undefined
          logro.logradoDia = logrado;
          this.userService
            .modificaRegistro(this.idUser, logro)
            .subscribe((resp) => {
              this.registro.splice(index, 1, resp); //elimino el objeto en esa posición y añado el logro modificado
              this.getUser();
              this.cargaRegistroPorTipo(tipo);
              this.dtTrigger.next(resp);
             // this.ngOnDestroy();
            });
        }
      }
    }
  }

  creaLogro(tipo: string, logrado: boolean): Logro {
    const logro: Logro = {
      fecha: this.fechaHoy,
      tipo: tipo,
      logradoDia: logrado,
    };
    console.log(logro);
    return logro;
  }

  cargaRegistro() {
    this.userService.getRegistro(this.user.id).subscribe((resp) => {
      this.registro = resp;
      this.cargaRegistroPorTipo('food');
      this.cargaRegistroPorTipo('sport');
      this.dtTrigger.next(resp);
    });
  }

  /**
   * Carga la tabla según el tipo que se seleccione.
   * @param tipo
   */
  cargaRegistroPorTipo(tipo: string) {
    let lista = this.registro.filter((logro) => logro.tipo == tipo);
    console.log(lista);

    if (tipo == 'food') {
      this.registroFood = lista;
    } else {
      this.registroSport = lista;
    }
  }

  getUser() {
    this.authService.loginGetUser().subscribe((resp) => {
      this.user = resp;
      this.avanceFood = resp.avanceSemanaFood;
      this.avanceSport = resp.avanceSemanaSport;
    });
  }

  compruebaAvance() {
    this.authService.loginGetUser().subscribe((resp) => {
      this.user = resp;

    });
  }

  aniadeATipo(tipo: string, logro: Logro) {
    if (tipo == 'food') {
      this.registroFood.push(logro);
    } else {
      this.registroSport.push(logro);
    }
  }



  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }
}
