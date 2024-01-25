import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import {
  ResponseBase,
  ContactMeRequest,
  ListTagsResponse,
  DataListTags,
  NewImageRequest,
  NewImageResponse,
  NewItemStoreRequest,
  ErrorsResponse,
  AssetsImageListResponse,
  FileAssetsData,
  AdminImageRequest,
} from '@interfaces/index';
import { URL_API_BASE } from '@constants/common';

import { logDev } from '@utils/console';
import { FileAssetsMock } from '@mocks/index';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  private http = inject(HttpClient);

  private url = URL_API_BASE;

  /**
   * No importar!
   * Metodo para el cathError
   */
  private error(err: HttpErrorResponse) {
    logDev('error http', err.error);
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = err.error.message;
    } else {
      errorMessage = `Error Code: ${err.status}\nMessage: ${err.message}`;
      err.error as unknown as ErrorsResponse
      if (err.error.errors) {
        errorMessage = err.error.errors[0].detail;
      }
    }
    return of({ error: true, msg: errorMessage });
  }

  sendEmailContactUs(payload: ContactMeRequest): Observable<{
    error: boolean;
    msg: string;
  }> {
    const res = { error: false, msg: '' };
    return this.http
      .post<ResponseBase>(`${this.url}/mail/contactMe`, payload)
      .pipe(
        map((r) => {
          res.msg = r.message;
          return res;
        }),
        catchError(this.error)
      );
  }

  listTags(): Observable<{
    error: boolean;
    msg: string;
    data?: DataListTags[];
  }> {
    const res = { error: false, msg: '', data: [{ id: 0, name: '' }] };
    return this.http.get<ListTagsResponse>(`${this.url}/tags/list`).pipe(
      map((r) => {
        res.msg = r.message;
        res.data = r.data;
        return res;
      }),
      catchError(this.error)
    );
  }

  createTag(name: string): Observable<{
    error: boolean;
    msg: string;
  }> {
    const res = { error: false, msg: '' };
    const payload = { name };
    return this.http
      .post<ResponseBase>(`${this.url}/tags/create`, payload)
      .pipe(
        map((r) => {
          res.msg = r.message;
          return res;
        }),
        catchError(this.error)
      );
  }

  saveNewImage(payload: NewImageRequest): Observable<{
    error: boolean;
    msg: string;
    url?: string
  }> {
    const res = { error: false, msg: '', url: '' };
    return this.http
      .post<NewImageResponse>(`${this.url}/store/assets/save-image`, payload)
      .pipe(
        map((r) => {
          res.msg = r.message;
          res.url = r.data.path;
          return res;
        }),
        catchError(this.error)
      );
  }

  saveNewItemStore(payload: NewItemStoreRequest): Observable<{
    error: boolean;
    msg: string;
    data?: any
  }> {
    const res = { error: false, msg: '', data: {} };
    return this.http
      .post<ResponseBase>(`${this.url}/store/items/new`, payload)
      .pipe(
        map((r) => {
          res.msg = r.message;
          res.data = r.data;
          return res;
        }),
        catchError(this.error)
      );
  }

  listAssets(): Observable<{
    error: boolean;
    msg: string;
    data?: FileAssetsData[]
  }> {
    const res = { error: false, msg: '', data: [FileAssetsMock] };
    return this.http
      .get<AssetsImageListResponse>(`${this.url}/store/assets/list`)
      .pipe(
        map((r) => {
          res.msg = r.message;
          res.data = r.data;
          return res;
        }),
        catchError(this.error)
      );
  }

  adminAssets(payload: AdminImageRequest): Observable<{
    error: boolean;
    msg: string;
    data?: FileAssetsData[]
  }> {
    const res = { error: false, msg: '', data: [FileAssetsMock] };
    return this.http
      .post<ResponseBase>(`${this.url}/store/assets/admin`, payload)
      .pipe(
        map((r) => {
          res.msg = r.message;
          res.data = r.data;
          return res;
        }),
        catchError(this.error)
      );
  }
}
