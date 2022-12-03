import { Component, Input } from '@angular/core';
import { Item } from '@ui/header/components/menu/menu-item/menu-item.component';

@Component({
  selector: 'hnt22-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  @Input() menuItems: Item[] = [];
}
