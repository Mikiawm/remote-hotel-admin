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
import { Subject } from 'rxjs';
// import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {
  CalendarEvent,
  CalendarEventAction,
  CalendarEventTimesChangedEvent,
  CalendarView
} from 'angular-calendar';
import { ReservationService } from 'src/app/services/reservation.service';
import { Reservation } from 'src/app/models/reservation';

@Component({
  selector: 'app-reservation-calendar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './reservarion-calendar.component.html',
  styleUrls: ['./reservarion-calendar.component.scss']
})
export class ReservarionCalendarComponent implements OnInit {
  view = 'month';
  reservations: Reservation[];
  events: CalendarEvent[];
  viewDate: Date = new Date();
  constructor(private reservationService: ReservationService) {
  }

  ngOnInit() {
    this.reservationService.getAll().subscribe(
      x => this.reservations = x as Reservation[],
      error => console.log(error),
      () => this.createCalendarEvents()
    );

  }
  createCalendarEvents(): any {
    this.events = [];
    console.log(this.reservations);
    this.reservations.forEach(element => {
      const newCalendarEvent: CalendarEvent = {
        title: element.ReservationId.toString(),
        start: new Date(element.DateFrom),
        end: new Date(element.DateTo),
        id: element.ReservationId,
        actions: [
          {
            label: '<i class="fa fa-fw fa-pencil"></i>',
            onClick: ({ event }: { event: CalendarEvent }): void => {
              console.log('Edit event', event);
            }
          }
        ]
      };
      this.events.push(newCalendarEvent);
    });
    console.log(this.events);
  }
}
