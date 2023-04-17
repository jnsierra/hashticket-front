import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Event } from 'src/app/entities/event';
import { MatDialog } from '@angular/material/dialog';
import { Presentation } from 'src/app/entities/presentation';
import { ZoneConfigEvent } from 'src/app/entities/zone-config-event';
import { ZoneConfigEventService } from 'src/app/service/zone-config-event.service';
import { ConfirmTicketComponent } from '../confirm-ticket/confirm-ticket.component';

@Component({
  selector: 'app-ticket-selection',
  templateUrl: './ticket-selection.component.html',
  styleUrls: ['./ticket-selection.component.scss']
})
export class TicketSelectionComponent {
  event: Event;
  presentation: Presentation;
  zoneConfigEvent: ZoneConfigEvent[];
  constructor(
    private activatedRoute: ActivatedRoute,
    private _zoneConfigEventService: ZoneConfigEventService,
    public dialog: MatDialog,
  ) {
    this.event = new Event();
    this.presentation = new Presentation();
    this.zoneConfigEvent = [];
    this.activatedRoute.params.subscribe((params) => {
      this.event.id = params['idEvent'] as number;
      this.presentation.id = params['idPresentation'] as number;
      this.getZoneConfigEvents();
    });
  }

  getZoneConfigEvents() {
    this._zoneConfigEventService.getZoneConfigEventByEventIdAndPresentationId(this.event.id, this.presentation.id).subscribe((resp) => {
      this.zoneConfigEvent = resp;
    });
  }
  openConfirmation(zone:string, numberOfTickets:string, cost: string) {
      const dialogRef = this.dialog.open(ConfirmTicketComponent, {
        width: '400px',
        height: '230px',
        enterAnimationDuration: '10',
        exitAnimationDuration: '10',
        data: {
          zone: zone,
          quantity: numberOfTickets,
          totalValue: Number(numberOfTickets)*Number(cost)
        },
      });
    }
  }

