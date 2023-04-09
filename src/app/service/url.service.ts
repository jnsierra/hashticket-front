import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UrlService {
  urlBaseBusiness: string;
  urlBaseDatos: string;
  urlBasePublic: string;

  constructor() {
    this.urlBaseBusiness = environment.urlBaseBussines;
    this.urlBaseDatos = environment.urlBaseDatos;
    this.urlBasePublic = environment.urlBasePublic;
  }

  getEndPointPubEvent() {
    return `${this.urlBasePublic}v.1/event/`;
  }
  getEndPointPubImageById() {
    return `${this.urlBasePublic}v.1/event_images/event/`;
  }
  getEndPointPubLogin() {
    return `${this.urlBasePublic}login/`;
  }
  getEndPointPubConfigEvent() {
    return `${this.urlBasePublic}v.1/config_event/`;
  }
  getEndPointPubPresentation() {
    return `${this.urlBasePublic}v.1/presentation/event/`;
  }
  getEndPointCategory() {
    return `${this.urlBaseDatos}v.1/category/`;
  }
  getEndPointCategoryEvent() {
    return `${this.urlBaseDatos}v.1/category_event/`;
  }
  getEndPointCity() {
    return `${this.urlBaseDatos}v.1/city/`;
  }
  getEndPointCountry() {
    return `${this.urlBaseDatos}v.1/country/`;
  }
  getEndPointDepartment() {
    return `${this.urlBaseDatos}v.1/department/`;
  }
  getEndPointEvent() {
    return `${this.urlBaseDatos}v.1/event/`;
  }
  getEndPointMusicBand() {
    return `${this.urlBaseDatos}v.1/musicBand/`;
  }
  getEndPointPresentation() {
    return `${this.urlBaseDatos}v.1/presentation/`;
  }
  getEndPointEventImages() {
    return `${this.urlBaseDatos}v.1/event_images/`;
  }
  getEndPointBusinessEventImages() {
    return `${this.urlBaseBusiness}v.1/event_images/`;
  }
  getEndPointZone() {
    return `${this.urlBaseDatos}v.1/zone/`;
  }
  getEndPointConfigEvent() {
    return `${this.urlBaseDatos}v.1/config_event/`;
  }
  getEndPointArtist() {
    return `${this.urlBaseDatos}v.1/artist/`;
  }
  getEndPointZoneConfigEvent() {
    return `${this.urlBaseDatos}v.1/zone_config_event/`;
  }
  getEndPointBusinessTickets() {
    return `${this.urlBaseBusiness}v.1/ticket/`;
  }
  getEndPointTickets(){
    return `${this.urlBaseDatos}v.1/ticket/`;
  }
}
