import { Component } from '@angular/core';
import { DestroyMixin } from '@mixins/destroy.mixin';
import { BaseObject } from '@mixins/mixins';
import { User } from '@models/user';
import { AuthService } from '@services/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'hnt22-account-details-page',
  templateUrl: './account-details-page.component.html',
  styleUrls: ['./account-details-page.component.scss']
})
export class AccountDetailsPageComponent extends DestroyMixin(BaseObject) {
  user$: Observable<User | null>;
  constructor(private auth: AuthService) {
    super();

    this.user$ = this.auth.user$;
  }
}
