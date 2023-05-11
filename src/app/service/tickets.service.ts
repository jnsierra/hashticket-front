import { HttpClient, HttpParams, HttpStatusCode } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UrlService } from './url.service';
import { GenericResponse } from '../entities/generic-response';
import { TicketView } from '../entities/ticket-view';
import { map } from 'rxjs';
import { GenericQuery } from '../entities/generic-query';
import { Ticket } from '../entities/ticket';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AppConstants } from '../commons/app.constants';

@Injectable({
  providedIn: 'root'
})
export class TicketsService {

  constructor(private _urlService: UrlService
    , private http: HttpClient
    , private _snackBar: MatSnackBar
    , public constants: AppConstants) { }

  generateTickets(eventId: number, presentationId: number) {
    const URL_SERVICE = `${this._urlService.getEndPointBusinessTickets()}generate/event/${eventId}/presentation/${presentationId}`;
    return this.http.get<GenericResponse>(URL_SERVICE);
  }

  getByEventAndPresentation(eventId: number, presentationId: number, records: number, page: number) {
    let params = new HttpParams().set("myRecord", records).set("page", page);
    const URL_SERVICE = `${this._urlService.getEndPointTickets()}event/${eventId}/presentation/${presentationId}`;
    return this.http.get<GenericQuery<TicketView>>(URL_SERVICE, { params: params, observe: 'response' })
      .pipe(
        map(item => {
          if(item.status === HttpStatusCode.NoContent){
            this._snackBar.open('La consulta no arrojo resultados', this.constants.CLOSE, {
              duration: 2000,
              panelClass: ['green-snackbar'],
            });
            return new GenericQuery();
          }else if(item.status === HttpStatusCode.Ok){            
            if(item.body !== undefined || item.body !== null){
              var result: GenericQuery<TicketView> = new GenericQuery();
              Object.assign(result, item.body );
              result.results = result.results.sort((a, b) => (a.numberTicket > b.numberTicket) ? 1 : -1)
              return result;
            }
            return item.body;
          }
          return item.body;
        })
      );
  }

  buyTicket(ticket: Ticket) {
    return this.http.post<GenericResponse>(`${this._urlService.getEndPointBusinessTickets()}buy`, ticket);
  } 

  getTicketsByEventPresentationZoneAndCategory(eventId: number, presentationId: number, zoneId: number, categoryId: number) {
    return this.http.get<Ticket[]>(`${this._urlService.getEndPointPubTickets()}event/${eventId}/presentation/${presentationId}/zone/${zoneId}/category/${categoryId}`);
  }
}