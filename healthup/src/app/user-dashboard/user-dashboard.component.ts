import { DatePipe } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { Logro, User } from '../interfaces/interfaces';
import { UserService } from '../services/user.service';
import { AuthServiceService } from '../services/auth-service.service';
import { DataTableDirective } from 'angular-datatables';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css'],
})
export class UserDashboardComponent implements OnInit {
  ng: any;
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
    this.cargaUser();
    this.cargaRegistro();
  }

  //ATRIBUTOS:
  @ViewChild(DataTableDirective, {static: false})
  dtElement!: DataTableDirective;
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
  avanceSport: number = this.user.avanceSemanaSport;
  porcentajeSport: string = '0';
  porcentajeFood: string = '0';

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
          .subscribe(async (resp) => {
            this.registro.push(resp);
            this.getUser(tipo); //actualizo avance
            this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
              // Destroy the table first
              dtInstance.destroy();
              // Call the dtTrigger to rerender again
              this.dtTrigger.next(this.registro);
            });
            // this.dtTrigger.next(resp);
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
            .subscribe(async (resp) => {
              this.registro.splice(index, 1, resp); //elimino el objeto en esa posición y añado el logro modificado
              this.getUser(tipo);
              this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
                // Destroy the table first
                dtInstance.destroy();
                // Call the dtTrigger to rerender again
                this.dtTrigger.next(this.registro);
              });
              //this.dtTrigger.next(resp);
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
    return logro;
  }

  cargaRegistro() {
    this.userService.getRegistro(this.user.id).subscribe((resp) => {
      this.registro = resp;
      this.cargaRegistroPorTipo('food');
      this.cargaRegistroPorTipo('sport');
      // this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      //   // Destroy the table first
      //   dtInstance.destroy();
      //   // Call the dtTrigger to rerender again
      //   this.dtTrigger.next(resp);
      // });
      this.dtTrigger.next(resp);
    });
  }

  cargaPorcentaje(tipo:string){
    if(tipo == 'sport'){
      let sumaAvance = 100 / this.objetivoSport;
      let avanceActual = sumaAvance * Number(this.avanceSport);
      this.porcentajeSport = avanceActual.toString();
      if(this.objetivoSport <= this.avanceSport){
        this.porcentajeSport = '100';
      }
    }else{
      let sumaAvance = 100 / this.objetivoFood;
      let avanceActual = sumaAvance * Number(this.avanceFood);
      this.porcentajeFood = avanceActual.toString();
      if(this.objetivoFood <= this.avanceFood){
        this.porcentajeFood = '100';
      }
    }
  }


  /**
   * Carga la tabla según el tipo que se seleccione,
   * partiendo del registro total del usuario (no hace falta hacer nueva petición).
   * @param tipo
   */
  cargaRegistroPorTipo(tipo: string) {
    let lista = this.registro.filter((logro) => logro.tipo == tipo);

    if (tipo == 'food') {
      this.registroFood = lista;

    } else {
      this.registroSport = lista;
    }
  }

  async getUser(tipo: string) {
    await this.authService.loginGetUser().subscribe((resp) => {
      this.user = resp;
      this.avanceFood = resp.avanceSemanaFood;
      this.avanceSport = resp.avanceSemanaSport;
      localStorage.setItem('user', JSON.stringify(resp));
      this.cargaPorcentaje(tipo);
      this.cargaRegistroPorTipo(tipo);//para actualizar la lista
    });
  }

  cargaUser(){
    this.authService.loginGetUser().subscribe((resp) => {
      this.user = resp;
      this.avanceFood = resp.avanceSemanaFood;
      this.avanceSport = resp.avanceSemanaSport;
      this.cargaPorcentaje('food');
      this.cargaPorcentaje('sport');
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
    console.log('holi');
    this.dtTrigger.unsubscribe();
  }
}
