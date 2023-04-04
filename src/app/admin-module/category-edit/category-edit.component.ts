import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/entities/category';
import { CategoryService } from 'src/app/service/category.service';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.scss'],
})
export class CategoryEditComponent {
  category: Category;
  id: string;
  insert: boolean;
  butonEnabled: boolean;

  constructor(
    private _categoryService: CategoryService,
    private _snackBar: MatSnackBar,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) {
    this.category = new Category();
    this.id = '';
    this.insert = true;
    this.butonEnabled = false;
    this.activatedRoute.params.subscribe((params) => {
      this.id = params['id'] as string;
      if (this.id === undefined) {
        this.insert = true;
      } else {
        this.insert = false;
        this._categoryService.getById(this.id).subscribe((resp) => {
          this.category = resp;
        });
      }
    });
  }

  executeAction(f: NgForm) {
    if (f.invalid) {
      this._snackBar.open('Formulario Invalido', 'Cerrar', {
        duration: 2000,
        panelClass: ['red-snackbar'],
      });
      return;
    }
    this._categoryService.insert(this.category).subscribe((resp) => {
      if (resp.id === undefined || resp.id === null) {
        this._snackBar.open('Error al crear evento', 'Cerrar', {
          duration: 2000,
          panelClass: ['red-snackbar'],
        });
      } else {
        this.butonEnabled = true;
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
    });
  }
}
