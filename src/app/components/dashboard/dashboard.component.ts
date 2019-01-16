import { Component, OnInit, ViewChild, AfterContentInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { FreeRoomsComponent } from './free-rooms/free-rooms.component';
import { DataRangePickerComponent } from './data-range-picker/data-range-picker.component';
import { CreateReservationComponent } from './create-reservation/create-reservation.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit, AfterContentInit {
  @ViewChild(FreeRoomsComponent) freeRoomsView: FreeRoomsComponent;
  @ViewChild(DataRangePickerComponent) dateRangePicker: DataRangePickerComponent;
  ngOnInit(): void {

  }

  ngAfterContentInit(): void {
    this.getFreeRooms();
  }
  private getFreeRooms() {
    this.dateRangePicker.reservationForm.valueChanges.subscribe(changes => {
      this.freeRoomsView.getFreeRooms(changes).subscribe();
    });
  }

  initReservation() {
    const data = {
      dates: this.dateRangePicker.reservationForm.value,
      room: this.freeRoomsView.markedRoom
    };

    const dialogRef = this.dialog.open(CreateReservationComponent, {
      height: '400px',
      width: '600px',
      data: data,
    });
    dialogRef.afterClosed().subscribe(result => {
      this.getFreeRooms();
    });
  }
  constructor(public dialog: MatDialog) { }

}
