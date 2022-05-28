import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JoinPartyComponent } from './join-party.component';

const routes: Routes = [{ path: '', component: JoinPartyComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JoinPartyRoutingModule { }
