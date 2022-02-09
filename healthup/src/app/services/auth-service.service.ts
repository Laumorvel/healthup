import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthResponse, User } from '../interfaces/interfaces';
import { FormGroup } from '@angular/forms';

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
    const opcionHeader = new HttpHeaders();
    opcionHeader.append('Access-Control-Allow-Origin','*');
    return this.http.post<AuthResponse>(url, body, {headers:opcionHeader});
  }

  validarToken():Observable<AuthResponse>{
    const url = `${ this.baseUrl }/login`;
    let token = JSON.parse(<string>localStorage.getItem('jwt'));
    const headers = new HttpHeaders()
      .set('Authorization', `Bearer ${token}`);

    return this.http.get<AuthResponse>( url, { headers } )

  }

  //Método para poder tener el id de vuelta del usuario
  loginGetIdUser(username:string){
    const url = `${this.baseUrl}/auth/loginGetIdUser`;
    const body = {
      'username': username
    }
    const opcionHeader = new HttpHeaders();
    opcionHeader.append('Access-Control-Allow-Origin','*');
    return this.http.post<AuthResponse>(url, body, {headers:opcionHeader});
  }


  register(user: User){
    const url = `${this.baseUrl}/auth/register`;
    const body = user;//user con los campos a rellenos
    const opcionHeader = new HttpHeaders();
    opcionHeader.append('Access-Control-Allow-Origin','*');
    return this.http.post<AuthResponse>(url, body, {headers:opcionHeader});
  }
}
