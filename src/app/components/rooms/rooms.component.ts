import { Component, OnInit } from '@angular/core';
import { RoomService } from 'src/app/services/room.service';
import { Observable } from 'rxjs/internal/Observable';
import { Room } from 'src/app/models/room';
import { map } from 'rxjs/internal/operators/map';
import { AddEditRoomComponent } from './add-edit-room/add-edit-room.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit {
  rooms: Room[];

  displayedColumn: string[] = ['RoomNumber', 'Standard', 'Beds', 'DoubleBeds', 'SingleBeds'];

  constructor(private roomService: RoomService, public dialog: MatDialog) {
    this.getRooms().subscribe();
  }

  ngOnInit() {
    this.getRooms().subscribe();
  }

  getRooms(): Observable<Room[]> {
    return this.roomService.getAll().pipe(
      map(res => {
        this.rooms = res;
        console.log(res);
        return res;
      })
    );
  }
  openAddEditRoomDialog(room?: Room) {
    const dialogRef = this.dialog.open(AddEditRoomComponent, {
      height: '400px',
      width: '600px',
      data: room,
    });
    dialogRef.afterClosed().subscribe(result => {
      this.getRooms().subscribe();
    });
  }
}
