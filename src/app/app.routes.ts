import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('@shared/dashboard-public/dashboard-public.component'),
    children: [
      {
        path: '',
        title: 'Bienvenido a la casa del DJ',
        loadComponent: () => import('@public/views/home/home.component')
      },
      {
        path: 'inicio',
        title: 'Bienvenido a la casa del DJ',
        loadComponent: () => import('@public/views/home/home.component')
      },
      {
        path: 'contacto',
        title: 'Bienvenido a la casa del DJ',
        loadComponent: () => import('@public/views/home/home.component')
      },
      {
        path: 'login',
        title: 'Inicia sesion',
        loadComponent: () => import('@public/views/home/home.component')
      }
    ]
  },
  { path: '**', redirectTo: '/inicio', pathMatch: 'full' },
];
