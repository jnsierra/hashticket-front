import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UrlService } from './url.service';
import { ConfigEvent } from '../entities/config-event';

@Injectable({
  providedIn: 'root'
})
export class ConfigEventService {

  constructor(private _urlService: UrlService, private http: HttpClient) { }

  getConfigEvent(eventId: number, presentationId: number) {
    const URL_SERVICE = `${this._urlService.getEndPointPubConfigEvent()}/${eventId}/presentation/${presentationId}`;
    return this.http.get<ConfigEvent>(URL_SERVICE);
  }
}
