import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { tap, map, shareReplay } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user';
import * as moment from 'moment';
import * as jwt_decode from 'jwt-decode';

export const TOKEN_NAME = 'jwt_token';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly accountEndpoint = '/account';
  sessionData: any = {
    isAuthneticated: false,
    timeRange: 100,
    userName: null,
    role: null
  };
  urlAddress: string;
  // constructor(private configuration: ConfigurationService, private router: Router, private http: Http) { }
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'my-auth-token'
    })
  };
  constructor(private http: HttpClient, private router: Router) {
    this.urlAddress = environment.apiUrl + this.accountEndpoint;

  }
  login(login: string, password: string) {
    const user = {
      Login: login,
      Password: password
    };
    return this.http.post<any>(this.urlAddress + '/login', user)
      .pipe(map(res => {
        console.log(jwt_decode(res));
        // login successful if there's a jwt token in the response
        if (res) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', res);
        }
        return res;
      }));
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.router.navigate(['/login']);
  }
  isLoggedIn() {
    if (this.isTokenValid()) {
      // logged in so return true
      return true;
    }
    return false;
  }
  getToken(): string {
    return localStorage.getItem('currentUser');
  }
  isTokenValid(token?: string) {
    if (!token) { token = this.getToken(); }
    if (!token) {
      return false;
    }

    const date = this.getTokenExpirationDate(token);
    if (date === undefined) { return false; }
    return (date.valueOf() > new Date().valueOf());
  }
  getTokenExpirationDate(token: string): Date {
    const decoded = jwt_decode(token) as Token;

    if (decoded.exp === undefined) { return null; }

    const date = new Date(0);
    date.setUTCSeconds(decoded.exp);
    return date;
  }
}

export class Token {
  aud: string;
  exp: number;
  iss: string;
}
