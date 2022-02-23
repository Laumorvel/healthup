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

  token = JSON.parse(<string>localStorage.getItem('jwt'));

  getRegistro(idUser: number){
    const url = `${this.baseUrl}/user/${idUser}/registro`;
    const headers = new HttpHeaders()
      .set('Authorization', `Bearer ${this.token}`);
    return this.http.get<Logro[]>( url, { headers } );
  }

  /**
   * Devuelve una lista de logros según el tipo del logro.
   * @param idUser
   * @param tipo
   * @returns lista de logros
   */
  /*getRegistroPorTipo(idUser: number, tipo: string){
    const url = `${this.baseUrl}/user/${idUser}/registro?tipo=${tipo}`;
    const headers = new HttpHeaders()
      .set('Authorization', `Bearer ${this.token}`);
    return this.http.get<Logro[]>( url, { headers } );
  }*/

  newRegistro(idUser:number, logro: Logro){
    const url = `${this.baseUrl}/user/${idUser}/newLogro`;
    const body = logro;
    const headers = new HttpHeaders()
      .set('Authorization', `Bearer ${this.token}`);
    return this.http.post<Logro>(url, body, {headers});
  }

  modificaRegistro(idUser:number, logro:Logro){
    const url = `${this.baseUrl}/user/${idUser}/modificaLogro/${logro.id}`;
    const body = logro;
    const headers = new HttpHeaders()
      .set('Authorization', `Bearer ${this.token}`);
    return this.http.put<Logro>(url, body, {headers});
  }

}
