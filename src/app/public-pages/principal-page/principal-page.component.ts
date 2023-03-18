import { Component, OnInit } from '@angular/core';
import { UrlServiceService} from '../../service/url-service.service';
import { EventServiceService } from '../service/event-service.service';

@Component({
  selector: 'app-principal-page',
  templateUrl: './principal-page.component.html',
  styleUrls: ['./principal-page.component.css']
})
export class PrincipalPageComponent implements OnInit {

  
  constructor(private _eventService: EventServiceService){

  }
  ngOnInit(): void {
    this._eventService.getActiveEvents().subscribe(resp => {
      console.log(resp);
    })
  }

}
