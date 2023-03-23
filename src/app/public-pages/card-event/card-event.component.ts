import { Component, Input, OnInit } from '@angular/core';
import { Event } from 'src/app/entities/event';
import { EventImages } from 'src/app/entities/event-images';
import { EventImageService } from '../../service/event-image.service';

@Component({
  selector: 'app-card-event',
  templateUrl: './card-event.component.html',
  styleUrls: ['./card-event.component.scss']
})
export class CardEventComponent implements OnInit {

  @Input()
  event: Event;
  eventImages: EventImages[];

  constructor(private _events: EventImageService ) {
    this.event=new Event();
    this.eventImages=[];
  }

  ngOnInit(): void {
    this._events.getEventImages(this.event.id).subscribe((resp) => {
      resp[0].base64 = `data:image/jpeg;base64,${resp[0].base64}`;
      this.eventImages = resp;
    });
  }  
}
