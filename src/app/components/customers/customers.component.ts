import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/customer';
import { Observable } from 'rxjs';
import { CustomerService } from 'src/app/services/customer.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {

  customers: Customer[];
  displayedColumn: string[] = ['CustomerId', 'FirstName', 'LastName', 'Email', 'PhoneNumber', 'CreatedDate'];

  constructor(private customerService: CustomerService) { }

  ngOnInit() {
    this.getCustomers().subscribe();
  }

  getCustomers(): Observable<Customer[]> {
    return this.customerService.getAll().pipe(
      map(res => {
        console.log(res);
        this.customers = res as Customer[];
        return res;
      })
    );
  }



}
