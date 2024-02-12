import {
  ApplicationConfig,
  importProvidersFrom,
  isDevMode,
} from '@angular/core';
import { provideRouter, withViewTransitions } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideServiceWorker } from '@angular/service-worker';
import { HttpClientModule, withInterceptors } from '@angular/common/http';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';

import { provideAnimations } from '@angular/platform-browser/animations';
import { provideToastr } from 'ngx-toastr';
import { AuthorizationInterceptor } from '@core/interceptors/authorization.interceptor';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      routes,
      withViewTransitions({
        skipInitialTransition: true,
      })
    ),
    provideClientHydration(),
    provideServiceWorker('ngsw-worker.js', {
      enabled: !isDevMode(),
      registrationStrategy: 'registerWhenStable:30000',
    }),
    importProvidersFrom(HttpClientModule, ToastrModule, SweetAlert2Module),
    provideHttpClient(
      withFetch(),
      withInterceptors([AuthorizationInterceptor])
    ),
    provideAnimations(),
    provideToastr(),
  ],
};
