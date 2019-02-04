import { Component, OnInit, ViewChild } from '@angular/core';
import { Customer } from 'src/app/models/customer';
import { MatDialogRef } from '@angular/material';
import { CustomerService } from 'src/app/services/customer.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ListViewComponent } from 'src/app/components/list-view/list-view.component';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersModalComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<CustomersModalComponent>, private customerService: CustomerService) { }
  @ViewChild(ListViewComponent) listViewComponent: ListViewComponent<Customer>;
  customers: Customer[];
  header = 'customer';
  displayedColumn: string[] = ['FirstName', 'LastName', 'Email', 'PhoneNumber', 'CreatedDate'];
  markedCustomer: Customer;

  ngOnInit() {
    this.getCustomers().subscribe();
  }

  getCustomers(): Observable<Customer[]> {
    return this.customerService.getAll().pipe(
      map(res => {
        this.customers = res as Customer[];
        return res;
      })
    );
  }
  onMarked(event) {
    this.markedCustomer = event;
  }
  save() {
    this.dialogRef.close(this.markedCustomer);
  }
  cancel() {
    this.dialogRef.close();
  }

}
