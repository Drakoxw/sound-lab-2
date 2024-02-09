import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

export type TitleTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' ;
export type TitleColor = 'success' | 'danger' | 'warning' | 'info' | 'white' | 'dark';

@Component({
  selector: 'lib-title',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './title.component.html',
  styleUrl: './title.component.css'
})
export class TitleComponent implements OnInit {
  @Input() tag: TitleTag = 'h1';
  @Input() set color(c: TitleColor) {
    this._color = c;
  }
  _color: TitleColor = 'white';
  classColor = 'text-white'

  ngOnInit(): void {
    switch (this._color) {
      case 'danger':
        this.classColor = 'text-red-600';
        break;
      case 'warning':
        this.classColor = 'text-orange-500';
        break;
      case 'info':
        this.classColor = 'text-blue-600';
        break;
      case 'success':
        this.classColor = 'text-green-600';
        break;
      case 'white':
        this.classColor = 'text-white';
        break;
      case 'dark':
        this.classColor = 'text-black';
        break;
      default:
        this.classColor = 'text-white';
        break;
    }
  }
}
