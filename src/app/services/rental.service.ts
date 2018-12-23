import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { DataService } from './data.service';
import { Rental } from '../models/rental';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class RentalService extends DataService<Rental> {

  constructor(public httpClient: HttpClient, public authService: AuthService) {
    super('/rental', httpClient, authService);
   }
}
