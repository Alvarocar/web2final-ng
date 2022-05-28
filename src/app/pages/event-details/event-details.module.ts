import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventDetailsRoutingModule } from './event-details-routing.module';
import { EventDetailsComponent } from './event-details.component';
import { TopheadModule } from 'src/app/shared/tophead/tophead.module';
import { GuestsComponent } from './components/guests/guests.component';


@NgModule({
  declarations: [
    EventDetailsComponent,
    GuestsComponent
  ],
  imports: [
    CommonModule,
    EventDetailsRoutingModule,
    TopheadModule,
  ]
})
export class EventDetailsModule { }
