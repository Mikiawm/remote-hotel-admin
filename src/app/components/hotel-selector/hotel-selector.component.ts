import { Component, OnInit } from '@angular/core';
import { HotelService } from 'src/app/services/hotel.service';
import { Hotel } from 'src/app/models/hotel';
import { map } from 'rxjs/internal/operators/map';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-hotel-selector',
  templateUrl: './hotel-selector.component.html',
  styleUrls: ['./hotel-selector.component.scss']
})
export class HotelSelectorComponent implements OnInit {

  actualHotelName = '';
  hotelsList: Observable<Hotel[]>;
  constructor(private hotelService: HotelService) { }

  ngOnInit() {
    console.log(this.getHotelsList());
    this.hotelsList = this.getHotelsList();
  }

  getHotelsList(): Observable<Hotel[]> {
    return this.hotelService.getHotels().pipe(
      map(res => {
        this.hotelService.setSessionData(res as Hotel[]);
        this.actualHotelName = this.hotelService.sessionData.actualHotel.HotelName;
        return res;
      })
    );
  }
  changeActualHotel(): any {
    this.hotelService.changeActualHotel(this.actualHotelName);
  }
}
