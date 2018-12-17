import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ConfigurationService } from './configuration.service';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { tap, map, shareReplay } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user';
import * as moment from 'moment';
// import { jwt_decode } from 'jwt-decode';

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
  constructor(private http: HttpClient) {
    this.urlAddress = environment.apiUrl + this.accountEndpoint;
    console.log('auth');
  }
  login(login: string, password: string) {
    const user = {
      Login: login,
      Password: password
    };
    return this.http.post<any>(this.urlAddress + '/login', user)
      .pipe(map(res => {
        console.log(res);
        // login successful if there's a jwt token in the response
        if (res) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify(res));
        }
        return res;
      }));
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
  }
  isLoggedIn() {
    if (localStorage.getItem('currentUser')) {
      // logged in so return true
      return true;
    }
    return false;
  }
}
