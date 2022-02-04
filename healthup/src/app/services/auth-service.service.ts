import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthResponse } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  private baseUrl: string = environment.baseUrl;
  constructor(private http: HttpClient) {}


  login(email:string,password:string){
    const url = `${this.baseUrl}/auth/login`;
    const body = {
      'email': email,
      'password': password
    }
    return this.http.post<AuthResponse>(url, body);
  }

  validarToken():Observable<AuthResponse>{
    const url = `${ this.baseUrl }/products`;
    const headers = new HttpHeaders()
      .set('Authorization', `Bearer ${localStorage.getItem('token')}` || '' );

    return this.http.get<AuthResponse>( url, { headers } )

  }
}
