import { Component, OnInit, ViewChild, AfterContentInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { FreeRoomsComponent } from './free-rooms/free-rooms.component';
import { DataRangePickerComponent } from './data-range-picker/data-range-picker.component';
import { CreateReservationComponent } from './create-reservation/create-reservation.component';
import { MatDialog } from '@angular/material';
import { ReservationsComponent } from './reservations/reservations.component';
import { ReservarionCalendarComponent } from './reservarion-calendar/reservarion-calendar.component';
import { InitReservationComponent } from './init-reservation/init-reservation.component';
import { AccessLogsComponent } from './access-logs/access-logs.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  @ViewChild(ReservarionCalendarComponent) reservationCalendarComponent: ReservarionCalendarComponent;
  @ViewChild(ReservationsComponent) reservationsComponent: ReservationsComponent;

  ngOnInit(): void {

  }


  constructor(public dialog: MatDialog) { }

  private getReservations() {
    this.reservationsComponent.getAllReservations();
  }

  openReservationCreator() {
    const dialogRef = this.dialog.open(InitReservationComponent, {
      width: '600px'
    });
    dialogRef.afterClosed().subscribe(result => {
      this.reservationCalendarComponent.ngOnInit();
    });
  }
  openAccessLogs(){
    const dialogRef = this.dialog.open(AccessLogsComponent, {
      width: '600px'
    });
    dialogRef.afterClosed().subscribe(result => {
    });
  }
}
