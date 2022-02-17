import { DatePipe, formatDate } from '@angular/common';
import { Component, OnInit, NgModule } from '@angular/core';
import { Subject } from 'rxjs';
import { Logro, User } from '../interfaces/interfaces';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

  constructor(private userService: UserService, public datepipe: DatePipe) { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5
    };
    this.cargaRegistro();
  }

  //VARIABLES:

  idUser = Number(localStorage.getItem('userId'));
  user: User = JSON.parse(<string>localStorage.getItem('user'));
  registro: Logro[] = [];
  dtOptions: DataTables.Settings = {};
  dtTrigger= new Subject<any>();
  enviadoFood:boolean = false;
  enviadoSport:boolean = false;
  private fechaHoy = this.datepipe.transform(new Date(), "dd-MM-yyyy");


  //MÉTODOS:

  pulsado(tipo: string, logrado: boolean){
    //Compruebo que la fecha del logro tipo food no se encuentra en la lista = aún no se ha pulsado hoy
    console.log(this.registro);
    let index = this.registro.findIndex(logro => logro.fecha === this.fechaHoy && logro.tipo === tipo);
    if(index == -1){
      this.userService.newRegistro(this.idUser, this.creaLogro(tipo, logrado)).subscribe(
        resp => {
          this.registro.push(resp);//para colocarlo al principio de la lista
          this.dtTrigger.next(resp);//para incluir en la datatable y siga apareciendo tras alterar el orden
          this.ngOnDestroy();
        }
      )//meter else if para que si el objeto es exactamente igual, no haya llamada
    }else{
      const logro = this.registro.find(logro => logro.fecha === this.fechaHoy && logro.tipo === tipo, index);
      console.log(logro);
      if(logro != null){//Si no lo compruebo, me aparece que la variable puede ser undefined
        logro.logradoDia = logrado;
        this.userService.modificaRegistro(this.idUser, logro).subscribe(
          resp =>{
            this.registro.splice(index,1,resp);//elimino el objeto en esa posición y añado el logro modificado
            this.dtTrigger.next(resp);
            this.ngOnDestroy();
          }
        )
      }
    }
  }

  creaLogro(tipo:string, logrado:boolean):Logro{
    const logro:Logro = {
      fecha: this.fechaHoy,
      tipo: tipo,
      logradoDia: logrado
    }
    console.log(logro);
    return logro;
  }

  cargaRegistro(){
    this.userService.getRegistro(this.idUser).subscribe(
      resp => {
        this.registro = resp;
        this.dtTrigger.next(null);
      }
    )
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

}
