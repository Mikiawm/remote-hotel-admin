import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ReservationService } from 'src/app/services/reservation.service';
import { CustomerService } from 'src/app/services/customer.service';
import { Customer } from 'src/app/models/customer';
import { Reservation } from 'src/app/models/reservation';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { CustomersModalComponent } from './customers/customers.component';

@Component({
  selector: 'app-create-reservation',
  templateUrl: './create-reservation.component.html',
  styleUrls: ['./create-reservation.component.scss']
})
export class CreateReservationComponent implements OnInit {
  @ViewChild(AddCustomerComponent) addCustomerComponent: AddCustomerComponent;
  @ViewChild(CustomersModalComponent) customers: CustomersModalComponent;
  displayedColumn: string[] = ['RoomNumber', 'Standard', 'Beds', 'DoubleBeds', 'SingleBeds'];
  customer: Customer | undefined;

  constructor(public dialogRef: MatDialogRef<CreateReservationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private fb: FormBuilder,
    private reservationService: ReservationService,
    public dialog: MatDialog) { }


  ngOnInit() {
  }

  createNewReservation() {
    const newReservation = new Reservation();
    newReservation.CustomerId = this.customer.CustomerId;
    newReservation.RoomId = this.data.room.RoomId;
    newReservation.DateFrom = this.data.dates.dateFrom;
    newReservation.DateTo = this.data.dates.dateTo;
    this.reservationService.add(newReservation).subscribe();
    this.dialogRef.close();
  }
  customerValid(): boolean {
    if (this.customer) {
      return true;
    }
    return false;
  }
  getCustomer() {
    const dialogRef = this.dialog.open(CustomersModalComponent, {
      width: '600px',
      data: this.customer ? this.customer :  null
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.customer = result;
      }
    });
  }
  createCustomer() {
    const dialogRef = this.dialog.open(AddCustomerComponent, {
      width: '600px',
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log(result);
        this.customer = result;
      }
    });
  }
}
