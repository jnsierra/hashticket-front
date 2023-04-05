import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UrlService } from './url.service';
import { ZoneConfigEvent } from '../entities/zone-config-event';

@Injectable({
  providedIn: 'root'
})
export class ZoneConfigEventService {

  constructor(private _urlService: UrlService, private http: HttpClient) { }
}
