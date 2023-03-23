import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/service/event.service';
import { Event } from '../../entities/event';
import { MatDialog } from '@angular/material/dialog';
import { ViewLocationComponent } from '../view-location/view-location.component';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss'],
})
export class EventComponent {
  displayedColumns: string[] = [
    'select',
    'id',
    'place',
    'date',
    'minimumAge',
    'responsible',
    'openingDoors',
    'cityCode',
  ];
  dataSource = new MatTableDataSource<Event>();
  selection = new SelectionModel<Event>(true, []);

  constructor(
    private _eventService: EventService,
    public dialog: MatDialog,
    private router: Router
  ) {
    this.getAllEvents();
  }
  getAllEvents() {
    this._eventService.getAll().subscribe((resp) => {
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
  checkboxLabel(row?: Event): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${
      row.id + 1
    }`;
  }
  openLocation(event: Event) {
    const dialogRef = this.dialog.open(ViewLocationComponent, {
      width: '500px',
      enterAnimationDuration: '10',
      exitAnimationDuration: '10',
      data: {
        cityCode: event.cityCode,
        departmentCode: event.departmentCode,
      },
    });
  }
  insertar() {
    if (this.selection.selected.length > 0) {
      alert('Al insertar no debe estar seleccionado ningún item');
      return;
    }
    this.router.navigateByUrl('/eventEdit');
  }
}
