import { Component, OnInit } from '@angular/core';
import { HotelService } from 'src/app/services/hotel.service';
import { Observable } from 'rxjs';
import { Hotel } from 'src/app/models/hotel';
import { catchError, map } from 'rxjs/operators';

@Component({
  selector: 'app-creator',
  templateUrl: './creator.component.html',
  styleUrls: ['./creator.component.scss']
})
export class CreatorComponent implements OnInit {

  singleHotels$: Observable<Hotel>;
  handleError: any;
  hotels: Hotel[];
  constructor(private hotelService: HotelService) {
    this.getAllHotels().subscribe();
  }

  ngOnInit() {
  }

  getAllHotels(): Observable<Hotel[]> {
    return this.hotelService.getAll().pipe(
      map(res => {
        this.hotels = res;
        return res;
      }),
      catchError(this.handleError)
    );
  }

}
