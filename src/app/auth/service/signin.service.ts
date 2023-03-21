import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UrlService } from 'src/app/service/url.service';
import { User } from 'src/app/entities/user';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SigninService {
  userToken: string;
  httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'POST',
      'Access-Control-Allow-Origin': '*',
    })
  };

  constructor(private _urlService: UrlService, private http: HttpClient) {this.userToken=''; this.readToken();}

  loginUser(user: User) {
    const usuarioDto = {
      email: user.email,
      password: user.password
    }
    const URL_SERVICE = `${this._urlService.getEndPointPubLogin()}`;
    return this.http.post(URL_SERVICE, usuarioDto).pipe(
      map( resp =>{
        // this.saveToken(resp['token']);
        return resp;
      })
    );
  }

  private saveToken(token: string) {
    this.userToken = token;
    localStorage.setItem('token', token);
  }

  readToken(): string {
    if (localStorage.getItem('token')) {
      // this.userToken = localStorage.getItem('token');
    } else {
      this.userToken = '';
    }
    return this.userToken;
  }

  estaAutenticado(): boolean {
    if (this.userToken.length > 2) {
      return true;
    }
    return false;
  }
}



