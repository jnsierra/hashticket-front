import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CategoryEvent } from '../entities/category-event';
import { UrlService } from './url.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryEventService {

  constructor(private _urlService: UrlService, private http: HttpClient) { }

  getAllCategories(){
    const URL_SERVICE = `${this._urlService.getEndPointCategoryEvent()}`;
    return this.http.get<CategoryEvent[]>(URL_SERVICE);
  }
}
