import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { DataService } from './data.service';
import { HttpClient } from '@angular/common/http';
import { Hotel } from '../models/hotel';
@Injectable({
  providedIn: 'root'
})
export class HotelService extends DataService<Hotel> {
  constructor(public httpClient: HttpClient) {
    super('/hotel', httpClient);
   }
}
