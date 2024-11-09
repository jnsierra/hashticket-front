import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from '../entities/login';
import { LoginResponse } from '../entities/login-response';
import { map } from 'rxjs/operators';
import { SignupResponse } from '../entities/signup-response';
import { UrlService } from './url.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { User } from '../entities/user';
import { KeycloakTokenResponse } from '../entities/keycloak-token-response';

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
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/x-www-form-urlencoded');
    const body = new HttpParams()
      .set('client_id', 'springboot-openid-client-app')
      .set('client_secret', 'OxVBIwfyfx6NMS2GjGyqjJlMig6hfx9m')
      .set('grant_type', 'password')
      .set('username', loginEntity.email)
      .set('password', loginEntity.password)
      .set('scope', 'openid');
    return this.http.post<KeycloakTokenResponse>(URL_SERVICE, body.toString(),{headers, observe: 'response' },).pipe(
      map(resp => {
        this.saveToken(resp.body?.access_token!);
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
  signUp(loginEntity: Login) {
    return this.http.post<boolean>(`${this._urlService.getEndPointPubUser()}`, loginEntity, { observe: 'response' })
  }
  changePassword(password: string){
    const user = new User();
    user.password = password;
    const URL_SERVICE = `${this._urlService.getEndPointBussinesUser()}changePassword`;
    return this.http.patch<boolean>(URL_SERVICE, user );
  }
  getAuthoritiesUser(): string[]{
    if(this.isAuthenticated()){
      const TOKEN = this.readToken();
      var base64Url = TOKEN.split('.')[1];
      var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
          return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
      }).join(''));
      var authorities = JSON.parse(jsonPayload);
      return authorities.realm_access.roles;
    }
    return [];
  }
}