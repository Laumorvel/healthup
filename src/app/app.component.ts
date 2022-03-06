import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'healthup';
  //https://es.stackoverflow.com/questions/431030/detectar-cambios-de-un-router-en-angular

  public subscriber!: Subscription; //creo la variable para luego destruirla o al recargar el mismo componente puede dar problemas por tener dos subscripciones.
  registrado: boolean = false;

  constructor(private router: Router) {
    //Si me suscribo al router con un tipo de navegación, siempre comprobará el router (osea siempre que cambie de página).
    this.subscriber = this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event) => {
        this.checkRuta();
      });
  }

  checkRuta() {
    //Si la ruta contiene userDashboard indica que está logueado
    if (this.router.url.includes('userDashboard')) {
      this.registrado = true;
    }else{
      this.registrado = false;
    }
  }

  //En el onDestroy, valido si mi subscriber sigue activo y me desuscribo, si no seguirá activo escuchando cuando navegue a otro componente donde no lo quiera.
  ngOnDestroy() {
    this.subscriber?.unsubscribe();
  }
}
