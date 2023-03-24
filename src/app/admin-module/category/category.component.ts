import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/entities/category';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { CategoryService } from 'src/app/service/category.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent {
  displayedColumns: string[] = ['id', 'name', 'description'];
  dataSource = new MatTableDataSource<Category>();
  selection = new SelectionModel<Category>(true, []);

  constructor(
    private _categoryService: CategoryService,
    public dialog: MatDialog,
    private router: Router
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
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${
      row.id + 1
    }`;
  }
  // openLocation(category: Category) {
  //   const dialogRef = this.dialog.open(ViewLocationComponent, {
  //     width: '500px',
  //     enterAnimationDuration: '10',
  //     exitAnimationDuration: '10',
  //     data: {
  //       name: category.name,
  //       description: category.description,
  //     },
  //   });
  // }
}
