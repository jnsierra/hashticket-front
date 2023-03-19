import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { PublicPagesModule } from './public-pages/public-pages.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { registerLocaleData } from '@angular/common';
import localEs from '@angular/common/locales/es-CO'

registerLocaleData(localEs);

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PublicPagesModule,
    BrowserAnimationsModule,
    MatToolbarModule,
  ],
  providers: [{provide: LOCALE_ID, useValue: 'es-CO'}],
  bootstrap: [AppComponent],
})
export class AppModule {}
