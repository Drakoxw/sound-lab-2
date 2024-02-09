import { Component } from '@angular/core';
import { EmailFormComponent } from '@public/components/email-form/email-form.component';

@Component({
  selector: 'app-contact-me',
  standalone: true,
  imports: [EmailFormComponent],
  templateUrl: './contact-me.component.html',
  styleUrl: './contact-me.component.css'
})
export default class ContactMeComponent {

}
