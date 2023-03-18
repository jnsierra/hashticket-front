import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrincipalPageComponent } from './principal-page/principal-page.component';
import { HttpClientModule } from '@angular/common/http';
import { PublicEventComponent } from './public-event/public-event.component';
import { MatCarouselModule } from '@magloft/material-carousel';


@NgModule({
  declarations: [
    PrincipalPageComponent,
    PublicEventComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MatCarouselModule.forRoot()
  ], 
  exports:[
    PrincipalPageComponent,
    PublicEventComponent
  ]
})
export class PublicPagesModule { }
