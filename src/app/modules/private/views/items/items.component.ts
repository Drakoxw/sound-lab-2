import { Component, OnInit, inject } from '@angular/core';

import { ToastrAlertService } from '@services/index';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '@shared/button/button.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TagsService } from '@private/services/tags.service';

@Component({
  selector: 'app-items',
  standalone: true,
  imports: [CommonModule, FormsModule , ButtonComponent, ReactiveFormsModule],
  templateUrl: './items.component.html',
  styleUrl: './items.component.css'
})
export default class ItemsComponent implements OnInit {

  toastr = inject(ToastrAlertService)
  tagsService = inject(TagsService)

  ngOnInit(): void {
    if (!this.tagsService.list().length) {
      this.tagsService.listTags();
    }
  }

}
