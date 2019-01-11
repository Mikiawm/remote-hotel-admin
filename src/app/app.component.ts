import { Component, OnInit, OnChanges } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { AuthService } from './services/auth.service';
import { HotelService } from './services/hotel.service';
import { map } from 'rxjs/internal/operators/map';
import { Hotel } from './models/hotel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  private isLoggedIn: boolean;
  constructor(private authService: AuthService) {
  }
  title = 'remote-hotel';
  ngOnInit(): void {
  }

}
