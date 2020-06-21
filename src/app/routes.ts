import { Routes } from '@angular/router';
import { Error404Component } from './errors/404.component';
import {
  EventCreateComponent,
  EventsListComponent,
  EventListResolver,
  EventDetailsComponent,
  EventRouteActivator,
} from './events/index';

export const appRoutes: Routes = [
  {
    path: 'events/new',
    component: EventCreateComponent,
    canDeactivate: ['canDeactivateCreateEvent'],
  },
  {
    path: 'events',
    component: EventsListComponent,
    resolve: { events: EventListResolver },
  },
  {
    path: 'events/:id',
    component: EventDetailsComponent,
    canActivate: [EventRouteActivator],
  },
  { path: '404', component: Error404Component },
  { path: '', redirectTo: '/events', pathMatch: 'full' },
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then((m) => m.UserModule),
  },
];
