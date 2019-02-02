import { Component, OnInit, Input } from '@angular/core';
import { DatePipe } from '@angular/common';
import * as moment from 'moment';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss']
})
export class ListViewComponent<T> implements OnInit {
  @Input() DisplayedColumns: string[];
  @Input() Items: T[];
  @Input() Header: string;
  @Input() Keys: string[];
  columnSize: number;
  markedItem?: T;

  constructor(private datePipe: DatePipe) {

   }

  ngOnInit() {
    console.log(this.Keys);
    this.columnSize = 100 / this.Keys.length;
  }

  markItem(item: T) {
    this.markedItem = item;
  }
  format(input) {
    if (typeof input === 'number') {
      return input;
    }

    const tryDate = new Date(input).toString();
    if (tryDate === 'Invalid Date') {
      return input;
    } else {
      return this.datePipe.transform(input, 'yyyy-dd-MM');
    }
  }
}
