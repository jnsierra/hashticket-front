import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Presentation } from '../entities/presentation';
import { UrlService } from './url.service';

@Injectable({
  providedIn: 'root',
})
export class PresentationService {
  constructor(private _urlService: UrlService, private http: HttpClient) {}

  getAll() {
    return this.http.get<Presentation[]>(
      this._urlService.getEndPointPresentation()
    );
  }

  insert(presentation: Presentation) {
    return this.http.post<Presentation>(
      this._urlService.getEndPointPresentation(),
      presentation
    );
  }
}
