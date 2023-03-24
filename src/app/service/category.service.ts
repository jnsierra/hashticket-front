import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UrlService } from './url.service';
import { Category } from '../entities/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private _urlService: UrlService, private http: HttpClient) { }
  // Falta API GET ALL
  getAll(){
    return this.http.get<Category[]>(this._urlService.getEndPointCategory());
  }

}
