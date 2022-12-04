import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { CarrierRequest } from '@models/request';
import { Observable } from 'rxjs';

export interface GetQrResponse {
  key: string;
}
@Injectable({
  providedIn: 'root'
})
export class QrCodesService {

  constructor(private http: HttpClient) { }

  getQR(requestId: number): Observable<GetQrResponse> {
    return this.http.get<GetQrResponse>(`${ environment.apiUrl }/Request/GetQrCode/${ requestId }`, { withCredentials: true });
  }

  checkQR(hash: string): Observable<CarrierRequest> {
    return this.http.get<CarrierRequest>(`${ environment.apiUrl }/Request/DecodeQrCode/${ hash }`, { withCredentials: true });
  }
}
