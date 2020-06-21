import { Component } from '@angular/core';

@Component({
  selector: 'event-app',
  template: ` <event-nav-bar></event-nav-bar>
    <router-outlet></router-outlet>`,
})
export class EventsAppComponent {
  title = 'ng-fund';
}
