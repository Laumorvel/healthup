import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Logro } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl: string = environment.baseUrl;
  constructor(private http: HttpClient) { }



  getRegistro(idUser: number){
    const url = `${this.baseUrl}/user/${idUser}/registro`;
    let token = JSON.parse(<string>localStorage.getItem('jwt'));
    const headers = new HttpHeaders()
      .set('Authorization', `Bearer ${token}`);
    return this.http.get<Logro[]>( url, { headers } );
  }

}
