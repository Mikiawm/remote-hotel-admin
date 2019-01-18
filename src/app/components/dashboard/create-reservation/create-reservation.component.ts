import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ReservationService } from 'src/app/services/reservation.service';
import { CustomerService } from 'src/app/services/customer.service';
import { Customer } from 'src/app/models/customer';
import { Reservation } from 'src/app/models/reservation';

@Component({
  selector: 'app-create-reservation',
  templateUrl: './create-reservation.component.html',
  styleUrls: ['./create-reservation.component.scss']
})
export class CreateReservationComponent implements OnInit {
  displayedColumn: string[] = ['RoomNumber', 'Standard', 'Beds', 'DoubleBeds', 'SingleBeds'];

  constructor(public dialogRef: MatDialogRef<CreateReservationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private fb: FormBuilder,
    private reservationService: ReservationService, private customerService: CustomerService) { }

  customerForm: FormGroup;
  ngOnInit() {
    console.log(this.data);
    this.customerForm = this.fb.group({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      phoneNumber: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required)
    });

  }

  createNewReservation() {
    const newCustomer = new Customer();
    newCustomer.FirstName = this.customerForm.value.firstName;
    newCustomer.LastName = this.customerForm.value.lastName;
    newCustomer.PhoneNumber = this.customerForm.value.phoneNumber;
    newCustomer.Email = this.customerForm.value.email;

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
