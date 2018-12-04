import { Component, OnInit, Input } from '@angular/core';
import { AccessLog } from 'src/app/models/access-log';

@Component({
  selector: 'app-access-log-list-item',
  templateUrl: './access-log-list-item.component.html',
  styleUrls: ['./access-log-list-item.component.scss']
})
export class AccessLogListItemComponent implements OnInit {
  
  @Input() accessLog: AccessLog;

  constructor() {
    console.log(this.accessLog);
   }

  ngOnInit() {
  }

}
