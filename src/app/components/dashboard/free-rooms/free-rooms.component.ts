import { Component, OnInit, Input, OnChanges, SimpleChanges, DoCheck } from '@angular/core';
import { FormBuilder, FormArray } from '@angular/forms';
import { RoomService } from 'src/app/services/room.service';
import { Room } from 'src/app/models/room';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-free-rooms',
  templateUrl: './free-rooms.component.html',
  styleUrls: ['./free-rooms.component.scss']
})
export class FreeRoomsComponent {
  @Input() reservationForm: FormArray;
  markedRoom?: Room;
  displayedColumns: string[] = ['RoomNumber', 'DoubleBeds', 'Beds', 'Standard'];
  dataSource: MatTableDataSource<Room>;
  rooms: Room[] = [];

  constructor(private roomService: RoomService) { }

  getFreeRooms(changes): Observable<Room[]> {
    return this.roomService.getFreeRooms(changes.dateFrom, changes.dateTo).pipe(
      map(res => {
        this.rooms = res;
        this.dataSource = new MatTableDataSource(res);
        return res;
      })
    );
  }
  markRoom(room: Room) {
    this.markedRoom = room;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
