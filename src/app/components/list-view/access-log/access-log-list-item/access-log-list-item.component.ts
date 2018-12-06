import { Component, OnInit, Input } from '@angular/core';
import { AccessLog } from 'src/app/models/access-log';

@Component({
  selector: 'app-access-log-list-item',
  templateUrl: './access-log-list-item.component.html',
  styleUrls: ['./access-log-list-item.component.scss']
})
export class AccessLogListItemComponent implements OnInit {
  
  @Input() accessLogData: AccessLog;

  constructor() {
   }

  ngOnInit() {
    console.log(this.accessLogData);
    console.log(this.accessLogData instanceof AccessLog);
  }

}
