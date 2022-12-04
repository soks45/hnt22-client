import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QrCodesService {

  constructor(private http: HttpClient) { }

  getQR(requestId: string): Observable<string> {
    return this.http.get<string>(`${ environment.apiUrl }/Request/GetQrCode/${ requestId }`, { withCredentials: true });
  }

  checkQR(hash: string): Observable<string> {
    return this.http.get<string>(`${ environment.apiUrl }`, { withCredentials: true });
  }
}
