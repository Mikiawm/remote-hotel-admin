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
  actualHotel: Hotel;
  sessionData: {
    actualHotel: Hotel;
    hotels: Hotel[];
  };
  constructor(public httpClient: HttpClient, public authService: AuthService) {
    super('/hotels', httpClient, authService);
  }
  changeActualHotel(selected: string): any {
    this.sessionData.actualHotel = this.sessionData.hotels.find(x => x.hotelName === selected);
  }
  setSessionData(hotels: Hotel[]): any {
    console.log(hotels);
    this.sessionData.hotels = hotels;
    this.sessionData.actualHotel = hotels[0];
  }
  addHotelByName(hotelName: string): Observable<boolean> {
    const hotel = {
      HotelName: hotelName
    };
    console.log(hotelName);
    return this.httpClient.post<boolean>(this.urlAdress, hotel, this.httpOptions);
  }
  getHotels() {
    // console.log(this.httpClient.get<Hotel[]>(this.urlAdress, this.httpOptions));
    return this.httpClient.get<Hotel[]>(this.urlAdress, this.httpOptions);
  }
}
