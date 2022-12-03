import { Component, Input } from '@angular/core';
import { MenuItem } from '@models/menu-item';

@Component({
  selector: 'hnt22-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent {
  @Input() menuItems: MenuItem[] = [];
}
