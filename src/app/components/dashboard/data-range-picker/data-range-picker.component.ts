import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-range-picker',
  templateUrl: './data-range-picker.component.html',
  styleUrls: ['./data-range-picker.component.scss']
})
export class DataRangePickerComponent implements OnInit {
  minDate = new Date(2000, 0, 1);
  maxDate = new Date(2020, 0, 1);

  constructor() { }

  ngOnInit() {
  }

}
