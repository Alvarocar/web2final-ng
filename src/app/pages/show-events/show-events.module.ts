import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShowEventsRoutingModule } from './show-events-routing.module';
import { ShowEventsComponent } from './show-events.component';
import { TopheadModule } from 'src/app/shared/tophead/tophead.module';
import { CardEventComponent } from './components/card-event/card-event.component';


@NgModule({
  declarations: [
    ShowEventsComponent,
    CardEventComponent,
  ],
  imports: [
    CommonModule,
    ShowEventsRoutingModule,
    TopheadModule,
  ]
})
export class ShowEventsModule { }
