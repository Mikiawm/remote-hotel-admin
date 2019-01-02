import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import {
  MatToolbarModule, MatButtonModule, MatSidenavModule,
  MatIconModule, MatListModule, MatGridListModule,
  MatCardModule, MatMenuModule, MatFormFieldModule, MatInputModule
} from '@angular/material';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UsersService } from './services/users.service';
import { RoomService } from './services/room.service';
import { HotelService } from './services/hotel.service';
import { AccessLogComponent } from './components/list-view/access-log/access-log.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LoginComponent } from './components/login/login.component';
import { ProfilComponent } from './components/profil/profil.component';
import { UsersComponent } from './components/users/users.component';
import { RoomsComponent } from './components/dashboard/rooms/rooms.component';
import { HotelsComponent } from './components/dashboard/hotels/hotels.component';
import { AccessLogsComponent } from './components/dashboard/access-logs/access-logs.component';
import { CustomersComponent } from './components/dashboard/customers/customers.component';
import { AccessLogService } from './services/access-log.service';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthGuard } from './guards/auth.guard';
import { CreatorComponent } from './components/creator/creator.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatSelectModule} from '@angular/material/select';
import {MatDividerModule} from '@angular/material/divider';
import { AddRoomFormComponent } from './components/creator/add-room-form/add-room-form.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    ProfilComponent,
    UsersComponent,
    RoomsComponent,
    HotelsComponent,
    AccessLogsComponent,
    CustomersComponent,
    CreatorComponent,
    AddRoomFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
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
    HttpClientModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    MatExpansionModule,
    MatDividerModule,
    MatSelectModule
  ],
  providers: [UsersService, RoomService, HotelService, AccessLogService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
