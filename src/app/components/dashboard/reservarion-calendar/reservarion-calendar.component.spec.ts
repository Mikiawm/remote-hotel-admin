import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservarionCalendarComponent } from './reservarion-calendar.component';

describe('ReservarionCalendarComponent', () => {
  let component: ReservarionCalendarComponent;
  let fixture: ComponentFixture<ReservarionCalendarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReservarionCalendarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservarionCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
