import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Event } from 'src/app/entities/event';
import { Presentation } from 'src/app/entities/presentation';
import { Router } from '@angular/router';
import { ZoneConfigEvent } from 'src/app/entities/zone-config-event';
import { ZoneConfigEventService } from 'src/app/service/zone-config-event.service';

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
    private router: Router,
    private _zoneConfigEventService: ZoneConfigEventService
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

  getZoneConfigEvents(){
    this._zoneConfigEventService.getZoneConfigEventByEventIdAndPresentationId(this.event.id, this.presentation.id).subscribe((resp) => {
      this.zoneConfigEvent = resp;
    });
  }
}
