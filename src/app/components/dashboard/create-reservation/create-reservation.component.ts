import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ReservationService } from 'src/app/services/reservation.service';
import { CustomerService } from 'src/app/services/customer.service';
import { Customer } from 'src/app/models/customer';
import { Reservation } from 'src/app/models/reservation';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { CustomersComponent } from './customers/customers.component';

@Component({
  selector: 'app-create-reservation',
  templateUrl: './create-reservation.component.html',
  styleUrls: ['./create-reservation.component.scss']
})
export class CreateReservationComponent implements OnInit {
  @ViewChild(AddCustomerComponent) addCustomerComponent: AddCustomerComponent;
  @ViewChild(CustomersComponent) customers: CustomersComponent;
  displayedColumn: string[] = ['RoomNumber', 'Standard', 'Beds', 'DoubleBeds', 'SingleBeds'];

  constructor(public dialogRef: MatDialogRef<CreateReservationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private fb: FormBuilder,
    private reservationService: ReservationService, private customerService: CustomerService) { }


  ngOnInit() {
  }

  createNewReservation() {
    let newCustomer = new Customer();
    if (this.customers.customerMarked) {
      newCustomer = this.customers.customerMarked;
    } else {
      newCustomer = this.addCustomerComponent.customerForm.value as Customer;
    }

    const newReservation = new Reservation();

    newReservation.RoomId = this.data.room.RoomId;
    newReservation.DateFrom = this.data.dates.dateFrom;
    newReservation.DateTo = this.data.dates.dateTo;
    this.customerService.add(newCustomer)
      .subscribe(
        customerId => newReservation.CustomerId = customerId,
        error => console.log(error),
        () => {
          this.reservationService.add(newReservation).subscribe();
        }
      );
    this.dialogRef.close();
  }
}
