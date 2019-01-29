import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.scss']
})
export class AddCustomerComponent implements OnInit {
  constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<AddCustomerComponent>,
    private customerService: CustomerService) { }
  customerForm: FormGroup;
  ngOnInit() {
    this.customerForm = this.fb.group({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      phoneNumber: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required)
    });
  }
  cancel() {
    this.dialogRef.close();
  }
  save() {
    this.customerService.add(this.customerForm.value).subscribe(
      x => this.dialogRef.close(x)
    );
  }
}
