import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import {
  MatToolbarModule, MatButtonModule, MatSidenavModule,
  MatIconModule, MatListModule, MatGridListModule,
  MatCardModule, MatMenuModule, MatFormFieldModule, MatInputModule, MatDialogModule, MAT_DIALOG_DATA, MatNativeDateModule
} from '@angular/material';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UsersService } from './services/users.service';
import { RoomService } from './services/room.service';
import { HotelService } from './services/hotel.service';
import { AccessLogComponent } from './components/list-view/access-log/access-log.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LoginComponent } from './components/login/login.component';
import { AccessLogsComponent } from './components/dashboard/access-logs/access-logs.component';
import { AccessLogService } from './services/access-log.service';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthGuard } from './guards/auth.guard';
import { CreatorComponent } from './components/creator/creator.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSelectModule } from '@angular/material/select';
import { MatDividerModule } from '@angular/material/divider';
import { AddRoomFormComponent } from './components/creator/add-room-form/add-room-form.component';
import { AppComponent } from './app.component';
import { HotelSelectorComponent } from './components/hotel-selector/hotel-selector.component';
import { ReservationComponent } from './components/reservation/reservation.component';
import { ReservationService } from './services/reservation.service';
import { RoomsComponent } from './components/rooms/rooms.component';
import { MatTableModule } from '@angular/material/table';
import { AddEditRoomComponent } from './components/rooms/add-edit-room/add-edit-room.component';
import { CustomersComponent } from './components/customers/customers.component';
import { DataRangePickerComponent } from './components/dashboard/data-range-picker/data-range-picker.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { FreeRoomsComponent } from './components/dashboard/free-rooms/free-rooms.component';
import { CreateReservationComponent } from './components/dashboard/create-reservation/create-reservation.component';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    RoomsComponent,
    AccessLogsComponent,
    CustomersComponent,
    CreatorComponent,
    AddRoomFormComponent,
    HotelSelectorComponent,
    ReservationComponent,
    AddEditRoomComponent,
    DataRangePickerComponent,
    FreeRoomsComponent,
    CreateReservationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    LayoutModule,
    MatTableModule,
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
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  entryComponents: [AddEditRoomComponent, CreateReservationComponent],
  providers: [UsersService, { provide: MAT_DIALOG_DATA, useValue: {} },
    ReservationService, RoomService, MatDatepickerModule, HotelService, AccessLogService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
