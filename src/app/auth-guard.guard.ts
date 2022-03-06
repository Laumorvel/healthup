import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { catchError, map, Observable, of } from 'rxjs';
import { AuthServiceService } from './services/auth-service.service';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {

  constructor(private authService:AuthServiceService, private router: Router){}

  /*Debe devolver true/false para saber si podemos o no entrar en x página */
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      return this.authService.validarToken().pipe(//devuelve la respuesta del método
        map(resp => {
          return true;
        }),
        catchError(err => {
          Swal.fire(//devuelve el mensaje resultante del método de verificar token de la fake api
            'Error', err.error.message,'error'
          );
          this.router.navigate(['']);//navigateByUrl('/login')
          return of(false);
        })
      )
  }

}
