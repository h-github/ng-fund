import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IEvent } from './shared';

@Component({
  selector: 'event-thumbnail',
  templateUrl: './event-thumbnail.component.html',
  styleUrls: ['./event-thumbnail.component.css'],
})
export class EventThumbnailComponent {
  @Input() event: IEvent;

  getStartTimeClass = () => {
    // return string
    // if (this.event && this.event.time === '8:00 am') {
    //   return 'green bold';
    // }
    // return '';

    // return array of string
    // if (this.event && this.event.time === '8:00 am') {
    //   return ['green', 'bold'];
    // }
    // return [];

    // return object
    const isEarlyStart = this.event && this.event.time === '8:00 am';
    return { green: isEarlyStart, bold: isEarlyStart };
  };

  getStartTimeStyles = (): any => {
    if (this.event && this.event.time === '8:00 am') {
      return { color: '#08b808', 'font-weight': 700 };
    }
    return '';
  };
}
