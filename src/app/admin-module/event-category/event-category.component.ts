import { SelectionModel } from '@angular/cdk/collections';
import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { EventCategory } from 'src/app/entities/event-category';
import { CategoryEventService } from 'src/app/service/category-event.service';

@Component({
  selector: 'app-event-category',
  templateUrl: './event-category.component.html',
  styleUrls: ['./event-category.component.scss']
})
export class EventCategoryComponent {
  displayedColumns: string[] = [
    'select',
    'id',
    'name',
    'description',
  ];
  dataSource = new MatTableDataSource<EventCategory>();
  selection = new SelectionModel<EventCategory>(true, []);
  constructor(private activatedRoute: ActivatedRoute
    , private router: Router
    , private _categoryEventService:CategoryEventService){
    this.getEventCategories()
  }
  getEventCategories(){
    this._categoryEventService.getAllCategories().subscribe(data => {
      this.dataSource.data = data;
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
  checkboxLabel(row?: EventCategory): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${
      row.id + 1
    }`;
  }
  insertar() {
    if (this.selection.selected.length > 0) {
      alert('Al insertar no debe estar seleccionado ningún item');
      return;
    }
    this.router.navigateByUrl('/eventCategoryInsert');
  }
  update() {
    if (this.selection.selected.length == 1) {
      const URL_SERVICE = `/eventCategoryUpdate/${this.selection.selected[0].id}`;
      this.router.navigateByUrl(URL_SERVICE);
    } else if (this.selection.selected.length == 0) {
      alert('Debes seleccionar un item');
    } else if (this.selection.selected.length > 1) {
      alert('Acción no permitida para mas de un item');
    }
    return;
  }
}