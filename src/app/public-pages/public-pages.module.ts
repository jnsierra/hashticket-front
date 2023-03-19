import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrincipalPageComponent } from './principal-page/principal-page.component';
import { HttpClientModule } from '@angular/common/http';
import { MatCarouselModule } from '@magloft/material-carousel';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';

@NgModule({
  declarations: [PrincipalPageComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    MatCarouselModule.forRoot(),
    MatCardModule,
    MatGridListModule,
  ],
  exports: [PrincipalPageComponent],
})
export class PublicPagesModule {}
