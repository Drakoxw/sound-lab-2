import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TagsService } from '@private/services/tags.service';
import { ToastrAlertService } from '@services/toastr-alert.service';
import { ButtonComponent } from '@shared/button/button.component';

@Component({
  selector: 'app-tags',
  standalone: true,
  imports: [CommonModule, FormsModule , ButtonComponent, ReactiveFormsModule],
  templateUrl: './tags.component.html',
})
export default class TagsComponent implements OnInit, OnDestroy {
  toastr = inject(ToastrAlertService)
  tagsService = inject(TagsService)


  ngOnDestroy(): void {
    this.tagsService.onDestroy()
  }

  ngOnInit(): void {
    if (!this.tagsService.list().length) {
      this.tagsService.listTags();
    }
  }
}
