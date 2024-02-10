import { inject } from '@angular/core';
import {
  HttpRequest,
  HttpEvent,
  HttpInterceptorFn,
  HttpHandlerFn,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LocalstorageService } from '@services/localstorage.service';

export const AuthorizationInterceptor: HttpInterceptorFn = (
  request: HttpRequest<unknown>,
  next: HttpHandlerFn
): Observable<HttpEvent<unknown>> => {
  const localStorage = inject(LocalstorageService);

  const token = localStorage.getToken();
  if (token) {
    request = request.clone({
      setHeaders: {
        Authorization: token,
      },
    });

    return next(request);
  }
  return next(request);
};
