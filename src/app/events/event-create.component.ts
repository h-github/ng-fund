import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { EventService, IEvent } from './shared';

@Component({
  templateUrl: './event-create.component.html',
  styleUrls: ['./event-create.component.css'],
})
export class EventCreateComponent implements OnInit {
  isDirty = true;
  newEventForm: FormGroup;
  event: IEvent;

  constructor(private router: Router, private eventService: EventService) {}
  ngOnInit(): void {
    this.event = {
      id: null,
      name: null,
      date: new Date(),
      time: null,
      price: null,
      location: {
        address: null,
        city: null,
        country: null,
      },
      imageUrl:
        'https://malcoded.com/static/9afaae58734bfa33cfc2ff6bc2f3ef2f/ba299/angular-data-binding.png',
      sessions: [],
    };
  }
  cancel = () => {
    this.router.navigate(['/events']);
  };

  saveEvent(formValues) {
    this.eventService.saveEvent(formValues);
    this.isDirty = false;
    this.router.navigate(['/events']);
  }
}
