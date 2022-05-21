import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainTopHeadComponent } from './main-top-head/main-top-head.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    MainTopHeadComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    MainTopHeadComponent
  ]
})
export class TopheadModule { }
