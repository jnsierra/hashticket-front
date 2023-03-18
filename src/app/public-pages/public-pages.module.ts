import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrincipalPageComponent } from './principal-page/principal-page.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    PrincipalPageComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
  ], 
  exports:[
    PrincipalPageComponent
  ]
})
export class PublicPagesModule { }
