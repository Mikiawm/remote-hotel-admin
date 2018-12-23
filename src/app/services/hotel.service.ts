import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { DataService } from './data.service';
import { HttpClient } from '@angular/common/http';
import { Hotel } from '../models/hotel';
import { AuthService } from './auth.service';
@Injectable({
  providedIn: 'root'
})
export class HotelService extends DataService<Hotel> {
  constructor(public httpClient: HttpClient, public authService: AuthService) {
    super('/hotel', httpClient, authService);
   }
}
