import { Component, OnInit, Input, Inject } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { RoomService } from 'src/app/services/room.service';
import { Room } from 'src/app/models/room';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { HotelService } from 'src/app/services/hotel.service';

@Component({
  selector: 'app-add-edit-room',
  templateUrl: './add-edit-room.component.html',
  styleUrls: ['./add-edit-room.component.scss']
})
export class AddEditRoomComponent implements OnInit {

  roomForm: FormGroup;
  constructor(private fb: FormBuilder, private roomService: RoomService,
    @Inject(MAT_DIALOG_DATA) public data: Room, private hotelService: HotelService,
    public dialogRef: MatDialogRef<AddEditRoomComponent>) { }

  ngOnInit() {
    this.roomForm = this.fb.group({
      roomNumber: new FormControl('', Validators.required),
      roomBeds: new FormControl('', Validators.required),
      roomStandard: new FormControl('', Validators.required),
      doubleBeds: new FormControl('', Validators.required)
    });
    this.onChanges();
  }
  onChanges(): void {
    this.roomForm.valueChanges.subscribe(val => {
      console.log(val);
    });
  }
  addRoom() {
    const room: Room = {
      RoomNumber: this.roomForm.get('roomNumber').value,
      Standard: this.roomForm.get('roomStandard').value,
      Beds: this.roomForm.get('roomBeds').value,
      DoubleBeds: this.roomForm.get('doubleBeds').value,
      HotelId: this.hotelService.getActualHotelId()
    };
    console.log(room);
    this.roomService.add(room).subscribe(val => {
      console.log(val);
    });
    this.dialogRef.close();
  }

}
