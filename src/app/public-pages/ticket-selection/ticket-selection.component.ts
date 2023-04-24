import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/entities/category';
import { CategoryService } from 'src/app/service/category.service';
import { ConfirmTicketComponent } from '../confirm-ticket/confirm-ticket.component';
import { Event } from 'src/app/entities/event';
import { MatDialog } from '@angular/material/dialog';
import { Presentation } from 'src/app/entities/presentation';
import { Ticket } from 'src/app/entities/ticket';
import { TicketsService } from 'src/app/service/tickets.service';
import { Zone } from 'src/app/entities/zone';
import { ZoneService } from 'src/app/service/zone.service';
import { ZoneConfigEvent } from 'src/app/entities/zone-config-event';
import { ZoneConfigEventService } from 'src/app/service/zone-config-event.service';


@Component({
  selector: 'app-ticket-selection',
  templateUrl: './ticket-selection.component.html',
  styleUrls: ['./ticket-selection.component.scss']
})
export class TicketSelectionComponent {
  category: Category[];
  event: Event;
  categoryId: number;
  presentation: Presentation;
  ticket: Ticket[];
  zone: Zone[];
  zoneConfigEvent: ZoneConfigEvent[];
  constructor(
    private activatedRoute: ActivatedRoute,
    private _categoryService: CategoryService,
    private _ticketService: TicketsService,
    private _zoneService: ZoneService,
    private _zoneConfigEventService: ZoneConfigEventService,
    public dialog: MatDialog,
  ) {
    this.event = new Event();
    this.presentation = new Presentation();
    this.ticket = [];
    this.zoneConfigEvent = [];
    this.category = [];
    this.categoryId = 0;
    this.activatedRoute.params.subscribe((params) => {
      this.event.id = params['idEvent'] as number;
      this.presentation.id = params['idPresentation'] as number;
      this.getZoneConfigEvents();
      this.getCategories();
    });
  }

  getZoneConfigEvents() {
    this._zoneConfigEventService.getZoneConfigEventByEventIdAndPresentationId(this.event.id, this.presentation.id).subscribe((resp) => {
      this.zoneConfigEvent = resp;
    });
  }

  getCategories() {
    this._categoryService.getByEventIdAndPresentationId(this.event.id, this.presentation.id).subscribe((resp) => {
      this.category = resp;
    });
  }

  getZonesbyCategory(categoryId: number) {
    this._zoneService.getByCategory(categoryId).subscribe((resp) => {
      this.zone = resp;
    })
  }

  getTickets(eventId: number, presentationId: number, zoneId: number, categoryId: number) {
    this._ticketService.getTicketsByEventPresentationZoneAndCategory(eventId, presentationId, zoneId, categoryId).subscribe((resp) => {
      this.ticket = resp;
    })
  }

  openConfirmation(zone: string, numberOfTickets: string, cost: string) {
    const dialogRef = this.dialog.open(ConfirmTicketComponent, {
      width: '400px',
      height: '230px',
      enterAnimationDuration: '10',
      exitAnimationDuration: '10',
      data: {
        zone: zone,
        quantity: numberOfTickets,
        totalValue: Number(numberOfTickets) * Number(cost)
      },
    });
  }
}

