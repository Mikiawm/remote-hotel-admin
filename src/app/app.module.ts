import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import {
  MatToolbarModule, MatButtonModule, MatSidenavModule,
  MatIconModule, MatListModule, MatGridListModule,
  MatCardModule, MatMenuModule
} from '@angular/material';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UsersService } from './services/users.service';
import { RoomService } from './services/room.service';
import { HotelService } from './services/hotel.service';
import { AccessLogService } from './services/access-log.service';
import { AccessLogComponent } from './components/list-view/access-log/access-log.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AccessLogListItemComponent } from './components/list-view/access-log/access-log-list-item/access-log-list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AccessLogComponent,
    AccessLogListItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    HttpClientModule

  ],
  providers: [UsersService, RoomService, HotelService, AccessLogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
