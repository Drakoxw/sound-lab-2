import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Base64 } from '@interfaces/index';
import { convertFileToBase64 } from '@utils/index';

@Component({
  selector: 'form-input-file',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './form-input-file.component.html',
})
export class FormInputFileComponent {
  @Output() changeFile = new EventEmitter<Base64>();
  @Input() placeholder: string = '';
  @Input() basic: boolean = false;
  @Input() typeButton: boolean = false;
  @Input() label: string = '';

  async onChange(ev: Event) {
    const file = (ev as any).target.files[0];
    const base = await convertFileToBase64(file)
    this.changeFile.emit(base);
  }

}
