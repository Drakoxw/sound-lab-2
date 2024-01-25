import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { LocalstorageService } from '@services/index';
import { hasTokenExpired, parseJwt } from '@utils/token';

export const authAdminGuard: CanActivateFn = () => {
  const localStorage = inject(LocalstorageService);

  const token = localStorage.getToken();
  if (!token) {
    return false
  }

  const tokenParse = parseJwt(token)
  if (!tokenParse) {
    return false
  }

  if (hasTokenExpired(tokenParse)) {
    return false
  }

  if (!tokenParse.rol.toLowerCase().includes('admin')) {
    return false
  }

  return true;
};
