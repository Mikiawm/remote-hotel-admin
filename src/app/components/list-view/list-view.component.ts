import { Component, OnInit, Input } from '@angular/core';
import { DatePipe } from '@angular/common';

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

  markedItem?: T;

  constructor(private datePipe: DatePipe) { }

  ngOnInit() {
  }

  markItem(item: T) {
    this.markedItem = item;
  }
  format(input) {
    if (Object.prototype.toString.call(input) === '[object Date]') {
      return this.datePipe.transform(input, 'yyyy-dd-MM');
    }
    return input;
  }
}
