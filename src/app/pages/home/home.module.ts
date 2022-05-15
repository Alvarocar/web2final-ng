import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { MainTopHeadComponent } from 'src/app/components/tophead/main-top-head/main-top-head.component';


@NgModule({
  declarations: [
    HomeComponent,
    MainTopHeadComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
