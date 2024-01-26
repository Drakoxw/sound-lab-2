import { Component, WritableSignal, inject } from '@angular/core';
import { NgClass } from '@angular/common';
import { RouterModule } from '@angular/router';

import { WHATSAPP_LINK } from '@constants/index';
import { PATHS_FULL_CLIENT } from '@constants/routes';
import { AuthService } from '@services/index';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [NgClass, RouterModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css',
})
export class NavBarComponent {
  private authService = inject(AuthService);

  linkWhastapp = WHATSAPP_LINK;

  routes = PATHS_FULL_CLIENT;

  showNavbar: boolean = false;

  activeNav: WritableSignal<boolean> = this.authService.menu;
  isAdmin: WritableSignal<boolean> = this.authService.admin;

  dev: boolean = false;
}
