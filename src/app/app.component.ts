import { Component } from '@angular/core';
import { AuthService } from '@services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private auth: AuthService) {
  }

  login() {
    this.auth.login({
      username: 'username',
      password: 'password',
    }).subscribe(console.log)
  }

  signup() {
    this.auth.signup({
      username: 'username',
      password: 'password',
      avatarUrl: 'avatarUrl',
      firstName: 'firstName',
      lastName: 'lastName'
    }).subscribe(console.log);
  }

  logout() {
    this.auth.logout()
      .subscribe(console.log);
  }
}
