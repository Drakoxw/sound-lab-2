import { Routes } from '@angular/router';

const TITLE_DEFAULT = 'SoundLab - La casa del DJ';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('@shared/dashboard-public/dashboard-public.component'),
    children: [
      {
        path: '',
        title: TITLE_DEFAULT,
        loadComponent: () => import('@public/views/home/home.component')
      },
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
        loadComponent: () => import('@public/views/home/home.component')
      }
    ]
  },
  { path: '**', redirectTo: '/inicio', pathMatch: 'full' },
];
