import { NgModule } from '@angular/core';
import { CardEventComponent } from './card-event/card-event.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCarouselModule } from '@magloft/material-carousel';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MoreInfoComponent } from './more-info/more-info.component';
import { PrincipalPageComponent } from './principal-page/principal-page.component';
import { TicketSelectionComponent } from './ticket-selection/ticket-selection.component';

@NgModule({
  declarations: [PrincipalPageComponent, CardEventComponent, MoreInfoComponent, TicketSelectionComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    MatCarouselModule.forRoot(),
    MatCardModule,
    MatGridListModule,
    MatButtonModule,
    MatRadioModule,
    MatInputModule
  ],
  exports: [PrincipalPageComponent],
})
export class PublicPagesModule { }
