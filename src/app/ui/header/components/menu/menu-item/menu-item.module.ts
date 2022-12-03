import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MenuItemComponent } from 'app/ui/header/components/menu/menu-item/menu-item.component';



@NgModule({
  declarations: [
    MenuItemComponent
  ],
  imports: [
    CommonModule,
    RouterLink
  ],
  exports: [
    MenuItemComponent
  ]
})
export class MenuItemModule { }
