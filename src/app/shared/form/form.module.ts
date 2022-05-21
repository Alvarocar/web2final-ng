import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateEventFormComponent } from './create-event-form/create-event-form.component';



@NgModule({
  declarations: [
    CreateEventFormComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CreateEventFormComponent,
  ]
})
export class FormModule { }
