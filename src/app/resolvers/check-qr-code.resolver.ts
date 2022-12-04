import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { CarrierRequest } from '@models/request';
import { QrCodesService } from '@services/qr-codes.service';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CheckQrCodeResolver implements Resolve<CarrierRequest> {
  constructor(private qrCodeServices: QrCodesService) {
  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<CarrierRequest> {
    const hash = route.params['id'];
    return this.qrCodeServices.checkQR(hash).pipe(tap(console.log));
  }
}
