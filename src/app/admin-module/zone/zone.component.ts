import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { Zone } from 'src/app/entities/zone';
import { ZoneService } from 'src/app/service/zone.service';

@Component({
  selector: 'app-zone',
  templateUrl: './zone.component.html',
  styleUrls: ['./zone.component.scss']
})
export class ZoneComponent {
  displayedColumns: string[] = ['select', 'id', 'name'];
  dataSource = new MatTableDataSource<Zone>();
  selection = new SelectionModel<Zone>(true, []);
  categoryId: number;

  constructor(private _zoneService: ZoneService, public dialog: MatDialog, private router: Router, private activatedRoute: ActivatedRoute) {
    this.categoryId = 0;
    this.activatedRoute.params.subscribe(params => {
      this.categoryId = params['id'] as number;
    });
  }
  getAllZones() {
    this._zoneService.getAll().subscribe((resp) => {
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
  checkboxLabel(row?: Zone): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.id + 1
      }`;
  }

  insert() {
    if (this.selection.selected.length > 0) {
      alert('Al insertar no debe estar seleccionado ningún item');
      return;
    }
    this.router.navigateByUrl(`/zoneInsert/${this.categoryId}`);
  }
  update() {
    if (this.selection.selected.length == 1) {
      const URL_SERVICE = `/zoneUpdate/${this.selection.selected[0].categoryId}/${this.selection.selected[0].id}`;
      this.router.navigateByUrl(URL_SERVICE);
    } else if (this.selection.selected.length == 0) {
      alert('Debes seleccionar un item');
    } else if (this.selection.selected.length > 1) {
      alert('Acción no permitida para mas de un item');
    }
  }
}
