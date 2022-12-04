import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { Organization } from '@models/organization';
import { Vehicle } from '@models/vehicle';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehiclesService {
  constructor(private http: HttpClient) { }

  getVehicles(organisation: Organization): Observable<Vehicle[]> {
    return this.http.post<Vehicle[]>(`${ environment.apiUrl }/Vehicle/GetVehicles`, organisation, { withCredentials: true });
  }
}
