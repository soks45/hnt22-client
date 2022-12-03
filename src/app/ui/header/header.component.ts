import { Component, Input } from '@angular/core';
import { Item } from '@ui/header/components/menu/menu-item/menu-item.component';

@Component({
  selector: 'hnt22-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() menuItems: Item[] = [];
}
