import { Component, OnInit, ViewChild } from '@angular/core';
import { FreeRoomsComponent } from '../free-rooms/free-rooms.component';
import { DataRangePickerComponent } from '../data-range-picker/data-range-picker.component';
import { MatDialog, MatDialogRef } from '@angular/material';
import { CreateReservationComponent } from '../create-reservation/create-reservation.component';

@Component({
  selector: 'app-init-reservation',
  templateUrl: './init-reservation.component.html',
  styleUrls: ['./init-reservation.component.scss']
})
export class InitReservationComponent implements OnInit {
  @ViewChild(FreeRoomsComponent) freeRoomsView: FreeRoomsComponent;
  @ViewChild(DataRangePickerComponent) dateRangePicker: DataRangePickerComponent;
  constructor(public dialog: MatDialog, public dialogRef: MatDialogRef<InitReservationComponent>) { }

  ngOnInit() {
    this.getFreeRooms();
  }
  initReservation() {
    const data = {
      dates: this.dateRangePicker.reservationForm.value,
      room: this.freeRoomsView.markedRoom
    };

    const dialogRef = this.dialog.open(CreateReservationComponent, {
      width: '600px',
      data: data,
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.dialogRef.close();
      }
    });
  }
  private getFreeRooms() {
    this.dateRangePicker.reservationForm.valueChanges.subscribe(changes => {
      this.freeRoomsView.getFreeRooms(changes).subscribe();
    });
  }
}
