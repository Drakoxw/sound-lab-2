import { Injectable, inject, signal } from '@angular/core';
import { HttpService } from './http.service';
import {
  AdminImageRequest,
  Base64,
  FileAssetsData,
  ImageMimeType,
} from '@interfaces/index';
import { ToastrAlertService } from './toastr-alert.service';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AssetsService {
  httpServ = inject(HttpService);
  toast = inject(ToastrAlertService);

  subs: Subscription[] = [];

  readonly data = signal<FileAssetsData[]>([]);
  readonly loadText = signal('Cargando Carpetas...');

  onDestroy() {
    this.subs.forEach((sub) => sub.unsubscribe());
  }

  listAssets() {
    this.subs[0] = this.httpServ.listAssets().subscribe((res) => {
      if (res.error) {
        return this.toast.error(res.msg);
      }
      if (res.data) this.data.set(res.data);
      else this.loadText.set('No hay se encontraron datos ni archivos!');
    });
  }

  deleteAsset(path: string) {
    const payload: AdminImageRequest = {
      action: 'delete',
      path,
    };
    this.subs[1] = this.httpServ.adminAssets(payload).subscribe((res) => {
      if (res.error) {
        return this.toast.error(res.msg);
      }
      this.listAssets();
      return this.toast.info(res.msg);
    });
  }

  changeAsset(path: string, base: Base64) {
    const payload: AdminImageRequest = {
      action: 'update',
      path,
      base64: base.base64,
      mimeType: base.mimeType as ImageMimeType,
    };
    this.subs[2] = this.httpServ.adminAssets(payload).subscribe((res) => {
      if (res.error) {
        return this.toast.error(res.msg);
      }
      this.listAssets();
      return this.toast.info(res.msg);
    });

  }
}
