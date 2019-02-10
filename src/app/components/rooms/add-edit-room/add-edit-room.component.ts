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
    @Inject(MAT_DIALOG_DATA) public data: Room,
    public dialogRef: MatDialogRef<AddEditRoomComponent>) { }

  ngOnInit() {
    this.roomForm = this.fb.group({
      RoomId: new FormControl(null),
      RoomNumber: new FormControl('', Validators.required),
      Beds: new FormControl('', Validators.required),
      Standard: new FormControl('', Validators.required),
      DoubleBeds: new FormControl('', Validators.required)
    });

    this.roomForm.patchValue(this.data);

  }
  addRoom() {
    const room: Room = this.roomForm.value;
    room.HotelId = 1;
    if (room.RoomId == null) {
      this.roomService.add(room).subscribe();
    } else {
      this.roomService.update(room).subscribe();
    }
    this.dialogRef.close();
  }
}
