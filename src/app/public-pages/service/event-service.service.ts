import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UrlServiceService } from 'src/app/service/url-service.service';
import { Event } from 'src/app/entities/event';

@Injectable({
  providedIn: 'root'
})
export class EventServiceService {

  constructor(private _urlService: UrlServiceService,private http: HttpClient) { }

  getActiveEvents(){
    const URL_SERVICE = `${this._urlService.getEndPointPubEvent()}/active`;
    return this.http.get<Event>(URL_SERVICE);
  }
}