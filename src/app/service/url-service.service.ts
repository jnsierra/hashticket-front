import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment'

@Injectable({
  providedIn: 'root'
})
export class UrlServiceService {

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
}
