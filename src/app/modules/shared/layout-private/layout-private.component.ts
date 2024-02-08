import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NavBarComponent } from '@shared/nav-bar/nav-bar.component';

@Component({
  selector: 'app-layout-private',
  standalone: true,
  imports: [RouterModule, NavBarComponent],
  templateUrl: './layout-private.component.html',
  styleUrl: './layout-private.component.css'
})
export default class LayoutPrivateComponent {

}
