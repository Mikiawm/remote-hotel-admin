import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Room } from '../models/room';
import { DataService } from './data.service';
import { HttpClient, HttpParams } from '@angular/common/http';
import * as moment from 'moment';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class RoomService extends DataService<Room> {

  constructor(public httpClient: HttpClient, public authService: AuthService) {
    super('/rooms', httpClient, authService);
  }

  getFreeRooms(dateFrom: Date, dateTo: Date): Observable<Room[]>{
    let params = new HttpParams();
    params = params.append('dateFrom', dateFrom.toISOString());
    params = params.append('dateTo',  dateTo.toISOString());
    const httpOptions2 = {
      headers: this.httpOptions.headers,
      params: params
    };
    return this.httpClient.get<Room[]>(this.urlAdress, httpOptions2);
  }
}
