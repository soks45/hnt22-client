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
      name: 'FAQ',
      ref: '/'
    },
  ];
  constructor(private auth: AuthService, private messages: MessagesService) {
  }
}
