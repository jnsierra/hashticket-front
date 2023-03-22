import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeAdminComponent } from './home-admin/home-admin.component';
import { EventComponent } from './event/event.component';
import { RouterModule } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon'


@NgModule({
  declarations: [
    HomeAdminComponent,
    EventComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatTableModule,
    MatIconModule
  ]
})
export class AdminModuleModule { }
