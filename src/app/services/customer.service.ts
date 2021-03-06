import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { DataService } from './data.service';
import { Customer } from '../models/customer';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';
@Injectable({
  providedIn: 'root'
})
export class CustomerService extends DataService<Customer> {
  private accessLogEndPoint = '/accessLog';
  constructor(public httpClient: HttpClient, public authService: AuthService) {
    super('/customers ', httpClient, authService);
  }
}
