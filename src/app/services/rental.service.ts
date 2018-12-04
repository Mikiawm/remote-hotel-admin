import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { DataService } from './data.service';
import { Rental } from '../models/rental';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RentalService extends DataService<Rental> {

  constructor(public httpClient: HttpClient) {
    super('/rental', httpClient);
   }
}
