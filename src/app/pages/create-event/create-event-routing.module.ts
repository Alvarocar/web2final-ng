import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopheadModule } from 'src/app/shared/tophead/tophead.module';
import { CreateEventComponent } from './create-event.component';

const routes: Routes = [{ path: '', component: CreateEventComponent }];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    TopheadModule,
  ],
  exports: [RouterModule]
})
export class CreateEventRoutingModule { }
