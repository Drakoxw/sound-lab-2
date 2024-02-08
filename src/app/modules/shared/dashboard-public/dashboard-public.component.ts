import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavBarComponent } from '@shared/nav-bar/nav-bar.component';

@Component({
  selector: 'app-dashboard-public',
  standalone: true,
  imports: [RouterModule, NavBarComponent],
  templateUrl: './dashboard-public.component.html',
  styleUrl: './dashboard-public.component.css'
})
export default class DashboardPublicComponent {

}
