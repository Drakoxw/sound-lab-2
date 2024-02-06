import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, computed, inject, signal } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';

import { DataLogin, ErrorsResponse, LoginResponse } from '@interfaces/responses';
import { LocalstorageService } from '@services/localstorage.service';
import { LoginRequest } from '@interfaces/index';
import { URL_API_BASE } from '@constants/common';
import { ITokenPayload, parseJwt } from '@utils/token';


interface State {
  isAdmin: boolean;
  isLogged: boolean;
  showMenu: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private http = inject(HttpClient)
  private localStorage = inject(LocalstorageService)

  private url = URL_API_BASE;
  private sesion?:DataLogin|null = null;

  #state = signal<State>({
    isAdmin: false,
    isLogged: false,
    showMenu: false
  });

  public isAdmin = computed(() => this.#state().isAdmin)
  public isLogged = computed(() => this.#state().isLogged)
  public showMenu = computed(() => this.#state().showMenu)

  updateMenuState(state:boolean) {
    this.#state.update((s) => ({ ...s, showMenu: state }))
  }

  resetSesion() {
    this.sesion = null;
    this.#state.update((s) => ({ ...s, isLogged: false, isAdmin: false }))
    this.localStorage.deleteToken();
  }

  getDataToken(): ITokenPayload | null {
    const parse = parseJwt(this.localStorage.getToken())
    if (parse) {
      this.#state.update(s => ({...s, isLogged: true}))
      if (parse.rol.toLowerCase().includes('admin')) {
        this.#state.update(s => ({ ...s, isAdmin: true }))
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
          if (this.sesion.rol === 'SuperAdmin') {
            this.#state.update(s => ({ ...s, isAdmin: true }))
          }
          this.#state.update(s => ({ ...s, isLogged: true }))
          return res;
        }),
        catchError(this.error)
      );
  }

}
