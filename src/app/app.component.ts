import { Component } from '@angular/core';
import { MenuItem } from '@models/menu-item';
import { AuthService } from '@services/auth.service';
import { MessagesService } from '@services/messages.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  menuItems: MenuItem[] = [
    {
      name: 'Главная',
      ref: '/'
    },
    {
      name: 'Вход',
      ref: '/sign-in'
    },
    {
      name: 'FAQ',
      ref: '/'
    },
  ];
  constructor(private auth: AuthService, private messages: MessagesService) {
  }

  // login() {
  //   this.auth.login({
  //     username: 'username',
  //     password: 'password',
  //   }).subscribe(console.log)
  // }

  // signup() {
  //   this.auth.signup({
  //     username: 'username',
  //     password: 'password',
  //     avatarUrl: 'avatarUrl',
  //     firstName: 'firstName',
  //     lastName: 'lastName'
  //   }).subscribe(console.log);
  // }

  logout() {
    this.auth.logout()
      .subscribe(console.log);
  }

  error() {
    this.messages.error('privet', 'action')
  }

  info() {
    this.messages.info('privet', 'action')
  }

  success() {
    this.messages.success('privet', 'action')
  }
}
