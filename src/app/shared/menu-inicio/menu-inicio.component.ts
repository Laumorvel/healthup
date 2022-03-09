
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../interfaces/interfaces';

@Component({
  selector: 'app-menu-inicio',
  templateUrl: './menu-inicio.component.html',
  styleUrls: ['./menu-inicio.component.css']
})
export class MenuInicioComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {
  }

  @Input()registrado: boolean = false;
  userId = JSON.parse(<string>localStorage.getItem('userId'));
  user:User = JSON.parse(<string>localStorage.getItem('user'));

  logout() {
    localStorage.removeItem("jwt");
    localStorage.removeItem("user");
    localStorage.removeItem("userId");
    this.router.navigateByUrl('/');
  }

}
