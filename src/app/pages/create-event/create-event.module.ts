import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateEventRoutingModule } from './create-event-routing.module';
import { CreateEventComponent } from './create-event.component';
import { TopheadModule } from 'src/app/shared/tophead/tophead.module';
import { FormModule } from 'src/app/shared/form/form.module';


@NgModule({
  declarations: [
    CreateEventComponent,
  ],
  imports: [
    CommonModule,
    CreateEventRoutingModule,
    TopheadModule,
    FormModule,
  ]
})
export class CreateEventModule { }
