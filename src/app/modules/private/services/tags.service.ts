import { Injectable, computed, inject, signal } from '@angular/core';
import { HttpService, ToastrAlertService } from '@services/index';

import { DataListTags } from '@interfaces/index';

interface State {
  list: DataListTags[]
  load: boolean
  reloadList: boolean
}

@Injectable({
  providedIn: 'root'
})
export class TagsService {

  httpService = inject(HttpService)
  toastr = inject(ToastrAlertService)

  #state = signal<State>({ list: [], load: false, reloadList: false })

  list = computed(() => this.#state().list);
  load = computed(() => this.#state().load);
  reloadList = computed(() => this.#state().reloadList);

  newTag = ''
  private blocking = false

  listTags() {
    if (this.blocking) {
      return
    }

    this.blocking = true;
    this.#state.update((value) => ({ ...value, reloadList: true}));
    this.httpService.listTags().subscribe(res => {
      if (!res.error && res.data) {
        this.#state.update((value) => ({ ...value, list: res.data ?? []}));
      } else {
        this.toastr.error(res.msg);
      }
    })
    this.#state.update((value) => ({ ...value, reloadList: false}));
    this.blocking = false;
  }

  createTag() {
    if (this.newTag.length < 3) { this.toastr.warning('El nombre debe tener al menos 3 caracteres') }
    this.#state.update((value) => ({ ...value, load: true }));
    this.httpService.createTag(this.newTag).subscribe(res => {
      this.newTag = ''
      this.#state.update((value) => ({ ...value, load: false }));
      if (!res.error) {
        this.toastr.success(res.msg);
        this.listTags();
      } else {
        this.toastr.error(res.msg);
      }
    })
  }

}
