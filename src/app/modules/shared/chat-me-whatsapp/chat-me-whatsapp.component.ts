import { Component } from '@angular/core';
import { WHATSAPP_LINK } from '@constants/index';

@Component({
  selector: 'app-chat-me-whatsapp',
  standalone: true,
  imports: [],
  templateUrl: './chat-me-whatsapp.component.html',
  styleUrl: './chat-me-whatsapp.component.css'
})
export class ChatMeWhatsappComponent {
  linkWhastapp = WHATSAPP_LINK;
}
