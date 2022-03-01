
export interface AuthResponse{
  access_token?: string;
  status?:number,
  message?: string,
  userId?: number, //lo incluido para poder obtener el id del usuario desde el principio y añadirlo a la ruta
  user?: User;
}

export interface ErrorResponse{
  status: number;
  message: string;
}

export interface User{
  id: number,
  username: string,
  email: string,
  password: string,
  surname: string,
  objetivoFoodSemanal: number,
  objetivoSportSemanal: number,
  avanceSemanaFood: number,
  avanceSemanaSport: number;
}

export interface Logro{
  id?: number,
  fecha: string|null,
  tipo: string,
  user?: User,
  logradoDia?: boolean,
  noRegistrado?:boolean;
}

export interface Mensaje{
  id: number,
  fecha: string,
  email: string,
  tlf?: string,
  mssg: string,
  companyName?:string
  name: string,
}
