import { Component, Input, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { DestroyMixin } from '@mixins/destroy.mixin';
import { BaseObject } from '@mixins/mixins';
import { MenuItem } from '@models/menu-item';
import { filter } from 'rxjs';

@Component({
  selector: 'hnt22-side-bar-item',
  templateUrl: './side-bar-item.component.html',
  styleUrls: ['./side-bar-item.component.scss']
})
export class SideBarItemComponent implements OnInit {
  isActive = false;
  @Input() item!: MenuItem

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.isActive = this.router.url === this.item.ref;
  }
}
