import { Injectable, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environments/environment';
import { User, UserDetails } from '@models/user';
import { BehaviorSubject, map, Observable, of, Subscription } from 'rxjs';
import { tap, delay, finalize } from 'rxjs/operators';

interface LoginResult extends User {
  accessToken: string;
  refreshToken: string;
}

export interface SignUpUser extends UserDetails {
  password: string;
}

export interface Login {
  login: string;
  password: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService implements OnDestroy {
  private timer: Subscription | null = null;
  private userSource$ = new BehaviorSubject<User | null>(null);
  user$ = this.userSource$.asObservable();
  isAdmin$ = this.userSource$.asObservable().pipe(map((u) => u?.organization.organizationId === 1));

  private storageEventListener(event: StorageEvent) {
    if (event.storageArea === localStorage) {
      if (event.key === 'logout-event') {
        this.stopTokenTimer();
        this.userSource$.next(null);
      }

      if (event.key === 'login-event') {
        this.stopTokenTimer();
        this.http.get<LoginResult>(`${ environment.apiUrl }/api/account/user`)
          .pipe(tap(x => this.userSource$.next(x)))
          .subscribe();
      }
    }
  }

  constructor(private router: Router, private http: HttpClient) {
    window.addEventListener('storage', this.storageEventListener.bind(this));
  }

  ngOnDestroy(): void {
    window.removeEventListener('storage', this.storageEventListener.bind(this));
  }

  login(login: Login) {
    return this.http
      .post<LoginResult>(`${ environment.apiUrl }/account/login`, login)
      .pipe(
        tap((x) => {
          console.log(x, 'login');
          this.userSource$.next(x);
          this.setLocalStorage(x);
          this.startTokenTimer();
        })
      );
  }

  signup(user: SignUpUser) {
    return this.http
      .post<LoginResult>(`${ environment.apiUrl }/account/register`, user)
      .pipe(
        tap((x) => {
          this.userSource$.next(x);
          this.setLocalStorage(x);
          this.startTokenTimer();
        })
      );
  }

  logout() {
    return this.http
      .post<void>(`${ environment.apiUrl }/account/logout`, {})
      .pipe(
        finalize(() => {
          this.clearLocalStorage();
          this.userSource$.next(null);
          this.stopTokenTimer();
        })
      );
  }

  refreshToken(): Observable<LoginResult | null> {
    const refreshToken = localStorage.getItem('refresh_token');

    if (!refreshToken) {
      this.clearLocalStorage();
      return of(null);
    }

    return this.http
      .post<LoginResult>(`${ environment.apiUrl }/account/refresh-token`, { refreshToken })
      .pipe(
        tap((x) => {
          this.userSource$.next(x);
          this.setLocalStorage(x);
          this.startTokenTimer();
        })
      );
  }

  setLocalStorage(x: LoginResult) {
    localStorage.setItem('access_token', x.accessToken);
    localStorage.setItem('refresh_token', x.refreshToken);
    localStorage.setItem('login-event', 'login' + Math.random());
  }

  clearLocalStorage() {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    localStorage.setItem('logout-event', 'logout' + Math.random());
  }

  private getTokenRemainingTime() {
    const accessToken = localStorage.getItem('access_token');
    if (!accessToken) {
      return 0;
    }

    const jwtToken = JSON.parse(atob(accessToken.split('.')[1]));
    const expires = new Date(jwtToken.exp * 1000);
    return expires.getTime() - Date.now();
  }

  private startTokenTimer() {
    const timeout = this.getTokenRemainingTime();
    this.timer = of(true)
      .pipe(
        delay(timeout),
        tap(() => this.refreshToken().subscribe()),
      )
      .subscribe();
  }

  private stopTokenTimer() {
    this.timer?.unsubscribe();
  }
}
