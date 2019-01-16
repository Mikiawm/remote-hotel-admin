import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-data-range-picker',
  templateUrl: './data-range-picker.component.html',
  styleUrls: ['./data-range-picker.component.scss']
})
export class DataRangePickerComponent implements OnInit {
  public reservationForm: FormGroup = this.fb.group({
    dateFrom: new FormControl(new Date()),
    dateTo: new FormControl(new Date())
  });
  minDate = new Date(2000, 0, 1);
  maxDate = new Date(2020, 0, 1);


  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    const tomorrow = new Date();
    const today = new Date();
    tomorrow.setDate(today.getDate() + 1);
    this.reservationForm.get('dateTo').setValue(tomorrow);
  }

}
