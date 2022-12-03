import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DestroyMixin } from '@mixins/destroy.mixin';
import { BaseObject } from '@mixins/mixins';
import { MenuItem } from '@models/menu-item';
import { User } from '@models/user';
import { AuthService } from '@services/auth.service';
import { Observable, takeUntil } from 'rxjs';

@Component({
  selector: 'hnt22-account-page',
  templateUrl: './account-page.component.html',
  styleUrls: ['./account-page.component.scss']
})
export class AccountPageComponent extends DestroyMixin(BaseObject) implements OnInit {
  user: User;
  constructor(private activateRoute: ActivatedRoute) {
    super();

    this.user = this.activateRoute.snapshot.data['user'];
  }

  ngOnInit(): void {
    console.log(this.user);
  }


  readonly defaultUserTabs: MenuItem[] = [
    {
      name: 'Мои заявления',
      ref: ''
    },
    {
      name: 'Новое заявления',
      ref: ''
    }
  ];

  readonly adminUserTabs: MenuItem[] = [
    {
      name: 'Заявления',
      ref: '',
    },
    {
      name: 'Новое заявления',
      ref: ''
    }
  ];
}
