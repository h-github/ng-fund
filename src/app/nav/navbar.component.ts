import { Component, OnInit } from '@angular/core';
import { EventService } from '../events/shared/event.service';
import { AuthService } from '../user/auth.service';

@Component({
  selector: 'event-nav-bar',
  templateUrl: './navbar.component.html',
  styles: [
    `
      #navbarNavDropdown {
        justify-content: space-between;
      }

      .navbar-right a.active,
      .dropdown-item.active,
      .navbar-dark a.nav-link.active {
        color: #f97924;
      }
    `,
  ],
})
export class NavBarComponent implements OnInit {
  events: any[];

  constructor(
    private eventService: EventService,
    public authService: AuthService
  ) {}
  ngOnInit(): void {
    this.eventService
      .getEvents()
      .subscribe((events: any[]) => (this.events = events));
  }
}
