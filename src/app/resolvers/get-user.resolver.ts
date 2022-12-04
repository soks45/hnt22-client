import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { User } from '@models/user';
import { AuthService } from '@services/auth.service';
import { filter, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetUserResolver implements Resolve<User> {
  constructor(private auth: AuthService) {
  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<User> {
    // @ts-ignore
    return this.auth.user$.pipe(filter(u => u !== null));
  }
}
