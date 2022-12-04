import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { QrCodesService } from '@services/qr-codes.service';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetRequestResolver implements Resolve<boolean> {
  constructor(private qrCodeService: QrCodesService) {
  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return of(true).pipe();
  }
}
