import { Component, Input } from '@angular/core';
import { MenuItem } from '@models/menu-item';

@Component({
  selector: 'hnt22-side-bar-item',
  templateUrl: './side-bar-item.component.html',
  styleUrls: ['./side-bar-item.component.scss']
})
export class SideBarItemComponent {
  @Input() item!: MenuItem
}
