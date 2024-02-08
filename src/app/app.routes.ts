import { Routes } from '@angular/router';
import { authAdminGuard } from './core/guard/auth-admin.guard';
import { PATHS_MODULE_CLIENT } from '@constants/routes';

const TITLE_DEFAULT = 'SoundLab - La casa del DJ';
const { PRIVATE, PUBLIC } = PATHS_MODULE_CLIENT;

export const routes: Routes = [
  {
    path: PRIVATE.ROOT,
    canActivate: [authAdminGuard],
    loadComponent: () =>
      import('@shared/layout-private/layout-private.component'),
    children: [
      {
        path: PRIVATE.ITEMS,
        title: TITLE_DEFAULT,
        loadComponent: () => import('@private/views/items/items.component'),
      },
      {
        path: PRIVATE.ADMIN_IMAGES,
        title: TITLE_DEFAULT,
        loadComponent: () =>
          import('@private/views/admin-images/admin-images.component'),
      },
      {
        path: PRIVATE.TAGS,
        title: TITLE_DEFAULT,
        loadComponent: () => import('@private/views/tags/tags.component'),
      },
      {
        path: PRIVATE.DEVELOPER,
        title: TITLE_DEFAULT,
        loadComponent: () =>
          import('@private/views/developer/developer.component'),
      },
      {
        path: '',
        redirectTo: `/${PRIVATE.ROOT}/${PRIVATE.ITEMS}`,
        pathMatch: 'full',
      },
    ],
  },
  {
    path: PUBLIC.ROOT,
    loadComponent: () =>
      import('@shared/layout-public/layout-public.component'),
    children: [
      {
        path: PUBLIC.HOME,
        title: TITLE_DEFAULT,
        loadComponent: () => import('@public/views/home/home.component'),
      },
      {
        path: PUBLIC.CONTACT_US,
        title: 'Contactanos via email',
        loadComponent: () =>
          import('@public/views/contact-me/contact-me.component'),
      },
      {
        path: PUBLIC.LOGIN,
        title: 'Inicia sesion',
        loadComponent: () =>
          import('@public/views/login-view/login-view.component'),
      },
      {
        path: '',
        redirectTo: `/${PUBLIC.HOME}`,
        pathMatch: 'full',
      },
    ],
  },
  { path: '**', redirectTo: `/${PUBLIC.HOME}`, pathMatch: 'full' },
];
