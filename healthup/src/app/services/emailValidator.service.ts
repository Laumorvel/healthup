import { Injectable } from '@angular/core';
import {
  AbstractControl,
  AsyncValidator,
  ValidationErrors,
} from '@angular/forms';
import { map, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { AuthServiceService } from './auth-service.service';

@Injectable({
  providedIn: 'root',
})
export class emailValidatorService implements AsyncValidator {
  constructor(private http: HttpClient,
    private authService: AuthServiceService) {}
  private baseUrl: string = environment.baseUrl;

  validate(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
     //Si no vuelvo a hacer login, no se autogenera el token y no me da permiso para hacer la petición
     this.authService.login('bruno', 'bruno').subscribe(
      resp => {
        localStorage.setItem('jwt', JSON.stringify(resp.access_token));
      }
    )

    const email = control.value;
    console.log(email);
    const url = `${ this.baseUrl }/users?q=${email}`;
    let token = JSON.parse(<string>localStorage.getItem('jwt'));
    const headers = new HttpHeaders()
      .set('Authorization', `Bearer ${token}`);
    return this.http.get<string>(url, {headers}).pipe(
      map(resp => {
        console.log(resp);
        return ( resp.length === 0 )? null : { emailIndicado: true }
      })
    )

  }
}
