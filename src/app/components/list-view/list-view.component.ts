import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { DatePipe } from '@angular/common';
import * as moment from 'moment';
import { Observable } from 'rxjs/internal/Observable';
import { Subject } from 'rxjs/internal/Subject';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

import { empty } from 'rxjs/internal/observable/empty';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss']
})
export class ListViewComponent<T> implements OnInit {
  @Input() DisplayedColumns: string[];
  @Input() Items: T[];
  @Input() Header: string;
  @Input() ColumnSize: number[];
  @Input() Keys: string[];
  @Output() marked = new EventEmitter<T>();
  markedItem?: T;


  constructor(private datePipe: DatePipe) {
   }

  ngOnInit() {
  }

  markItem(item: T) {
    this.marked.emit(item);
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
