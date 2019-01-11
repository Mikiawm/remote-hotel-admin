import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { DataService } from './data.service';
import { HttpClient } from '@angular/common/http';
import { Hotel } from '../models/hotel';
import { AuthService } from './auth.service';
import { Floor } from '../models/floor';
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
  changeActualHotel(hotel: string): any {
    this.sessionData.actualHotel = this.sessionData.hotelsList.find(x => x.HotelName === hotel);
  }
  setSessionData(hotels: Hotel[]): any {
    this.sessionData.hotelsList = hotels;
    this.sessionData.actualHotel = hotels[0];
  }
  getActualHotelId(): number {
    console.log(this.sessionData);
    return this.sessionData.actualHotel.HotelId;
  }
  addHotelByName(hotelName: string): Observable<boolean> {
    const hotel = {
      HotelName: hotelName
    };
    console.log(hotelName);
    return this.httpClient.post<boolean>(this.urlAdress, hotel, this.httpOptions);
  }
  getHotels() {
    return this.httpClient.get<Hotel[]>(this.urlAdress, this.httpOptions);
  }
  getHotelData() {
    console.log(this.sessionData);
    const hotelId = this.sessionData.actualHotel.HotelId;
    // console.log(this.httpClient.get<Hotel[]>(this.urlAdress, this.httpOptions));
    return this.httpClient.get<Floor[]>(this.urlAdress + '/hotelData/' + hotelId, this.httpOptions);
  }
}
