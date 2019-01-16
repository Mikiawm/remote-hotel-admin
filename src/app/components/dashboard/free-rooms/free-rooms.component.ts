import { Component, OnInit, Input, OnChanges, SimpleChanges, DoCheck } from '@angular/core';
import { FormBuilder, FormArray } from '@angular/forms';
import { RoomService } from 'src/app/services/room.service';
import { Room } from 'src/app/models/room';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-free-rooms',
  templateUrl: './free-rooms.component.html',
  styleUrls: ['./free-rooms.component.scss']
})
export class FreeRoomsComponent implements DoCheck {
  @Input() reservationForm: FormArray;
  changeLog: string[] = [];

  rooms: Room[];
  markedRoom?: Room;
  displayedColumn: string[] = ['RoomNumber', 'Standard', 'Beds', 'DoubleBeds', 'SingleBeds'];

  constructor(private roomService: RoomService) { }

  // ngOnChanges(changes) {
  //   console.log(changes);
  //   console.log(this.reservationForm.value);
  // }
  ngDoCheck() {
    // console.log(this.reservationForm);
  }
  getFreeRooms(changes): Observable<Room[]> {
    return this.roomService.getFreeRooms(changes.dateFrom, changes.dateTo).pipe(
      map(res => {
        this.rooms = res;
        console.log('asda');
        console.log(this.rooms);
        return res;
      })
    );
  }
  markRoom(room: Room) {
    this.markedRoom = room;
  }
}
