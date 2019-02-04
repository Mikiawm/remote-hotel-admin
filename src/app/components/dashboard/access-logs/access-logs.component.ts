import { Component, OnInit, ViewChild } from '@angular/core';
import { AccessLogService } from 'src/app/services/access-log.service';
import { Observable, timer, interval, Subscription } from 'rxjs';
import { AccessLog } from 'src/app/models/access-log';
import { map, catchError, timeInterval } from 'rxjs/operators';
import { ListViewComponent } from '../../list-view/list-view.component';

@Component({
  selector: 'app-access-logs',
  templateUrl: './access-logs.component.html',
  styleUrls: ['./access-logs.component.scss']
})
export class AccessLogsComponent implements OnInit {
  @ViewChild(ListViewComponent) listViewComponent: ListViewComponent<AccessLog>;
  singleAccessLog$: Observable<AccessLog>;
  handleError: any;
  accessLogs: AccessLog[];
  accessLogs$: Subscription;
  header = 'Access logs';
  displayedColumn = ['LogId', 'CreatedDate', 'Status', 'Info', 'PasswordHash'];

  constructor(private accessLogService: AccessLogService) {

  }

  onMarked() {
    this.accessLogs$.unsubscribe();
  }
  ngOnInit() {
    this.accessLogs$ = interval(1000).subscribe(() => this.getAccessLogs().subscribe());
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
