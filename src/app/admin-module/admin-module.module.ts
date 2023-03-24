import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HomeAdminComponent } from './home-admin/home-admin.component';
import { EventComponent } from './event/event.component';
import { RouterModule } from '@angular/router';
import { ViewLocationComponent } from './view-location/view-location.component';
import { EventEditComponent } from './event-edit/event-edit.component';
import { MatButtonModule } from '@angular/material/button';
import { CategoryComponent } from './category/category.component';
import { CategoryEditComponent } from './category-edit/category-edit.component';
import { MusicBandComponent } from './music-band/music-band.component';
import { MusicBandEditComponent } from './music-band-edit/music-band-edit.component';
import { PresentationComponent } from './presentation/presentation.component';
import { PresentationEditComponent } from './presentation-edit/presentation-edit.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { MatSidenavModule } from '@angular/material/sidenav';

@NgModule({
  declarations: [
    HomeAdminComponent,
    EventComponent,
    ViewLocationComponent,
    EventEditComponent,
    CategoryComponent,
    CategoryEditComponent,
    MusicBandComponent,
    MusicBandEditComponent,
    PresentationComponent,
    PresentationEditComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatTableModule,
    MatIconModule,
    MatDialogModule,
    MatCheckboxModule,
    MatInputModule,
    MatDatepickerModule,
    FormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCardModule,
    MatSelectModule,
    MatGridListModule,
    MatSnackBarModule,
    NgApexchartsModule,
    MatSidenavModule
  ],
})
export class AdminModuleModule {}
