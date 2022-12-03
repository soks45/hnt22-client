import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { User } from '@models/user';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetUserResolver implements Resolve<User> {
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<User> {
    return of({
      userId: 1,
      login: 'login',
      firstName: 'firstName',
      lastName: 'lastName',
      organization: {
        organizationId: 1,
        INN: 1,
        name: 'daw'
      },
      jobTitle: 'jobTitle',
      isAdmin: false
    });
  }
}
