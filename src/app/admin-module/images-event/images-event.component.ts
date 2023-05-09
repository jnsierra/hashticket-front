import { AppConstants } from 'src/app/commons/app.constants';
import { SelectionModel } from '@angular/cdk/collections';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { EventImageService } from 'src/app/service/event-image.service';
import { EventImages } from '../../entities/event-images'
import { ViewImageComponent } from '../view-image/view-image.component';
import { MenuService } from 'src/app/service/menu.service';

@Component({
  selector: 'app-images-event',
  templateUrl: './images-event.component.html',
  styleUrls: ['./images-event.component.scss']
})
export class ImagesEventComponent {
  idEvent: number;
  displayedColumns: string[] = [
    this.constants.COLUMN_MUSIC_BAND_NAME, 
    this.constants.COLUMN_DESCRIPTION, 
    'typeImg', 
    'img'
  ];
  dataSource = new MatTableDataSource<EventImages>();
  selection = new SelectionModel<EventImages>(true, []);
  constructor(private activatedRoute: ActivatedRoute
    , private _snackBar: MatSnackBar
    , public constants: AppConstants
    , private router: Router
    , public dialog: MatDialog
    , private _eventImageService: EventImageService
    , private _menuService: MenuService
  ) {
    this.idEvent = 0;
    this.activatedRoute.params.subscribe(params => {
      this.idEvent = params['id'] as number;
      this.getAllEventImages();
    });
  }
  getAllEventImages() {
    this._eventImageService.getEventImagesByEvent(this.idEvent).subscribe(data => {
      this.dataSource.data = data;
    });
  }
  insert() {
    if (this.selection.selected.length > 0) {
      this._snackBar.open(this.constants.ALERT_NO_ITEM, this.constants.CLOSE);
      return;
    }
    this.router.navigateByUrl(`/imageEventInsert/${this.idEvent}`);
  }
  update() {
    if (this.selection.selected.length == 1) {
      const URL_SERVICE = `/eventImagesUpdate/${this.selection.selected[0].eventId}/${this.selection.selected[0].id}`;
      this.router.navigateByUrl(URL_SERVICE);
    } else if (this.selection.selected.length == 0) {
      this._snackBar.open(this.constants.ALERT_SELECT_ITEM, this.constants.CLOSE, {
        duration: 2000,
        panelClass: ['red-snackbar'],
      });
    } else if (this.selection.selected.length > 1) {
      this._snackBar.open(this.constants.ALERT_ONLY_ONE_ITEM, this.constants.CLOSE, {
        duration: 2000,
        panelClass: ['red-snackbar'],
      });
    }
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
  checkboxLabel(row?: EventImages): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.id + 1
      }`;
  }
  showImages(id: number) {
    const dialogRef = this.dialog.open(ViewImageComponent, {
      width: '400px',
      height: '400px',
      enterAnimationDuration: '10',
      exitAnimationDuration: '10',
      data: {
        idEventImage: id
      },
    });
  }
  getMenu(){
    return this._menuService.itemsMenu;
  }
  validatePermissions():boolean{
    return this._menuService.seeMenu([this.constants.ROLE_ADMIN, this.constants.ROLE_MANAGER]);
  }
}
