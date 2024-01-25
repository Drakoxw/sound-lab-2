import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';

import { DataLogin, ErrorsResponse, LoginResponse } from '@interfaces/responses';
import { LocalstorageService } from '@services/localstorage.service';
import { LoginRequest } from '@interfaces/index';
import { URL_API_BASE } from '@constants/common';
import { ITokenPayload, parseJwt } from '@utils/token';
import { logDev } from '@utils/console';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private http = inject(HttpClient)
  private localStorage = inject(LocalstorageService)

  readonly admin = signal(false);
  readonly isLogged = signal(false);
  readonly menu = signal(false)

  private url = URL_API_BASE;
  private sesion?:DataLogin|null = null;

  updateMenuState(state:boolean) {
    this.menu.set(state)
  }

  resetSesion() {
    this.sesion = null;
    this.admin.set(false);
    this.isLogged.set(false);
    this.localStorage.deleteToken();
  }

  getDataToken(): ITokenPayload | null {
    const parse = parseJwt(this.localStorage.getToken())
    if (parse) {
      this.isLogged.set(true)
      if (parse.rol.toLowerCase().includes('admin')) {
        this.admin.set(true);
      }
      return parse;
    }
    return null
  }

  getSession(): DataLogin|null {
    return this.sesion || null;
  }

  /**
   * No importar!
   * Metodo para el cathError
   */
  private error(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = err.error.message;
    } else {
      errorMessage = `Error Code: ${err.status}\nMessage: ${err.message}`;
      err.error as unknown as ErrorsResponse
      if (err.error.errors) {
        errorMessage = err.error.errors[0].detail;
      }
    }
    return of({ error: true, msg: errorMessage });
  }

  login(payload: LoginRequest): Observable<{
    error: boolean;
    msg: string
  }> {
    const res = { error: false, msg: '' };
    return this.http.post<LoginResponse>(`${this.url}/auth/login`, payload)
      .pipe(
        map((r) => {
          this.localStorage.setToken(r.data.token)
          res.msg = r.message;
          this.sesion = r.data;
          if (this.sesion.rol === 'SuperAdmin') { this.admin.set(true); }
          this.isLogged.set(true);
          return res;
        }),
        catchError(this.error)
      );
  }

}
