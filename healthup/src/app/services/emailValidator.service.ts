import { Injectable } from '@angular/core';
import {
  AbstractControl,
  AsyncValidator,
  ValidationErrors,
} from '@angular/forms';
import { catchError, debounce, debounceTime, delay, map, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { AuthServiceService } from './auth-service.service';
import { User } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root',
})
export class emailValidatorService implements AsyncValidator{
  constructor(private http: HttpClient) {}

  private baseUrl: string = environment.baseUrl;

  validate(control: AbstractControl): Observable<ValidationErrors | null> {
   const email = control.value;
   return this.compruebaEmail(email).pipe(
     map (resp => {
       console.log(resp);
       if(resp.email != null){
        console.log(resp);
          return {emailIndicado: true};
       }else{
        return null;
       }
     }),
     catchError (err => {
       console.log('ERRO EMAIL');
        console.log(err);
        return of(null);
     })
   );
  }

  //Método para comprobar email en BBDD
  compruebaEmail(email:string){
    const url = `${this.baseUrl}/users/${email}`;
    return this.http.get<User>(url);
  }


}
