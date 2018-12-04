import { Component, OnInit } from '@angular/core';
import { AccessLogService } from 'src/app/services/access-log.service';
import { Observable } from 'rxjs';
import { AccessLog } from 'src/app/models/access-log';
import { map } from 'rxjs/internal/operators/map';
import { catchError } from 'rxjs/internal/operators/catchError';

@Component({
  selector: 'app-access-log',
  templateUrl: './access-log.component.html',
  styleUrls: ['./access-log.component.scss']
})
export class AccessLogComponent implements OnInit {
  accessLogs: any;
  singleAccessLog$: Observable<AccessLog>;
  handleError: any;
  constructor(private accessLogService: AccessLogService) {

    // console.log(this.accessLogService.getAll().subscribe(accessLogs => this.accessLogs = accessLogs));

    // console.log(this.accessLogs);

    this.accessLogs = this.getAccessLogs().subscribe();
  }

  ngOnInit() {
  }

  getAccessLogs(): Observable<AccessLog[]> {
    return this.accessLogService.getAll().pipe(
      map(res => {
        /* Your processing here */
        console.log(res);
        return res;
      }),
      catchError(this.handleError)
    );
  }

}
