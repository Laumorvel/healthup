
export interface AuthResponse{
  access_token?: string;
  status?:number,
  message?: string,
  userId?: number //lo incluido para poder obtener el id del usuario desde el principio y añadirlo a la ruta
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
  objetivoSportSemanal: number
}

export interface Logro{
  id: number,
  fecha: Date,
  tipo: string,
  user: User,
  logradoDia: boolean;
}
