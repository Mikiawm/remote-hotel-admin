import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Reservation } from 'src/app/models/reservation';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'app-accept-reservation-dialog',
  templateUrl: './accept-reservation-dialog.component.html',
  styleUrls: ['./accept-reservation-dialog.component.scss']
})
export class AcceptReservationDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AcceptReservationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: SelectionModel<Reservation[]>) { }

  ngOnInit() {
    console.log(this.data.selected);
  }

  close(){
    this.dialogRef.close();
  }
}
