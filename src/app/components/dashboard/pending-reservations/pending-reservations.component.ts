import { Component, OnInit } from '@angular/core';
import { Reservation } from 'src/app/models/reservation';
import { ReservationService } from 'src/app/services/reservation.service';
import { MatTableDataSource, MatDialog, MatDialogRef } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { AcceptReservationDialogComponent } from './accept-reservation-dialog/accept-reservation-dialog.component';

@Component({
  selector: 'app-pending-reservations',
  templateUrl: './pending-reservations.component.html',
  styleUrls: ['./pending-reservations.component.scss']
})
export class PendingReservationsComponent implements OnInit {
  reservations: Reservation[];
  displayedColumns: string[] = ['Select', 'RoomNumber', 'Customer', 'DateFrom', 'DateTo'];
  dataSource: MatTableDataSource<Reservation>;
  selection = new SelectionModel<Reservation>(true, []);


  constructor(private reservationService: ReservationService, private dialog: MatDialog,
    public dialogRef: MatDialogRef<PendingReservationsComponent>) { }

  ngOnInit() {
    this.getAllReservations();
  }

  getAllReservations() {
    this.reservationService.getAll().subscribe(
      x => {
        this.dataSource = new MatTableDataSource(x);
        this.reservations = x;
      }
    );
  }
  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }
  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }
  acceptReservations() {
    this.dialog.open(AcceptReservationDialogComponent, {
      width: '600px',
      data: this.selection
    });
    this.dialogRef.close();
  }

}
