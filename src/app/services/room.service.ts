import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Room } from '../models/room';
import { DataService } from './data.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RoomService extends DataService<Room> {

  constructor(public httpClient: HttpClient, public authService: AuthService) {
    super('/rooms', httpClient, authService);
  }
}
