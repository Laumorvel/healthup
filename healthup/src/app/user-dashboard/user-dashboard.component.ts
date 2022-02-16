import { Component, OnInit } from '@angular/core';
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
    /*this.registro = this.cargaRegistro();*/
  }

  idUser = Number(localStorage.getItem('userId'));
  user: User = JSON.parse(<string>localStorage.getItem('user'));
  registro: Logro[] = [];

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
   /* return this.userService.getRegistro().subscribe({

    })*/
  }

}
