import { Component, Input } from '@angular/core';
import { DestroyMixin } from '@mixins/destroy.mixin';
import { BaseObject } from '@mixins/mixins';
import { MenuItem } from '@models/menu-item';
import { User } from '@models/user';
import { AuthService } from '@services/auth.service';
import { take, takeUntil } from 'rxjs';

@Component({
  selector: 'hnt22-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent extends DestroyMixin(BaseObject) {
  user: User | null = null;
  constructor(private auth: AuthService) {
    super();

    this.auth.user$.pipe(takeUntil(this.destroyed$)).subscribe(u => this.user = u);
  }
  @Input() menuItems: MenuItem[] = [];

  logout() {
    this.auth.logout().subscribe();
  }
}
