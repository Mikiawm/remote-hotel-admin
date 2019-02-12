import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptReservationDialogComponent } from './accept-reservation-dialog.component';

describe('AcceptReservationDialogComponent', () => {
  let component: AcceptReservationDialogComponent;
  let fixture: ComponentFixture<AcceptReservationDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcceptReservationDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcceptReservationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
