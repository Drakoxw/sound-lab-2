
import { TestBed } from '@angular/core/testing';
import { ToastrService } from 'ngx-toastr';
import { ToastrAlertService } from './toastr-alert.service';

describe('ToastrAlertService', () => {
  let service: ToastrAlertService;
  let toastrServiceSpy: jasmine.SpyObj<ToastrService>;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('ToastrService', ['success', 'error', 'info', 'warning']);

    TestBed.configureTestingModule({
      providers: [
        ToastrAlertService,
        { provide: ToastrService, useValue: spy }
      ]
    });

    service = TestBed.inject(ToastrAlertService);
    toastrServiceSpy = TestBed.inject(ToastrService) as jasmine.SpyObj<ToastrService>;
  });

  const message = 'Test Message';
  const title = 'Test Title';
  const time = 3000;

  it('Creacion del servicio ToastrService', () => {
    expect(service).toBeTruthy();
  });

  it('llamando al metodo ToastrService.success', () => {
    service.success(message, title, time);
    expect(toastrServiceSpy.success).toHaveBeenCalledWith(message, title, {
      timeOut: 3000,
      positionClass: 'toast-top-right',
    });
  });

  it('llamando al metodo ToastrService.error', () => {
    service.error(message, title, time);
    expect(toastrServiceSpy.error).toHaveBeenCalledWith(message, title, {
      timeOut: time,
      positionClass: 'toast-top-right',
    });
  });

  it('llamando al metodo ToastrService.warning', () => {
    service.warning(message, title, time);
    expect(toastrServiceSpy.warning).toHaveBeenCalledWith(message, title, {
      timeOut: time,
      positionClass: 'toast-top-right',
    });
  });

  it('llamando al metodo ToastrService.info', () => {
    service.info(message, title, time);
    expect(toastrServiceSpy.info).toHaveBeenCalledWith(message, title, {
      timeOut: time,
      positionClass: 'toast-top-right',
    });
  });

});
