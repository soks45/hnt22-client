import { Directive, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Constructor } from '@mixins/mixins';
import { User } from '@models/user';

export function HasUserFromRouterMixin<TBase extends Constructor>(Base: TBase) {
  @Directive()
  abstract class HasUserFromRouter extends Base {
    user: User;
    protected activateRoute: ActivatedRoute = inject(ActivatedRoute);
    protected constructor(...args: any[]) {
      super(args);

      this.user = this.activateRoute.snapshot.data['user'];
    }
  }

  return HasUserFromRouter;
}
