import { Component } from '@angular/core';

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
export class NavBarComponent {}
