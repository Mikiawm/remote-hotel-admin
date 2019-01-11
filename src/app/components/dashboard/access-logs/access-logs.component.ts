import { Component, OnInit } from '@angular/core';
import { AccessLogService } from 'src/app/services/access-log.service';
import { Observable } from 'rxjs';
import { AccessLog } from 'src/app/models/access-log';
import { map, catchError } from 'rxjs/operators';

@Component({
  selector: 'app-access-logs',
  templateUrl: './access-logs.component.html',
  styleUrls: ['./access-logs.component.scss']
})
export class AccessLogsComponent implements OnInit {

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
