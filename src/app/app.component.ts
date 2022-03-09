import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public subscriber!: Subscription;
  registrado: boolean = false;

  /**
   * Comprueba todos los cambios que se realicen en el router --> cada vez que cambie la ruta
   * @param router
   */
  constructor(private router: Router) {
    this.subscriber = this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event) => {
        this.checkRuta();
      });
  }

  /**
   * Si la ruta contiene userDashboard o userSettings indica que está logueado
   */
  checkRuta() {
    if (this.router.url.includes('userDashboard') || (this.router.url.includes('userSettings'))) {
      this.registrado = true;
    }else{
      this.registrado = false;
    }
  }

  ngOnDestroy() {
    this.subscriber?.unsubscribe();
  }
}
