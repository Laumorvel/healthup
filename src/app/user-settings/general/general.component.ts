import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.css']
})
export class GeneralComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.cargaDatos();
  }

  user!:User;

  cargaDatos(){
    this.user = JSON.parse(<string>localStorage.getItem("user"));
  }

}
