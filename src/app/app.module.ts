import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgModule, LOCALE_ID } from '@angular/core';
import { PublicPagesModule } from './public-pages/public-pages.module';
import { registerLocaleData } from '@angular/common';
import { AuthModule } from './auth/auth.module';

import localEs from '@angular/common/locales/es-CO';

registerLocaleData(localEs);

@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatToolbarModule,
    PublicPagesModule,
    AuthModule,
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'es-CO' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
