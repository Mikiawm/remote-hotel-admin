import { Component, OnInit, Input } from '@angular/core';

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

  markedItem: T;

  constructor() { }

  ngOnInit() {
  }

}
