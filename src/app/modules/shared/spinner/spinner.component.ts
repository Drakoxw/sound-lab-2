import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

type Mode = 'full' | 'small'

@Component({
  selector: 'app-spinner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './spinner.component.html'
})
export class SpinnerComponent {
  @Input() mode: Mode = 'full';
}
