import { Component } from '@angular/core';
import { FooterComponent } from '@shared/footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export default class HomeComponent {
  ubicacion: string =
    'https://www.google.com/maps/place/Cra.+52+%2374-52,+El+Carmelo,+Itagüi,+Medellín,+Antioquia/@6.1847938,-75.5986936,17.15z/data=!4m6!3m5!1s0x8e46824061936f6b:0xb3bf4eade1e0eac9!8m2!3d6.1847902!4d-75.5963732!16s%2Fg%2F11jds40gqm?entry=ttu';
}
