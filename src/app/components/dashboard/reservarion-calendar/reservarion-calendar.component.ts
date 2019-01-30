import {
  Component,
  ChangeDetectionStrategy,
  ViewChild,
  TemplateRef,
  OnInit
} from '@angular/core';
import {
  startOfDay,
  endOfDay,
  subDays,
  addDays,
  endOfMonth,
  isSameDay,
  isSameMonth,
  addHours
} from 'date-fns';
import { Subject, Observable } from 'rxjs';
// import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {
  CalendarEvent,
  CalendarEventAction,
  CalendarEventTimesChangedEvent,
  CalendarView
} from 'angular-calendar';
import { ReservationService } from 'src/app/services/reservation.service';
import { Reservation } from 'src/app/models/reservation';
import { map } from 'rxjs/internal/operators/map';

@Component({
  selector: 'app-reservation-calendar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './reservarion-calendar.component.html',
  styleUrls: ['./reservarion-calendar.component.scss']
})
export class ReservarionCalendarComponent implements OnInit {
  view = 'month';
  reservations: Reservation[];
  events$: Observable<Array<CalendarEvent<{ reservation: Reservation }>>>;
  viewDate: Date = new Date();
  refresh: Subject<any> = new Subject();
  constructor(private reservationService: ReservationService) {
  }

  ngOnInit() {
    this.events$ = this.reservationService.getAll()
    .pipe(
      map(( results: Reservation[] ) => {
        return results.map((reservation: Reservation) => {
          return {
            title: reservation.ReservationId.toString(),
            start: new Date(reservation.DateFrom),
            end: new Date(reservation.DateTo),
            id: reservation.ReservationId,
            color: {
              primary: '#' + (reservation.ReservationId * 0.66).toString(16).substr(2, 6),
              secondary: '#' + (reservation.ReservationId * 0.33).toString(16).substr(2, 6)
            },
            actions: [
              {
                label: '<i class="fa fa-fw fa-pencil"></i>',
                onClick: ({ event }: { event: CalendarEvent }): void => {
                  console.log('Edit event', event);
                }
              }
            ]
          };
        });
      })
    );
  }
}
