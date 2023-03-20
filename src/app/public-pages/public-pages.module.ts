import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrincipalPageComponent } from './principal-page/principal-page.component';
import { HttpClientModule } from '@angular/common/http';
import { MatCarouselModule } from '@magloft/material-carousel';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { CardEventComponent } from './card-event/card-event.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [PrincipalPageComponent, CardEventComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    MatCarouselModule.forRoot(),
    MatCardModule,
    MatGridListModule,
    MatButtonModule
  ],
  exports: [PrincipalPageComponent],
})
export class PublicPagesModule {}
