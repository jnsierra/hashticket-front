import { Component, OnInit } from '@angular/core';
import { EventService } from '../../service/public-event.service';
import { Event } from 'src/app/entities/event';
import { EventImageService } from 'src/app/service/event-image.service';
import { EventImages } from 'src/app/entities/event-images';

@Component({
  selector: 'app-principal-page',
  templateUrl: './principal-page.component.html',
  styleUrls: ['./principal-page.component.scss'],
})
export class PrincipalPageComponent implements OnInit {
  eventos: Event[];
  eventImages: EventImages[];

  constructor(private _events: EventService
    , private _eventImagesService:EventImageService
    ) {
    this.eventos = [];
    this.eventImages = [];
    this.getEvents();
  }
  getEvents(){
    this._events.getActiveEvents().subscribe((resp) => {
      this.eventos = resp;
      this.getImages();
    });
  }
  getImages(){
    this.eventos.forEach(item => {
      this._eventImagesService.getEventImagesByEventAndType(item.id,"PRINCIPAL").subscribe((resp) => {
        this.eventImages = this.eventImages.concat(resp);
      });
    });
  }
  ngOnInit(): void {
    
    
  }
}
