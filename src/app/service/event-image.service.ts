import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UrlService } from 'src/app/service/url.service';
import { EventImages } from 'src/app/entities/event-images';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EventImageService {
  constructor(private _urlService: UrlService, private http: HttpClient) {}

  getEventImages(eventId: number) {
    const URL_SERVICE = `${this._urlService.getEndPointPubImageById()}${eventId}?typeImages=PRINCIPAL`;
    return this.http.get<EventImages[]>(URL_SERVICE);
  }
  getEventImagesByEvent(eventId: number) {
    const URL_SERVICE = `${this._urlService.getEndPointEventImages()}/event/${eventId}`;
    return this.http.get<EventImages[]>(URL_SERVICE);
  }
  getEventImagesById(id: number) {
    const URL_SERVICE = `${this._urlService.getEndPointBusinessEventImages()}${id}`;
    return this.http.get<EventImages>(URL_SERVICE).pipe(
      map( resp => {
        resp.base64 = `data:image/jpeg;base64,${resp.base64}`;
        return resp;
      })
    );
  }
}