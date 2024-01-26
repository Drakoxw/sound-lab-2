import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { HttpService } from './http.service';
import { ContactMeRequest } from '@interfaces/index';

describe('HttpService', () => {
  let service: HttpService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HttpService],
    });

    service = TestBed.inject(HttpService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('Servicio creado', () => {
    expect(service).toBeTruthy();
  });

  const contactMeRequest: ContactMeRequest = {
    fullname: 'Drako test',
    email: 'email.dev@mail.com',
    phone: 3108018833,
    subject: 'xxxxx',
    message: 'Hola',
  };

  it('Envio de email ok', () => {
    const mockResponse = { message: 'Email sent successfully' };

    service.sendEmailContactUs(contactMeRequest).subscribe((result) => {
      expect(result.error).toBeFalsy();
      expect(result.msg).toEqual('Email sent successfully');
    });

    const req = httpMock.expectOne(`${service['url']}/mail/contactMe`);
    expect(req.request.method).toEqual('POST');
    req.flush(mockResponse);
  });
});
