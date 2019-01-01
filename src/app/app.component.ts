import { Component, OnInit } from '@angular/core';
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
export class AppComponent implements OnInit {

  private isLoggedIn: boolean;
  constructor(private authService: AuthService, private hotelService: HotelService) {
  }
  selected = 'option2';
  title = 'remote-hotel';
  ngOnInit(): void {
    this.getHotelsList().subscribe();
    this.selected = this.hotelService.sessionData.actualHotel.hotelName;
  }
  getHotelsList(): any {
    return this.hotelService.getHotels().pipe(
        map(res => {
          this.hotelService.setSessionData(res as Hotel[]);
          return res;
        })
      );
  }
  changeActualHotel(): any {
    this.hotelService.changeActualHotel(this.selected);
    

  }
}
