import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
import { RoomService } from 'src/app/services/room.service';
import { Hotel } from 'src/app/models/hotel';
import { Room } from 'src/app/models/room';

@Component({
  selector: 'app-add-room-form',
  templateUrl: './add-room-form.component.html',
  styleUrls: ['./add-room-form.component.scss']
})
export class AddRoomFormComponent implements OnInit, OnChanges {
  @Input() floorId: string;
  roomForm: FormGroup;
  constructor(private fb: FormBuilder, private roomService: RoomService) { }

  ngOnInit() {
    this.roomForm = this.fb.group({
      roomNumber: new FormControl('', Validators.required),
      roomBeds: new FormControl('', Validators.required),
      roomStandard: new FormControl('', Validators.required)
    });
    this.onChanges();
  }
  ngOnChanges(){
    console.log(this.roomForm);
  }
  onChanges(): void {
    this.roomForm.valueChanges.subscribe(val => {
      console.log(val);
    });
  }
  // addRoom() {
  //   const room: Room = {
  //     RoomNumber: this.roomForm.get('roomNumber').value,
  //     Status: 0,
  //     Standard: this.roomForm.get('roomStandard').value,
  //     Beds: this.roomForm.get('roomBeds').value,
  //     HotelId: +this.floorId
  //   };
  //   console.log(room);
  //   this.roomService.add(room).subscribe(val => {
  //     console.log(val);
  //   });
  // }
}
