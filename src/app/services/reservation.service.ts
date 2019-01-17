import { Injectable } from '@angular/core';
import { Reservation } from '../models/reservation';
import { DataService } from './data.service';
import { AuthService } from './auth.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReservationService extends DataService<Reservation> {

  constructor(public httpClient: HttpClient, public authService: AuthService) {
    super('/reservations', httpClient, authService);
  }
  createNewReservation(newReservation: Reservation) {
    this.httpClient.post(this.urlAdress, newReservation, this.httpOptions);
  }
}
