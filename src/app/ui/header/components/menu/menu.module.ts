import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from 'app/ui/header/components/menu/menu.component';
import { MenuItemModule } from '@ui/header/components/menu/menu-item/menu-item.module';

@NgModule({
  declarations: [
    MenuComponent
  ],
  imports: [
    CommonModule,
    MenuItemModule
  ],
  exports: [
    MenuComponent
  ]
})
export class MenuModule { }
