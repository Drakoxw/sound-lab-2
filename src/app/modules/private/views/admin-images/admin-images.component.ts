import { Component, OnInit, inject, OnDestroy } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';

import { FileAssets } from '@interfaces/index';
import { HttpService, ToastrAlertService } from '@services/index';
import { AssetsService } from '@private/services';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '@shared/button/button.component';
import { FilterFileAssetsPipe } from '@pipes/filter-file-assets.pipe';
import { ModalAdminImagesComponent } from '@private/components/modal-admin-images/modal-admin-images.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

@Component({
  selector: 'app-admin-images',
  standalone: true,
  imports: [CommonModule, ButtonComponent, FilterFileAssetsPipe,SweetAlert2Module, ModalAdminImagesComponent],
  templateUrl: './admin-images.component.html',
  styleUrl: './admin-images.component.css'
})
export default class AdminImagesComponent implements OnInit, OnDestroy {
  assetsServ = inject(AssetsService);
  httpServ = inject(HttpService);
  toast = inject(ToastrAlertService);
  clipboard = inject(Clipboard);

  data = this.assetsServ.data;
  loadText = this.assetsServ.loadText;
  filter = '';
  openDetail = false;
  itemFile?: FileAssets;

  ngOnDestroy(): void {
    this.assetsServ.onDestroy();
  }

  ngOnInit(): void {
    this.assetsServ.listAssets();
  }

  changeFilter(val: string) {
    this.filter = val;
  }

  copy(url: string) {
    this.toast.success('Copiado al portapapeles');
    this.clipboard.copy(url);
  }

  open(url: string) {
    window.open(url);
  }

  toggleModal(item?: FileAssets) {
    this.openDetail = !this.openDetail;
    if (item) {
      this.itemFile = item;
    }
  }
}
