import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter, booleanAttribute } from '@angular/core';
import { ButtonComponent } from '@shared/button/button.component';

type ModalType = 'success' | 'error' | 'warning' | 'info';

@Component({
  selector: 'lib-modal',
  standalone: true,
  imports: [ButtonComponent, CommonModule],
  templateUrl: './modal.component.html'
})
export class ModalComponent {
  @Input({ required: true }) show: boolean = false;
  @Input() title: string = 'Modal';
  @Input() text: string = '';
  @Input() icon?: ModalType;
  @Input({ transform: booleanAttribute }) showCancelButton: boolean = false;
  @Input({ transform: booleanAttribute }) showConfirmButton: boolean = false;
  @Output() close = new EventEmitter<void>();
  @Output() confirm = new EventEmitter<void>();

  onClose() {
    this.close.emit()
  }

  onConfirm() {
    this.confirm.emit()
    this.close.emit()
  }

}
