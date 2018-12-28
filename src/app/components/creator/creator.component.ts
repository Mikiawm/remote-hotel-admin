import { Component, OnInit } from '@angular/core';
import { HotelService } from 'src/app/services/hotel.service';
import { Observable } from 'rxjs';
import { Hotel } from 'src/app/models/hotel';
import { catchError, map } from 'rxjs/operators';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { RoomService } from 'src/app/services/room.service';

@Component({
  selector: 'app-creator',
  templateUrl: './creator.component.html',
  styleUrls: ['./creator.component.scss']
})
export class CreatorComponent implements OnInit {

  singleHotels$: Observable<Hotel>;
  handleError: any;
  hotels: Hotel[];
  hotelForm: FormGroup;

  constructor(private hotelService: HotelService, private fb: FormBuilder,
    private roomService: RoomService) {
    this.getAllHotels().subscribe();
    this.hotelForm = this.fb.group({
      hotelName: new FormControl('', Validators.required)
    });

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


  addHotel() {
    this.hotelService.addHotelByName(this.hotelForm.get('hotelName').value).subscribe(
      x => {
        this.getAllHotels().subscribe();
      }
    );
  }
}
