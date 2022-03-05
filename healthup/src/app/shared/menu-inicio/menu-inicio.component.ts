import { RouterLinkActive } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../interfaces/interfaces';

@Component({
  selector: 'app-menu-inicio',
  templateUrl: './menu-inicio.component.html',
  styleUrls: ['./menu-inicio.component.css']
})
export class MenuInicioComponent implements OnInit {
  constructor(private ruta: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {}

  @Input()registrado: boolean = false;
  userId = JSON.parse(<string>localStorage.getItem('userId'));
  user:User = JSON.parse(<string>localStorage.getItem('user'));
  //idU:number = this.user.id;

  logout() {
    localStorage.clear();
    this.router.navigateByUrl('/');
  }

}
