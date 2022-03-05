import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { catchError, map, Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class PasswordValidatorService implements AsyncValidator{

  constructor(private http: HttpClient) { }

  private baseUrl: string = environment.baseUrl;
  user: User = JSON.parse(<string>localStorage.getItem('user'));

  validate(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    const password = control.value;
    return this.getPassword().pipe(
      map(resp => {
        console.log(resp);
        if(resp == this.user.password){
          return {currentPassword: true}
        }else{
          return null;
        }
      }),
      catchError (err => {
        return of(null);
      })
    )
  }


  getPassword(){
    const url = `${this.baseUrl}/getPassword`;
   const token = JSON.parse(<string>localStorage.getItem('jwt'));
    const headers = new HttpHeaders().set(
      'Authorization',
      `Bearer ${token}`
    );
    return this.http.get<String>(url, {headers});
  }
}
