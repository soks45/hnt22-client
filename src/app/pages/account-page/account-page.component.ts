import { Component, OnInit } from '@angular/core';
import { DestroyMixin } from '@mixins/destroy.mixin';
import { HasUserFromRouterMixin } from '@mixins/has-user-from-router';
import { BaseObject } from '@mixins/mixins';
import { MenuItem } from '@models/menu-item';
import { AuthService } from '@services/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'hnt22-account-page',
  templateUrl: './account-page.component.html',
  styleUrls: ['./account-page.component.scss']
})
export class AccountPageComponent extends HasUserFromRouterMixin(DestroyMixin(BaseObject)) {

  isAdmin$: Observable<boolean>;
  constructor(private auth: AuthService) {
    super();

    this.isAdmin$ = this.auth.isAdmin$;
  }

  readonly defaultUserTabs: MenuItem[] = [
    {
      name: 'Мой аккаунт',
      ref: '/account'
    },
    {
      name: 'Мои заявления',
      ref: '/account/request/list'
    },
    {
      name: 'Новое заявления',
      ref: '/account/request/new'
    }
  ];

  readonly adminUserTabs: MenuItem[] = [
    {
      name: 'Мой аккаунт',
      ref: '/account/details'
    },
    {
      name: 'Заявления',
      ref: '/account/request/list',
    },
  ];
}
