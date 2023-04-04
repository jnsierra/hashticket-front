import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { MusicBand } from 'src/app/entities/music-band';
import { MusicBandService } from 'src/app/service/music-band.service';
import { Router } from '@angular/router';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'app-music-band',
  templateUrl: './music-band.component.html',
  styleUrls: ['./music-band.component.scss'],
})
export class MusicBandComponent {
  displayedColumns: string[] = ['select', 'id', 'name', 'presentationId'];
  dataSource = new MatTableDataSource<MusicBand>();
  selection = new SelectionModel<MusicBand>(true, []);

  constructor(
    private _musicBandService: MusicBandService,
    public dialog: MatDialog,
    private router: Router
  ) {
    this.getAllMusicBands();
  }
  getAllMusicBands() {
    this._musicBandService.getAll().subscribe((resp) => {
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
  checkboxLabel(row?: MusicBand): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${
      row.id + 1
    }`;
  }

  insert() {
    if (this.selection.selected.length > 0) {
      alert('Al insertar no debe estar seleccionado ningún item');
      return;
    }
    this.router.navigateByUrl('/musicBandEdit');
  }
}
