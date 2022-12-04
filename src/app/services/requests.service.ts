import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { CarrierRequest } from '@models/request';
import { Observable, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RequestsService {
  requestChanges$: Observable<void>;
  private requestChangesSource$: Subject<void> = new Subject<void>();
  constructor(private http: HttpClient) {
    this.requestChanges$ = this.requestChangesSource$.asObservable();
  }

  getRequests(): Observable<CarrierRequest[]> {
    return this.http.get<CarrierRequest[]>(`${ environment.apiUrl }/Request/GetRequests`, { withCredentials: true });
  }

  getRequestsById(id: number): Observable<CarrierRequest[]> {
    return this.http.get<CarrierRequest[]>(`${ environment.apiUrl }/Request/GetRequests/${ id }`, { withCredentials: true });
  }

  addRequest(request: CarrierRequest): Observable<void> {
    return this.http.post<void>(`${ environment.apiUrl }/Request/AddRequest`, request, { withCredentials: true }).pipe(tap(() => this.requestChangesSource$.next()));
  }
  updateRequest(request: CarrierRequest): Observable<void> {
    return this.http.post<void>(`${ environment.apiUrl }/Request/EditRequest`, request, { withCredentials: true }).pipe(tap(() => this.requestChangesSource$.next()));
  }
}
