import { Component, Input, OnInit } from '@angular/core';
import { Event } from 'src/app/entities/event';
import { EventImages } from 'src/app/entities/event-images';
import { EventImageService } from '../../service/event-image.service';
import { ConfigEvent } from 'src/app/entities/config-event';
import { ConfigEventService } from 'src/app/service/config-event.service';

@Component({
  selector: 'app-card-event',
  templateUrl: './card-event.component.html',
  styleUrls: ['./card-event.component.scss'],
})
export class CardEventComponent implements OnInit {
  @Input()
  event: Event;
  eventImages: EventImages[];
  configEvent: ConfigEvent;

  constructor(
    private _events: EventImageService,
    private _configEvent: ConfigEventService
  ) {
    this.event = new Event();
    this.eventImages = [];
    this.configEvent = new ConfigEvent();
  }

  ngOnInit(): void {
    this._events.getEventImages(this.event.id).subscribe((resp) => {
      resp[0].base64 = `data:image/jpeg;base64,${resp[0].base64}`;
      this.eventImages = resp;
    });

    this._configEvent.getConfigEvent(this.event.id).subscribe((resp) => {
      this.configEvent = resp;
    });
  }
}
