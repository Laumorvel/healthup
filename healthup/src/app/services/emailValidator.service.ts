import { Injectable, OnInit } from '@angular/core';
import {
  AbstractControl,
  AsyncValidator,
  ValidationErrors,
} from '@angular/forms';
import { catchError, debounceTime, map, Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { AuthServiceService } from './auth-service.service';
import { User } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root',
})
export class emailValidatorService implements AsyncValidator{
  constructor(
    private http: HttpClient,
    private authService: AuthServiceService
  ) {}
  private baseUrl: string = environment.baseUrl;

  validate(control: AbstractControl): Observable<ValidationErrors | null> {

   const email = control.value;
/*
    let token = JSON.parse(<string>localStorage.getItem('jwt'));*/
    const url = `${this.baseUrl}/users/${email}`;
    //const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);//.set('Access-Control-Allow-Origin','*')

    return this.http.get<User>(url);//subscribe
      // delay(3000),
    /*  debounceTime(300),//para que no lo comprueba al momento (no comprueba letra a letra)
      map( resp => {
        return ( resp.length === 0 )
            ? null
            : { emailTomado: true }
      })

    );*/
  }

  compruebaEmail(email:string){
    const url = `${this.baseUrl}/users/${email}`;
    return this.http.get<User>(url);//subscribe
  }


}
