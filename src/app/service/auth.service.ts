import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from '../entities/login';
import { UrlService } from './url.service';

import { map } from 'rxjs/operators';
import { LoginResponse } from '../entities/login-response';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userToken: string;

  constructor(private _urlService: UrlService, private http: HttpClient) {
    this.userToken = '';
  }

  login(loginEntity: Login) {
    const URL_SERVICE = `${this._urlService.getEndPointPubLogin()}`;
    return this.http.post<LoginResponse>(URL_SERVICE, loginEntity).pipe(
      map(resp => {
        this.saveToken(resp.token);
        return resp;
      })
    );
  }
  logout() {
    this.userToken = '';
    localStorage.removeItem('token');
  }
  private saveToken(token: string) {
    this.userToken = token;
    localStorage.setItem('token', token);
  }
  readToken(): string {
    if (localStorage.getItem('token')) {
      this.userToken = localStorage.getItem('token') as string;
    } else {
      this.userToken = '';
    }
    return this.userToken;
  }
  isAuthenticated(): boolean {
    this.readToken();
    if (this.userToken.length > 2) {
      return true;
    }
    return false;
  }
}
