import { Component, OnInit } from '@angular/core';
import { AccessLogService } from 'src/app/services/access-log.service';
import { Observable, Subscription } from 'rxjs';
import { AccessLog } from 'src/app/models/access-log';
import { map } from 'rxjs/internal/operators/map';
import { catchError } from 'rxjs/internal/operators/catchError';

@Component({
  selector: 'app-access-log',
  templateUrl: './access-log.component.html',
  styleUrls: ['./access-log.component.scss']
})
export class AccessLogComponent implements OnInit {
  singleAccessLog$: Observable<AccessLog>;
  handleError: any;
  accessLogs: AccessLog[];
  displayedColumn = ['LogId', 'CreatedDate', 'Status', 'Info', 'PasswordHash'];
  constructor(private accessLogService: AccessLogService) {


    this.getAccessLogs().subscribe();
  }

  ngOnInit() {
  }

  getAccessLogs(): Observable<AccessLog[]> {
    return this.accessLogService.getAll().pipe(
      map(res => {
        /* Your processing here */
        this.accessLogs = res;
        return res;
      }),
      catchError(this.handleError)
    );
  }

}
