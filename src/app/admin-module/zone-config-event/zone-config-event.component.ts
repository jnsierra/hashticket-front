import { SelectionModel } from '@angular/cdk/collections';
import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ZoneConfigEvent } from 'src/app/entities/zone-config-event';
import { ZoneConfigEventService } from 'src/app/service/zone-config-event.service';
import { Event } from 'src/app/entities/event';

@Component({
  selector: 'app-zone-config-event',
  templateUrl: './zone-config-event.component.html',
  styleUrls: ['./zone-config-event.component.scss']
})
export class ZoneConfigEventComponent {
  displayedColumns: string[] = ['select', 'id', 'zoneId', 'configEventId', 'numberOfTickets'];
  dataSource = new MatTableDataSource<ZoneConfigEvent>();
  selection = new SelectionModel<ZoneConfigEvent>(true, []);
  event: Event;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private _snackBar: MatSnackBar,
    private _zoneConfigEventService: ZoneConfigEventService) {
    this.event = new Event();
    this.activatedRoute.params.subscribe(params => {
      this.event.id = params['idEvent'] as number;
      this.getZoneConfigEvents();
    });
  }

  getZoneConfigEvents() {
    this._zoneConfigEventService.getZoneConfigEventByIdEvent(this.event.id).subscribe((resp) => {
      this.dataSource.data = resp;
    });
  }
  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }
  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: ZoneConfigEvent): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.id + 1
      }`;
  }
  insert() {
    if (this.selection.selected.length > 0) {
      return;
    }
    this.router.navigateByUrl(`/zoneConfigEventInsert/${this.event.id}`);
  }
  update() {
    if (this.selection.selected.length == 1) {
      const URL_SERVICE = `/zoneConfigEventUpdate/${this.selection.selected[0].id}/${this.selection.selected[0].id}`;
      this.router.navigateByUrl(URL_SERVICE);
    } else if (this.selection.selected.length == 0) {
      this._snackBar.open('Debes seleccionar un item', 'cerrar', {
        duration: 2000,
        panelClass: ['red-snackbar'],
      });
    } else if (this.selection.selected.length > 1) {
      this._snackBar.open('Acción no permitida para más de un item', 'cerrar', {
        duration: 2000,
        panelClass: ['red-snackbar'],
      });
    }
  }
}
