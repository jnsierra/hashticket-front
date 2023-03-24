import { AdminModuleModule } from './admin-module/admin-module.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthInterceptorService } from './service/auth-interceptor.service';
import { AuthModule } from './auth/auth.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { NgModule, LOCALE_ID } from '@angular/core';
import { PublicComponent } from './components/public/public.component';
import { PublicPagesModule } from './public-pages/public-pages.module';
import { registerLocaleData } from '@angular/common';
import { RouterModule } from '@angular/router';
import localEs from '@angular/common/locales/es-CO';
import 'hammerjs';

registerLocaleData(localEs);

@NgModule({
  declarations: [AppComponent, PublicComponent],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatToolbarModule,
    PublicPagesModule,
    AdminModuleModule,
    AuthModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    MatNativeDateModule,
    MatSidenavModule,
    MatInputModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es-CO' },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
