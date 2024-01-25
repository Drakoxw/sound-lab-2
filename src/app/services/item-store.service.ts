import { Injectable, inject, signal } from '@angular/core';
import {
  Base64,
  ImageMimeType,
  NewImageRequest,
  NewItemStoreRequest,
} from '@interfaces/index';
import { HttpService } from './http.service';
import { ToastrAlertService } from './toastr-alert.service';
import { BehaviorSubject, Subscription } from 'rxjs';
import { IMG_DEFAULT } from '@constants/index';

@Injectable({
  providedIn: 'root',
})
export class ItemStoreService {
  private httpServ = inject(HttpService);
  private toastr = inject(ToastrAlertService);

  readonly loadingImage = signal(false);
  readonly loadingItem = signal(false);

  readonly attachedImages: string[] = [];
  public url = new BehaviorSubject<string>(`../../../../../${IMG_DEFAULT}`);

  subs: Subscription[] = [];

  saveImage(base: Base64, isPrincipal:boolean = false) {
    const payload: NewImageRequest = {
      nameFile: base.name.replace(/\.(?=.*\..*$)/g, ''),
      mimeType: base.mimeType as ImageMimeType,
      base64: base.base64,
    };
    this.loadingImage.set(true);
    this.subs.push(
      this.httpServ.saveNewImage(payload).subscribe((res) => {
        if (!res.error) {
          this.toastr.success(res.msg);
          if (isPrincipal) {
            this.url.next(String(res.url));
          } else {
            this.attachedImages.push(String(res.url))
          }
        } else {
          this.toastr.error(res.msg);
        }
        this.loadingImage.set(false);
      })
    );
  }

  createItemStore(payload: NewItemStoreRequest) {
    this.loadingItem.set(true);
    this.subs.push(
      this.httpServ.saveNewItemStore(payload).subscribe((res) => {
        this.loadingItem.set(false);
        if (res.error) this.toastr.error(res.msg);
        else this.toastr.success(res.msg);
      })
    );
  }

  resetService() {
    this.attachedImages.length = 0;
    this.url.next(`../../../../../${IMG_DEFAULT}`);
  }

  onDestroy() {
    this.subs.forEach((sub) => sub.unsubscribe());
  }
}
