import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UrlService } from './url.service';
import { Event } from '../entities/event';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private _urlService: UrlService, private http: HttpClient) { }

  insert(event:Event){
    return this.http.post<Event>(this._urlService.getEndPointEvent(), event);
  }
  getAll(){
    return this.http.get<Event[]>(this._urlService.getEndPointEvent());
  }
  getById(id:string){
    const URL_SERVICE = `${this._urlService.getEndPointEvent() + id}`;
    return this.http.get<Event>(URL_SERVICE);
  }
}