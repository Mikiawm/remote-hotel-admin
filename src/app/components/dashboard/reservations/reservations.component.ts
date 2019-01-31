import { Component, OnInit } from '@angular/core';
import { Reservation } from 'src/app/models/reservation';
import { ReservationService } from 'src/app/services/reservation.service';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.scss']
})
export class ReservationsComponent implements OnInit {

  reservations: Reservation[];
  displayedColumn: string[] = ['RoomNumber', 'Customer', 'ReservationKey', 'DateFrom', 'DateTo'];
  constructor(private reservationService: ReservationService) { }

  ngOnInit() {
    this.getAllReservations();
  }
  getAllReservations() {
    this.reservationService.getAll().subscribe(
      x => {
        this.reservations = x;
      }
    );
  }

}
