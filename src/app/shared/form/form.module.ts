import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateEventFormComponent } from './create-event-form/create-event-form.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CreateEventFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  exports: [
    CreateEventFormComponent,
  ]
})
export class FormModule { }
