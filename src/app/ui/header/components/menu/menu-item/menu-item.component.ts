import { Component, Input } from '@angular/core';
import { MenuItem } from '@models/menu-item';

@Component({
  selector: 'hnt22-menu-item [item]',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent {
 @Input() item!: MenuItem
}
