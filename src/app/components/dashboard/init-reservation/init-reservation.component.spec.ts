import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InitReservationComponent } from './init-reservation.component';

describe('InitReservationComponent', () => {
  let component: InitReservationComponent;
  let fixture: ComponentFixture<InitReservationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InitReservationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InitReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
