import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ConfigurationService } from './configuration.service';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
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
  // constructor(private configuration: ConfigurationService, private router: Router, private http: Http) { }

  constructor() {
    console.log('auth');
  }

  // login(user): Observable<boolean> {
  //   return this.http.post(environment.apiUrl + this.accountEndpoint + '/login',
  //     { login: user.login, password: user.password }, { headers: this.headers })
  //     .pipe(map(res => {
  //       const token = res.json();
  //       if (token) {
  //         this.getSessionDataFromClaims(token);
  //         this.setToken(token);
  //         return true;
  //       }
  //       return false;
  //     })
  //     );
  // }

  // logout(): void {
  //   localStorage.removeItem(TOKEN_NAME);
  //   this.sessionData.isAuthneticated = false;
  //   window.location.reload();
  // }
  // getToken(): string {
  //   return localStorage.getItem(TOKEN_NAME);
  // }

  // setToken(token: string): void {
  //   localStorage.setItem(TOKEN_NAME, token);
  // }

  // getTokenExpirationDate(token: string): Date {
  //   const decoded = jwt_decode(token);

  //   if (decoded.exp === undefined) {
  //     return null;
  //   }

  //   const date = new Date(0);
  //   date.setUTCSeconds(decoded.exp);
  //   return date;
  // }

  // getSessionDataFromClaims(token: string): void {
  //   const decoded = jwt_decode(token);
  //   if (decoded) {
  //     this.sessionData.isAuthneticated = true;
  //   }

  //   if (decoded.timeRange !== undefined) {
  //     this.sessionData.timeRange = +decoded.timeRange;
  //   }

  //   if (decoded.Name !== undefined) {
  //     this.sessionData.userName = decoded.Name;
  //   }
  //   if (decoded.Role !== undefined) {
  //     this.sessionData.role = decoded.Role;
  //   }

  // }

  isTokenExpired(token?: string): boolean {
    // if (!token) { token = this.getToken(); }
    // if (!token) {
    //   return true;
    // }
    return this.sessionData.isAuthneticated;
  }

  //   const date = this.getTokenExpirationDate(token);
  //   if (date === undefined) {
  //     return false;
  //   }
  //   if (date.valueOf() > new Date().valueOf()) {
  //     return false;
  //   } else {
  //     this.logout();
  //     return true;
  //   }
  // }

}
