import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NavBarComponent } from '@shared/nav-bar/nav-bar.component';
import { SideNavBarComponent } from '@shared/side-nav-bar/side-nav-bar.component';

@Component({
  selector: 'app-layout-private',
  standalone: true,
  imports: [RouterModule, NavBarComponent, SideNavBarComponent],
  templateUrl: './layout-private.component.html',
  styleUrl: './layout-private.component.css'
})
export default class LayoutPrivateComponent {
}
