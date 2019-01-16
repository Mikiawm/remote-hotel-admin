import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ReservationService } from 'src/app/services/reservation.service';
import { CustomerService } from 'src/app/services/customer.service';
import { Customer } from 'src/app/models/customer';

@Component({
  selector: 'app-create-reservation',
  templateUrl: './create-reservation.component.html',
  styleUrls: ['./create-reservation.component.scss']
})
export class CreateReservationComponent implements OnInit {
  displayedColumn: string[] = ['RoomNumber', 'Standard', 'Beds', 'DoubleBeds', 'SingleBeds'];

  constructor(public dialogRef: MatDialogRef<CreateReservationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private fb: FormBuilder,
    private reservationService: ReservationService, private customerService: CustomerService ) { }

    customerForm: FormGroup;
  ngOnInit() {
    this.customerForm = this.fb.group({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      phoneNumber: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required)
    });

  }

  createNewReservation(){
    console.log(this.customerForm.value.firstName);
    const newCustomer = new Customer();

    newCustomer.firstName = this.customerForm.value.firstName;
    newCustomer.lastName = this.customerForm.value.lastName;
    newCustomer.phoneNumber = this.customerForm.value.phoneNumber;
    newCustomer.email = this.customerForm.value.email;
    this.customerService.add(newCustomer).subscribe();
    // this.reservationService.createNewReservation()
    console.log(this.customerForm.valid);
  }
}
