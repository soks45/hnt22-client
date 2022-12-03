import { Component, Input, OnInit } from '@angular/core';
import { GuardsCheckEnd, NavigationEnd, Router } from '@angular/router';
import { DestroyMixin } from '@mixins/destroy.mixin';
import { BaseObject } from '@mixins/mixins';
import { MenuItem } from '@models/menu-item';
import { filter, takeUntil } from 'rxjs';

@Component({
  selector: 'hnt22-side-bar-item',
  templateUrl: './side-bar-item.component.html',
  styleUrls: ['./side-bar-item.component.scss']
})
export class SideBarItemComponent extends DestroyMixin(BaseObject) implements OnInit {
  @Input() item!: MenuItem
  private url: string = '';

  constructor(private router: Router) {
    super();

    router.events
      .pipe(takeUntil(this.destroyed$))
      .subscribe(event => {
        if (event instanceof GuardsCheckEnd) {
          this.url = event.urlAfterRedirects;
        }
      });
  }

  ngOnInit() {
    this.url = this.router.url;
  }

  get isActive(): boolean {
    return this.url === this.item.ref
  }
}
