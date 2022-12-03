import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment.prod';
import { CarrierRequest } from '@models/request';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestsService {
  constructor(private http: HttpClient) { }

  getRequests(): Observable<CarrierRequest[]> {
    return this.http.get<CarrierRequest[]>(`${ environment.apiUrl }`, { withCredentials: true });
  }

  updateRequest(request: CarrierRequest): Observable<void> {
    return this.http.put<void>(`${ environment.apiUrl }`, { withCredentials: true });
  }
}
