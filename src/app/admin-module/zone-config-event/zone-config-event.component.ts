import { SelectionModel } from '@angular/cdk/collections';
import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ZoneConfigEvent } from 'src/app/entities/zone-config-event';
import { ZoneConfigEventService } from 'src/app/service/zone-config-event.service';

@Component({
  selector: 'app-zone-config-event',
  templateUrl: './zone-config-event.component.html',
  styleUrls: ['./zone-config-event.component.scss']
})
export class ZoneConfigEventComponent {
  displayedColumns: string[] = ['select', 'id', 'zoneId', 'configEventId', 'numberOfTickets'];
  dataSource = new MatTableDataSource<ZoneConfigEvent>();
  selection = new SelectionModel<ZoneConfigEvent>(true, []);

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router, 
    private _snackBar: MatSnackBar,
    private _zoneConfigEventService: ZoneConfigEventService) {
    this.activatedRoute.params.subscribe(params => {
      this.getZoneConfigEvents();
    });
  }

  getZoneConfigEvents() {
  }
}
