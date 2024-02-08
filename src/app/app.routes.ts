import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('@shared/dashboard-public/dashboard-public.component'),
    children: [
      {
        path: '',
        title: 'Bienvenido a la casa del DJ',
        loadComponent: () => import('@public/views/home/home.component').then(m => m.HomeComponent)
      },
      {
        path: 'inicio',
        title: 'Bienvenido a la casa del DJ',
        loadComponent: () => import('@public/views/home/home.component').then(m => m.HomeComponent)
      }
    ]
  },
  { path: '**', redirectTo: '/home', pathMatch: 'full' },
];
