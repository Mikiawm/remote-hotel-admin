import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ReservationsComponent } from './reservations/reservations.component';
import { ReservarionCalendarComponent } from './reservarion-calendar/reservarion-calendar.component';
import { InitReservationComponent } from './init-reservation/init-reservation.component';
import { AccessLogsComponent } from './access-logs/access-logs.component';
import { PendingReservationsComponent } from './pending-reservations/pending-reservations.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  @ViewChild(ReservarionCalendarComponent) reservationCalendarComponent: ReservarionCalendarComponent;
  @ViewChild(ReservationsComponent) reservationsComponent: ReservationsComponent;

  constructor(public dialog: MatDialog) { }

  openReservationCreator() {
    const dialogRef = this.dialog.open(InitReservationComponent, {
      width: '600px'
    });
    dialogRef.afterClosed().subscribe(result => {
      this.reservationCalendarComponent.ngOnInit();
    });
  }

  openAccessLogs() {
    const dialogRef = this.dialog.open(AccessLogsComponent, {
      width: '600px'
    });
    dialogRef.afterClosed().subscribe(result => {
    });
  }

  openPendingReservations() {
    const dialogRef = this.dialog.open(PendingReservationsComponent, {
      width: '600px'
    });
    dialogRef.afterClosed().subscribe(x => {
      this.reservationCalendarComponent.ngOnInit();
    });
  }
}
