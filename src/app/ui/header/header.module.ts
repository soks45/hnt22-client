import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { HeaderComponent } from './header.component';
import { MenuModule } from '@ui/header/components/menu/menu.module';

@NgModule({
  declarations: [
    HeaderComponent
  ],
    imports: [
        CommonModule,
        MenuModule,
        RouterLink
    ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }
