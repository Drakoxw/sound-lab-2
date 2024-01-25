import { Injectable, inject } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LocalstorageService } from '@services/localstorage.service';

@Injectable()
export class AuthorizationInterceptor implements HttpInterceptor {

  localStorage = inject(LocalstorageService)

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = this.localStorage.getToken()
    if (token) {
      request = request.clone({
        setHeaders: {
          Authorization: token
        }
      })

    }
    return next.handle(request);
  }
}
