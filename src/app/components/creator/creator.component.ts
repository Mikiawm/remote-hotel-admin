import { Component, OnInit } from '@angular/core';
import { HotelService } from 'src/app/services/hotel.service';
import { Observable } from 'rxjs';
import { Hotel } from 'src/app/models/hotel';
import { catchError, map } from 'rxjs/operators';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { RoomService } from 'src/app/services/room.service';
import { Floor } from 'src/app/models/floor';

@Component({
  selector: 'app-creator',
  templateUrl: './creator.component.html',
  styleUrls: ['./creator.component.scss']
})
export class CreatorComponent implements OnInit {

  singleHotels$: Observable<Hotel>;
  handleError: any;
  hotels: Hotel[];
  floors: Floor[];
  floorForm: FormGroup;

  constructor(private hotelService: HotelService, private fb: FormBuilder,
    private roomService: RoomService) {
    this.getHotelData().subscribe();
    this.floorForm = this.fb.group({
      level: new FormControl('', Validators.required)
    });

  }

  ngOnInit() {
  }

  getHotelData(): Observable<Floor[]> {
    return this.hotelService.getHotelData().pipe(
      map(res => {
        this.floors = res;
        console.log(this.floors);
        return res;
      }),
      catchError(this.handleError)
    );
  }


  // addFloor() {
  //   const room = new Floor();
  //   floor.Level = this.floorForm.get('floorLevel').value;
  //   this.roomService.add(room).subscribe(
  //     x => {
  //       this.getHotelData().subscribe();
  //     }
  //   );
  // }
}
