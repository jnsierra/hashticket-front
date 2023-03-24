import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UrlService } from 'src/app/service/url.service';
import { EventImages } from 'src/app/entities/event-images';

@Injectable({
  providedIn: 'root',
})
export class EventImageService {
  constructor(private _urlService: UrlService, private http: HttpClient) {}

  getEventImages(eventId: number) {
    const URL_SERVICE = `${this._urlService.getEndPointPubImageById()}${eventId}?typeImages=PRINCIPAL`;
    return this.http.get<EventImages[]>(URL_SERVICE);
  }
}
