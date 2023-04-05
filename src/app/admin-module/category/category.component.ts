import { Category } from 'src/app/entities/category';
import { CategoryService } from 'src/app/service/category.service';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent {
  displayedColumns: string[] = ['select', 'id', 'name', 'description'];
  dataSource = new MatTableDataSource<Category>();
  selection = new SelectionModel<Category>(true, []);

  constructor(
    private _categoryService: CategoryService,
    public dialog: MatDialog,
    private router: Router,
    private _snackBar: MatSnackBar
  ) {
    this.getAllCategories();
  }
  getAllCategories() {
    this._categoryService.getAll().subscribe((resp) => {
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
  checkboxLabel(row?: Category): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.id + 1
      }`;
  }

  insert() {
    if (this.selection.selected.length > 0) {
      this._snackBar.open(
        'Al insertar no debe estar seleccionado ningún item',
        'Cerrar',
        {
          duration: 2000,
          panelClass: ['red-snackbar'],
        }
      );
      return;
    }
    this.router.navigateByUrl('/categoryEdit');
  }

  update() {
    if (this.selection.selected.length == 1) {
      const URL_SERVICE = `/categoryEdit/${this.selection.selected[0].id}`;
      this.router.navigateByUrl(URL_SERVICE);
    } else if (this.selection.selected.length == 0) {
      this._snackBar.open('Debes seleccionar un item', 'Cerrar', {
        duration: 2000,
        panelClass: ['red-snackbar'],
      });
    } else if (this.selection.selected.length > 1) {
      this._snackBar.open('Acción no permitida para mas de un item', 'Cerrar', {
        duration: 2000,
        panelClass: ['red-snackbar'],
      });
    }
    return;
  }

  sendZone() {
    var msn = '';
    if (this.selection.selected.length == 1) {
      const URL_SERVICE = `/zone/${this.selection.selected[0].id}`;
      this.router.navigateByUrl(URL_SERVICE);
    } else if (this.selection.selected.length == 0) {
      msn = 'Debes seleccionar un item';
    } else if (this.selection.selected.length > 1) {
      msn = 'Acción no permitida para mas de un item';
    }
    this._snackBar.open(msn, 'Cerrar', {
      horizontalPosition: 'center',
      verticalPosition: 'top',
      duration: 2000,
      panelClass: ['red-snackbar'],
    });
    return;
  }
}
