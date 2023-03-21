import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UrlService } from 'src/app/service/url.service';
import { Event } from 'src/app/entities/event';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  constructor(private _urlService: UrlService, private http: HttpClient) {}

  getActiveEvents() {
    const URL_SERVICE = `${this._urlService.getEndPointPubEvent()}/active`;
    return this.http.get<Event[]>(URL_SERVICE);
  }
}
