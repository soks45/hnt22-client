import { Component, Input } from '@angular/core';

export interface Item {
  ref: string;
  name: string;
}
@Component({
  selector: 'hnt22-menu-item [item]',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent {
 @Input() item!: Item
}
