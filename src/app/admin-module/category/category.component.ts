import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/entities/category';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent {
  displayedColumns: string[] = [
    'id',
    'name',
    'description'
  ];
  dataSource = new MatTableDataSource<Category>();
  selection = new SelectionModel<Category>(true, []);
}
