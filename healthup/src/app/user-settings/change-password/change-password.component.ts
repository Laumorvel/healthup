import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.cargaDatos();
  }

  user!:User;

  cargaDatos(){
    this.user = JSON.parse(<string>localStorage.getItem("user"));
  }
}
