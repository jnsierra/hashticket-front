import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/service/event.service';
import { Event } from '../../entities/event';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {

  events: Event[]
  
  constructor(private _eventService:EventService){
    this.events = [];
  }

  ngOnInit(): void {
    this.getAllEvents();
    
  }

  getAllEvents(){
    this._eventService.getAll().subscribe(resp => {
      this.events = resp;
    });
  }
}
