import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-menu-inicio',
  templateUrl: './menu-inicio.component.html',
  styleUrls: ['./menu-inicio.component.css'],
})
export class MenuInicioComponent implements OnInit {
  constructor(private ruta: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {}

  @Input()registrado: boolean = false;
  userId = localStorage.getItem('userId');

  logout() {
    localStorage.clear();
    this.router.navigateByUrl('/');
  }

}
