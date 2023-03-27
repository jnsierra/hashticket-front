import { Component } from '@angular/core';
import { Category } from 'src/app/entities/category';
import { CategoryService } from 'src/app/service/category.service';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.scss'],
})
export class CategoryEditComponent {
  category: Category;

  constructor(
    private _categoryService: CategoryService,
    private _snackBar: MatSnackBar,
    private router: Router
  ) {
    this.category = new Category();
  }

  executeAction(f: NgForm) {
    if (f.invalid) {
      this._snackBar.open('Formulario Invalido', 'Cerrar', {
        duration: 2000,
        panelClass: ['red-snackbar'],
      });
      return;
    }
    this._categoryService.insert(this.category).subscribe();
    this._snackBar
      .open('Categoria creada exitosamente', 'OK', {
        duration: 2000,
        panelClass: ['green-snackbar'],
      })
      .afterDismissed()
      .subscribe((resp) => {
        this.router.navigateByUrl('category');
      });
  }
}
