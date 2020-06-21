import { Component, OnInit, OnDestroy } from '@angular/core';
import { EventService } from '../shared/event.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './event-details.component.html',
  styles: [
    `
      .container {
        padding-left: 20px;
        padding-right: 20px;
      }
      .event-image {
        height: 100px;
      }
    `,
  ],
})
export class EventDetailsComponent implements OnInit {
  event: any;
  private sub: any;
  constructor(
    private eventService: EventService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // tslint:disable-next-line: radix
    const id: number = this.route.snapshot.params.id;

    this.event = this.eventService.getEventById(+id);
  }
}
