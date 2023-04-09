import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, Observable, throwError } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ResponseRequestInterceptorService implements HttpInterceptor {

  constructor(
    private _authService: AuthService,
    private router: Router
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(catchError((error: HttpErrorResponse) => {
      let errorMsg = '';
      if (error.status == 403) {
        this._authService.logout();
        //Pendiente cambiar alert por modal
        alert('Error de autenticación o vencimiento del token. Realice login de nuevo');
        this.router.navigateByUrl("/signin");
      }
      return throwError(errorMsg);
    }));
  }
}
