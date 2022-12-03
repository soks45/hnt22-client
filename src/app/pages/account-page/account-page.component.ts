import { Component, OnInit } from '@angular/core';
import { DestroyMixin } from '@mixins/destroy.mixin';
import { HasUserFromRouterMixin } from '@mixins/has-user-from-router';
import { BaseObject } from '@mixins/mixins';
import { MenuItem } from '@models/menu-item';

@Component({
  selector: 'hnt22-account-page',
  templateUrl: './account-page.component.html',
  styleUrls: ['./account-page.component.scss']
})
export class AccountPageComponent extends HasUserFromRouterMixin(DestroyMixin(BaseObject)) implements OnInit {
  constructor() {
    super();
  }

  ngOnInit(): void {
    console.log(this.user);
  }

  get isAdmin(): boolean {
    return this.user.isAdmin;
  }
  readonly defaultUserTabs: MenuItem[] = [
    {
      name: 'Мои заявления',
      ref: 'account/request/list'
    },
    {
      name: 'Новое заявления',
      ref: 'account/request/new'
    }
  ];

  readonly adminUserTabs: MenuItem[] = [
    {
      name: 'Заявления',
      ref: 'account/request/list',
    },
  ];
}
