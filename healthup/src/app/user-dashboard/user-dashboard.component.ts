import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Logro, User } from '../interfaces/interfaces';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

  constructor(private userService: UserService) { }

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

  //MÉTODOS:

  pulsadoSiFood(){

  }

  pulsadoSiSport(){

  }

  creaLogro(tipo:string, logrado:boolean){
    /*const logro:Logro = {
      fecha: new Date(Date.now()),
      tipo: tipo,
      user: this.user,
      logradoDia: logrado
    }*/
  }

  cargaRegistro(){
    this.userService.getRegistro(this.idUser).subscribe(
      resp => {
        console.log(resp);
        this.registro = resp;
        this.dtTrigger.next(null);
      }
    )
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

}
