import { Routes } from '@angular/router';
import { InitComponent } from './modules/public/views/init/init.component';
import { HomeComponent } from './modules/public/views/home/home.component';

export const routes: Routes = [
  { path: '', component: InitComponent },
  { path: 'home', component: HomeComponent },
];
