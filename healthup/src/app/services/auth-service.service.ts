import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthResponse, ErrorResponse } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  private baseUrl: string = environment.baseUrl;
  constructor(private http: HttpClient) {}


  login(username:string,password:string){
    const url = `${this.baseUrl}/auth/login`;
    const body = {
      'username': username,
      'password': password
    }
    return this.http.post<AuthResponse>(url, body);
  }

  validarToken():Observable<AuthResponse>{
    const url = `${ this.baseUrl }/login`;
    const headers = new HttpHeaders()
      .set('Authorization', `Bearer ${localStorage.getItem('token')}` || '' );

    return this.http.get<AuthResponse>( url, { headers } )

  }
}
