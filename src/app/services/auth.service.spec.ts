import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AuthService } from './auth.service';
import { LocalstorageService } from '@services/localstorage.service';
import { LoginRequest } from '@interfaces/index';

describe('AuthService', () => {
  let service: AuthService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AuthService, LocalstorageService],
    });

    service = TestBed.inject(AuthService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  const loginRequest: LoginRequest = {
    user: 'user',
    pass: 'pass'
  };

  it('Realizar un login', () => {
    const mockLoginResponse = {
      data: { token: 'mockToken' },
      message: 'Login successful',
    };

    service.login(loginRequest).subscribe((result) => {
      expect(result.error).toBeFalsy();
      expect(result.msg).toEqual('Login successful');
    });

    const req = httpMock.expectOne(`${service['url']}/auth/login`);
    expect(req.request.method).toEqual('POST');
    req.flush(mockLoginResponse);
  });

});
