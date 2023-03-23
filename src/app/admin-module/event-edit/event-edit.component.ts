import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Event } from 'src/app/entities/event';

@Component({
  selector: 'app-event-edit',
  templateUrl: './event-edit.component.html',
  styleUrls: ['./event-edit.component.scss']
})
export class EventEditComponent {

  event: Event;

  constructor(){
    this.event = new Event();
  }

  ejecutarAccion(f: NgForm){
    if( f.invalid){
      alert('No funciona');
      return 
    }
  }

}
