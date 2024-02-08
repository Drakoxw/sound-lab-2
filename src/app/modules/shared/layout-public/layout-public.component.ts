import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ChatMeWhatsappComponent } from '@shared/chat-me-whatsapp/chat-me-whatsapp.component';
import { NavBarComponent } from '@shared/nav-bar/nav-bar.component';

@Component({
  selector: 'app-layout-public',
  standalone: true,
  imports: [RouterModule, NavBarComponent, ChatMeWhatsappComponent],
  templateUrl: './layout-public.component.html',
  styleUrl: './layout-public.component.css'
})
export default class LayoutPublicComponent {

}
