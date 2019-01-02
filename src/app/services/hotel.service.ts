import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { DataService } from './data.service';
import { HttpClient } from '@angular/common/http';
import { Hotel } from '../models/hotel';
import { AuthService } from './auth.service';
interface HotelServiceData {
  actualHotel: Hotel;
  hotelsList: Hotel[];
}

@Injectable({
  providedIn: 'root'
})
export class HotelService extends DataService<Hotel> {
  sessionData: HotelServiceData = {
    actualHotel: null,
    hotelsList: null
  };
  constructor(public httpClient: HttpClient, public authService: AuthService) {
    super('/hotels', httpClient, authService);
  }
  changeActualHotel(hotel: Hotel): any {
    this.sessionData.actualHotel = hotel;
  }
  setSessionData(hotels: Hotel[]): any {
    console.log(hotels);
    console.log(this.sessionData);
    this.sessionData.hotelsList = hotels;
    console.log(this.sessionData);
    this.sessionData.actualHotel = hotels[0];
    console.log(this.sessionData);
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
