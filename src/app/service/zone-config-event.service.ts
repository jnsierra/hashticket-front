import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UrlService } from './url.service';
import { ZoneConfigEvent } from '../entities/zone-config-event';

@Injectable({
  providedIn: 'root'
})
export class ZoneConfigEventService {

  constructor(private _urlService: UrlService, private http: HttpClient) { }

  getZoneConfigEventByIdEvent(eventId: number) {
    const URL_SERVICE = `${this._urlService.getEndPointZoneConfigEvent()}event/${eventId}`;
    return this.http.get<ZoneConfigEvent[]>(URL_SERVICE);
  }
  getZoneConfigEventByEventAndPresentation(eventId: number, presentationId: number){
    const URL_SERVICE = `${this._urlService.getEndPointZoneConfigEvent()}event/${eventId}/presentation/${presentationId}`;
    return this.http.get<ZoneConfigEvent[]>(URL_SERVICE);
  }
  save(zoneConfigEvent: ZoneConfigEvent) {
    const URL_SERVICE = `${this._urlService.getEndPointZoneConfigEvent()}`;
    return this.http.post<ZoneConfigEvent>(URL_SERVICE, zoneConfigEvent);
  }
}
