import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-clicked-day-modal',
  templateUrl: './clicked-day-modal.component.html',
  styleUrls: ['./clicked-day-modal.component.scss']
})
export class ClickedDayModalComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ClickedDayModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      console.log(data);
     }

  ngOnInit() {

  }

}
