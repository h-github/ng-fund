import { Component, OnInit } from '@angular/core';
import { EventService } from '../events/shared/event.service';

@Component({
  selector: 'event-nav-bar',
  templateUrl: './navbar.component.html',
  styles: [
    `
      #navbarNavDropdown {
        justify-content: space-between;
      }
    `,
  ],
})
export class NavBarComponent implements OnInit {
  events: any[];

  constructor(private eventService: EventService) {}
  ngOnInit(): void {
    this.events = this.eventService.getEvents();
  }
}
