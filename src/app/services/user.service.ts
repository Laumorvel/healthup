import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Logro, User } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private baseUrl: string = environment.baseUrl;
  constructor(private http: HttpClient) {}

  token = JSON.parse(<string>localStorage.getItem('jwt'));

  //MÉTODO PARA PETICIONES DENTRO DE LA ZONA DE USUARIO
  //El usuario lo consigue el backend por el token
  /**
   *
   * @returns Lista de logros de un usuario
   */
  getRegistro() {
    const url = `${this.baseUrl}/registro`;
    const headers = new HttpHeaders().set(
      'Authorization',
      `Bearer ${this.token}`
    );
    return this.http.get<Logro[]>(url, { headers });
  }

  /**
   * Crea un nuevo logro
   * @param logro
   * @returns
   */
  newRegistro( logro: Logro) {
    const url = `${this.baseUrl}/newLogro`;
    const body = logro;
    const headers = new HttpHeaders().set(
      'Authorization',
      `Bearer ${this.token}`
    );
    return this.http.post<Logro>(url, body, { headers });
  }

  /**
   * Modifica un logro
   * @param logro
   * @returns
   */
  modificaRegistro( logro: Logro) {
    const url = `${this.baseUrl}/modificaLogro/${logro.id}`;
    const body = logro;
    const headers = new HttpHeaders().set(
      'Authorization',
      `Bearer ${this.token}`
    );
    return this.http.put<Logro>(url, body, { headers });
  }

  /**
   * Cambia la contraseña del usuario una vez se ha comprobado que es el usuario real.
   * @param newPassword
   * @returns
   */
  cambiaContrasena(newPassword: string) {
    const url = `${this.baseUrl}/user?newPassword=${newPassword}`;
    const headers = new HttpHeaders().set(
      'Authorization',
      `Bearer ${this.token}`
    );
    return this.http.get<User>(url, { headers });
  }
}
