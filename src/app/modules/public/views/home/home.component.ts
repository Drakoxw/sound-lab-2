import { Component } from '@angular/core';
import { NgxJsonLdModule } from '@ngx-lite/json-ld';

import { WHATSAPP_PHONE } from '@constants/index';
import { FooterComponent } from '@shared/footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FooterComponent, NgxJsonLdModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export default class HomeComponent {
  ubicacion: string =
    'https://www.google.com/maps/place/Cra.+52+%2374-52,+El+Carmelo,+Itagüi,+Medellín,+Antioquia/@6.1847938,-75.5986936,17.15z/data=!4m6!3m5!1s0x8e46824061936f6b:0xb3bf4eade1e0eac9!8m2!3d6.1847902!4d-75.5963732!16s%2Fg%2F11jds40gqm?entry=ttu';

  schema = {
    '@context': 'https://schema.org',
    '@type': 'Store',
    name: 'SoundLab',
    description:
      'Servicio técnico, repuestos y accesorios para DJs Alquiler, venta y programación Pixel Led, Pantallas Led, Cabezas móviles',
    openingHours: 'Mo-Fr 07:00-23:00',
    telephone: `+57 ${WHATSAPP_PHONE}`,
    image: 'https://www.cifrado.com.co/sound-lab/sound-lab-icon.png',
    address: {
      '@type': 'PostalAddress',
      streetAddress:
        'Cr 52 #74-5 Barrio Santamaría-El Carmelo, Itagüi, Antioquia',
      addressLocality: 'Itagüi',
      addressRegion: 'ANT',
      addressCountry: 'CO',
    },
  };
}
