import { Component, Input } from '@angular/core';
import { MenuItem } from '@models/menu-item';

@Component({
  selector: 'hnt22-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() menuItems: MenuItem[] = [];
}
