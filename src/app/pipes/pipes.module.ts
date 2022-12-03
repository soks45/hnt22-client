import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatusPipe } from 'app/pipes/status.pipe';



@NgModule({
  declarations: [
    StatusPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    StatusPipe
  ]
})
export class PipesModule { }
