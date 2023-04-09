import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Event } from 'src/app/entities/event';
import { EventImages } from 'src/app/entities/event-images';
import { EventImageService } from '../../service/event-image.service';
import { EventService } from 'src/app/service/event.service';

@Component({
  selector: 'app-more-info',
  templateUrl: './more-info.component.html',
  styleUrls: ['./more-info.component.scss']
})
export class MoreInfoComponent {
  event: Event;
  presentationId: number;
  test: string
  constructor(
    private activatedRoute: ActivatedRoute,
    private _eventImageService: EventImageService,
    private _eventService: EventService
  ) {
    this.event = new Event();
    this.activatedRoute.params.subscribe((params) => {
      this.event.id = params['idEvent'] as number;
      // this.getEvent();
    });
    
  }

  getEvent(){
    this._eventService.getEventByEventIdAndPresentationId(this.event.id.toString(), this.presentationId.toString()).subscribe((resp) => {
      console.log(resp)
    });
  }

}
