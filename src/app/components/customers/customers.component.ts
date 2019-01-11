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

  constructor(private customerService: CustomerService) { }

  ngOnInit() {
  }

  getCustomers(): Observable<Customer[]> {
    return this.customerService.getAll().pipe(
      map(res => {
        console.log(res);
        this.customers = res;
        return res;
      })
    );
  }



}
