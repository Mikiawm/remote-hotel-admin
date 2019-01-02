import { Component, OnInit, OnChanges } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { AuthService } from './services/auth.service';
import { HotelService } from './services/hotel.service';
import { map } from 'rxjs/internal/operators/map';
import { Hotel } from './models/hotel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnChanges {

  actualHotel: Hotel;
  hotelsList: Hotel[];
  private isLoggedIn: boolean;
  constructor(private authService: AuthService, private hotelService: HotelService) {
  }
  title = 'remote-hotel';
  ngOnInit(): void {
    this.getHotelsList().subscribe();
  }
  ngOnChanges() {
    this.getHotelsList().subscribe();
  }
  getHotelsList(): any {
    return this.hotelService.getHotels().pipe(
      map(res => {
        this.hotelService.setSessionData(res as Hotel[]);
        this.actualHotel = this.hotelService.sessionData.actualHotel;
        this.hotelsList = this.hotelService.sessionData.hotelsList;
        return res;
      })
    );
  }
  changeActualHotel(): any {
    this.hotelService.changeActualHotel(this.actualHotel);
  }
}
