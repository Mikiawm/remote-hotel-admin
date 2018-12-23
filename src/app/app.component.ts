import { Component } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private isLoggedIn: boolean;
  constructor(private authService: AuthService) {
    // this.isLoggedIn = this.authService.isLoggedIn();
  }
  title = 'remote-hotel';
}
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Bearer'
  })
};
