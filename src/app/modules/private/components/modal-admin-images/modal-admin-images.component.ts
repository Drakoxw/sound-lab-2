import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  Output,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
// import { SwalComponent, SweetAlert2LoaderService, SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { Subscription, timer } from 'rxjs';

import { Base64, FileAssets } from '@interfaces/index';
import { AssetsService } from '@private/services';
import { ToastrAlertService } from '@services/index';
import { BaseToStringPipe } from '@pipes/base-to-string.pipe';
import { FormInputFileComponent } from '@shared/form-input-file/form-input-file.component';
import { ButtonComponent } from '@shared/button/button.component';
import { ModalComponent } from '@shared/modal/modal.component';

@Component({
  selector: 'app-modal-admin-images',
  standalone: true,
  imports: [
    CommonModule,
    BaseToStringPipe,
    FormInputFileComponent,
    ButtonComponent,
    ModalComponent
  ],
  templateUrl: './modal-admin-images.component.html',
})
export class ModalAdminImagesComponent implements OnDestroy {
  @Output() closeModal = new EventEmitter<boolean>();
  @Input() DataFile!: FileAssets;
  // https://blog.stackademic.com/use-the-sweetalert2-in-angular-common-layout-83c1a65d26c5
  // @ViewChild('changeSwal') changeSwal!: SwalComponent;
  // @ViewChild('deleteSwal') deleteSwal!: SwalComponent;

  deleteModal = false
  changeModal = false

  assetsServ = inject(AssetsService);
  toast = inject(ToastrAlertService);
  deletePath: string = '';

  subs: Subscription[] = [];

  base: Base64 = {
    name: '',
    mimeType: '',
    base64: '',
  };

  ngOnDestroy(): void {
    this.subs.forEach((sub) => sub.unsubscribe());
  }

  close() {
    this.closeModal.emit(false);
  }

  activateDelete(path: string) {
    this.deletePath = path;
    this.deleteModal = true;
  }

  deleteFile() {
    if (this.deletePath) {
      this.assetsServ.deleteAsset(this.deletePath);
      this.close();
    }
  }

  loadBase(base: Base64) {
    this.base = base;
    if (this.DataFile.mimeType !== this.base.mimeType) {
      this.toast.info(
        'Los formatos son diferentes estos puede generar errores!',
        'ATENCION!',
        12000
      );
    }
    this.subs.push(
      timer(300).subscribe({
        complete: () => this.changeModal = true,
      })
    );
  }

  confirmChange() {
    this.assetsServ.changeAsset(this.DataFile.path, this.base);
    this.close();
  }
}
