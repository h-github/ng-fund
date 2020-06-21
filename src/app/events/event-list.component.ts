import { Component, OnInit, OnDestroy } from '@angular/core';
import { EventService } from './shared/event.service';
import { ToastrService } from '../common/toastr.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'event-list',
  templateUrl: './event-list.component.html',
})
export class EventsListComponent implements OnInit, OnDestroy {
  events: any[];
  unsubscribe: Subscription;
  constructor(
    private eventService: EventService,
    private toastrService: ToastrService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // tslint:disable-next-line: no-string-literal
    this.events = this.route.snapshot.data['events'];
  }

  ngOnDestroy(): void {
    this.unsubscribe?.unsubscribe();
  }

  handleThumbnailClick = (eventName: string) => {
    console.log(eventName);
    this.toastrService.success(eventName);
  };
}
