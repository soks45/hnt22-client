import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment.prod';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestsService {
  constructor(private http: HttpClient) { }

  getRequests(): Observable<Request[]> {
    return this.http.get<Request[]>(`${ environment.apiUrl }`, { withCredentials: true });
  }

  updateRequest(request: Request): Observable<void> {
    return this.http.put<void>(`${ environment.apiUrl }`, { withCredentials: true });
  }
}
