import { ResponseBase } from '.';

export interface DataLogin {
  userName: string
  email: string
  rol: string
  idInternal: number
  idUser: number
  token: string
}

export interface LoginResponse extends ResponseBase {
  data: DataLogin
}
