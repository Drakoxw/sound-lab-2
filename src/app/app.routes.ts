import { Routes } from '@angular/router';
import { authAdminGuard } from './core/guard/auth-admin.guard';

const TITLE_DEFAULT = 'SoundLab - La casa del DJ';

export const routes: Routes = [
  {
    path: 'admin',
    canActivate: [authAdminGuard],
    loadComponent: () => import('@shared/layout-private/layout-private.component'),
    children: [
      {
        path: 'items',
        title: TITLE_DEFAULT,
        loadComponent: () => import('@private/views/admin/admin.component')
      },
      {
        path: 'dev',
        title: TITLE_DEFAULT,
        loadComponent: () => import('@private/views/developer/developer.component')
      },
      {
        path: '',
        redirectTo: '/admin/items',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    loadComponent: () => import('@shared/layout-public/layout-public.component'),
    children: [
      {
        path: 'inicio',
        title: TITLE_DEFAULT,
        loadComponent: () => import('@public/views/home/home.component')
      },
      {
        path: 'contactanos',
        title: 'Contactanos via email',
        loadComponent: () => import('@public/views/contact-me/contact-me.component')
      },
      {
        path: 'login',
        title: 'Inicia sesion',
        loadComponent: () => import('@public/views/login-view/login-view.component')
      },
      {
        path: '',
        redirectTo: '/inicio',
        pathMatch: 'full'
      }
    ]
  },
  { path: '**', redirectTo: '/inicio', pathMatch: 'full' },
];
