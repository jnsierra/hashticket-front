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
import { FormsModule } from '@angular/forms';

import localEs from '@angular/common/locales/es-CO';
import { PublicComponent } from './components/public/public.component';
import { AdminModuleModule} from './admin-module/admin-module.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptorService } from './service/auth-interceptor.service';

registerLocaleData(localEs);

@NgModule({
  declarations: [AppComponent, PublicComponent ],
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
    HttpClientModule
  ],
  providers: [
    { provide: LOCALE_ID, 
      useValue: 'es-CO',
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}