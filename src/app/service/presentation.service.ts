import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UrlService } from 'src/app/service/url.service';
import { Presentation } from 'src/app/entities/presentation';

@Injectable({
  providedIn: 'root',
})
export class PresentationService {
  constructor(private _urlService: UrlService, private http: HttpClient) {}

  getPresentation(eventId: number) {
    const URL_SERVICE = `${this._urlService.getEndPointPubPresentation()}/${eventId}`;
    return this.http.get<Presentation[]>(URL_SERVICE);
  }
}
