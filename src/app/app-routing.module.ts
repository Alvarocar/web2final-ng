import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
  { path: 'create-event', loadChildren: () => import('./pages/create-event/create-event.module').then(m => m.CreateEventModule) },
  { path: 'show-events', loadChildren: () => import('./pages/show-events/show-events.module').then(m => m.ShowEventsModule) },
  { path: 'event-details/:id', loadChildren: () => import('./pages/event-details/event-details.module').then(m => m.EventDetailsModule) },
  { path: 'join-party/:id', loadChildren: () => import('./pages/join-party/join-party.module').then(m => m.JoinPartyModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
