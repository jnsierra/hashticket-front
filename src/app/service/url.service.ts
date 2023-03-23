import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment'

@Injectable({
  providedIn: 'root'
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

  getEndPointPubEvent(){
    return `${this.urlBasePublic}v.1/event`;
  }

  getEndPointPubImageById(){
    return `${this.urlBasePublic}v.1/event_images/event`;
  }

  getEndPointPubLogin(){
    return `${this.urlBasePublic}login/`;
  }
  getEndPointEvent(){
    return `${this.urlBaseDatos}v.1/event/`;
  }
  getEndPointCity(){
    return `${this.urlBaseDatos}v.1/city/`;
  }
  getEndPointDepartment(){
    return `${this.urlBaseDatos}v.1/department/`;
  }
}
