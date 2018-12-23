import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from './data.service';
import { AccessLog } from '../models/access-log';
import { AuthService } from './auth.service';
@Injectable({
  providedIn: 'root'
})
export class AccessLogService extends DataService<AccessLog> {
  private accessLogEndPoint = '/accessLog';
  constructor(public httpClient: HttpClient, public authService: AuthService) {
    super('/accessLogs', httpClient, authService);
  }
}
