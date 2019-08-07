import { catchError } from 'rxjs/operators';
import { AppConfig } from '../config/config';
import { HttpClient, HttpRequest, HttpEventType } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  private pathAPI = this.config.setting['PathAPI'];

  constructor(private http: HttpClient, private config: AppConfig) {
  }

  uploadFile(file: File): Observable<any> {
    const formData = new FormData();
    formData.append(file.name, file);
    const uploadReq = new HttpRequest('POST', this.pathAPI + 'uploadfile/upload', formData, {
      reportProgress: true,
    });
    return this.http.request(uploadReq);
  }

}
