import { Injectable, inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

const config = {
  timeOut: 5000,
  positionClass: 'toast-top-right',
};

@Injectable({
  providedIn: 'root',
})
export class ToastrAlertService {
  private toastr = inject(ToastrService);

  success(message: string, title: string = 'Ok', time: number = 5000): void {
    this.toastr.success(message, title, {
      timeOut: time,
      positionClass: config.positionClass,
    });
  }

  error(message: string, title: string = 'Error!', time: number = 5000): void {
    this.toastr.error(message, title, {
      timeOut: time,
      positionClass: config.positionClass,
    });
  }

  info(message: string, title: string = 'Alerta!', time: number = 5000) {
    this.toastr.info(message, title, {
      timeOut: time,
      positionClass: config.positionClass,
    });
  }

  warning(message: string, title: string = 'Atención!', time: number = 5000) {
    this.toastr.warning(message, title, {
      timeOut: time,
      positionClass: config.positionClass,
    });
  }
}
