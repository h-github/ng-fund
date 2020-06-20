import { Component } from '@angular/core';

@Component({
  selector: 'event-app',
  template: ` <event-nav-bar></event-nav-bar>
    <event-list></event-list>`,
})
export class EventsAppComponent {
  title = 'ng-fund';
}
