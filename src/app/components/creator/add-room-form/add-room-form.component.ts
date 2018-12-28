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
  @Input() hotelId: string;
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
  addRoom() {
    const room: Room = {
      roomNumber: this.roomForm.get('roomNumber').value,
      status: 0,
      standard: this.roomForm.get('roomStandard').value,
      beds: this.roomForm.get('roomBeds').value,
      hotelId: +this.hotelId
    };
    console.log(room);
    this.roomService.add(room).subscribe(val => {
      console.log(val);
    });
  }
}
