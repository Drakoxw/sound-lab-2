import { Routes } from '@angular/router';
import { HomeComponent } from '@public/views/home/home.component';
import { InitComponent } from '@public/views/init/init.component';

export const routes: Routes = [
  { path: '', component: InitComponent },
  { path: 'home', component: HomeComponent },
  // { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: HomeComponent },
];
