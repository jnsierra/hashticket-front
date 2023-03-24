import { Component } from '@angular/core';
import { Category } from 'src/app/entities/category';
import { CategoryService } from 'src/app/service/category.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.scss'],
})
export class CategoryEditComponent {
  category: Category;

  constructor(private _categoryService: CategoryService) {
    this.category = new Category();
  }

  ejecutarAccion(f: NgForm){
    if( f.invalid){
      alert('No funciona');
      return 
    }
    this._categoryService.insert(this.category).subscribe(resp => {
      console.log(resp);
    });
    alert('Envia el formulario');
  }

}
