import { TestBed } from '@angular/core/testing';
import { LocalstorageService } from './localstorage.service';

describe('LocalstorageService', () => {
  let service: LocalstorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LocalstorageService],
    });

    service = TestBed.inject(LocalstorageService);
  });
  const token = 'testToken';

  it('Valida la creacion', () => {
    expect(service).toBeTruthy();
  });

  it('Guardar el token', () => {
    service.setToken(token);
    expect(service.getToken()).toEqual(token);
  });

  it('Eliminar token', () => {
    service.setToken(token);
    service.deleteToken();
    expect(service.getToken()).toEqual('');
  });

  it('Limpiar el storage', () => {
    spyOn(service, 'clear');
    service.clear();
    expect(service.clear).toHaveBeenCalled();
  });
});
