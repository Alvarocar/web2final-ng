import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JoinPartyRoutingModule } from './join-party-routing.module';
import { JoinPartyComponent } from './join-party.component';
import { FormJoinComponent } from './components/form-join/form-join.component';
import { TopheadModule } from 'src/app/shared/tophead/tophead.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    JoinPartyComponent,
    FormJoinComponent
  ],
  imports: [
    CommonModule,
    JoinPartyRoutingModule,
    TopheadModule,
    ReactiveFormsModule,
  ]
})
export class JoinPartyModule { }
