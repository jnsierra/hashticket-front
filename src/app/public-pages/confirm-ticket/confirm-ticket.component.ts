import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Ticket } from 'src/app/entities/ticket';
import { TicketsService } from 'src/app/service/tickets.service';

@Component({
  selector: 'app-confirm-ticket',
  templateUrl: './confirm-ticket.component.html',
  styleUrls: ['./confirm-ticket.component.scss']
})
export class ConfirmTicketComponent {

  categoryId: number;
  eventId: number;
  presentationId: number;
  tickets: number[];
  totalValue: number;
  quantity: string;
  zone: string;
  ticket: Ticket;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any, private _ticketService: TicketsService
  ) {
    this.categoryId = data.categoryId;
    this.eventId = data.eventId;
    this.presentationId = data.presentationId;
    this.tickets = data.tickets;
    this.totalValue = data.totalValue;
    this.quantity = data.quantity;
    this.zone = data.zone;
    this.ticket = { eventId: data.eventId, zoneId: data.zone, categoryId: data.categoryId, presentationId: this.presentationId, numberOfTickets: data.quantity, numberTickets: data.tickets, numberTicket: 0 };
  }

  buyTicket() {
    this._ticketService.buyTicket(this.ticket).subscribe((resp) => {
      if(resp.message=='Tickets Comprados'){
        
      }
    })
  }
}
