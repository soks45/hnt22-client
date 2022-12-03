import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './side-bar.component';
import { SideBarItemComponent } from './components/side-bar-item/side-bar-item.component';



@NgModule({
  declarations: [
    SideBarComponent,
    SideBarItemComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SideBarComponent
  ]
})
export class SideBarModule { }
