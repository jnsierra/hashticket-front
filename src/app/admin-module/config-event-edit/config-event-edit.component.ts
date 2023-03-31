import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ConfigEvent } from 'src/app/entities/config-event';
import { Event } from 'src/app/entities/event';
import { Presentation } from 'src/app/entities/presentation';
import { PresentationService } from 'src/app/service/presentation.service';

@Component({
  selector: 'app-config-event-edit',
  templateUrl: './config-event-edit.component.html',
  styleUrls: ['./config-event-edit.component.scss']
})
export class ConfigEventEditComponent {
  configEvent:ConfigEvent;
  event:Event;
  createAction:boolean;
  presentations:Presentation[];
  constructor(private activatedRoute: ActivatedRoute
    , private _presentationService:PresentationService){
    this.configEvent = new ConfigEvent();
    this.event = new Event();
    this.createAction = true;
    this.presentations = [];
    this.activatedRoute.params.subscribe(params => {
      this.event.id = params['idEvent'] as number;
      this.getPresentations();
    });
  }
  getPresentations(){
    this._presentationService.getByIdEvent(this.event.id).subscribe(resp => {
      this.presentations = resp;
    });
  }
  executeAction(f:NgForm){
    
  }
}