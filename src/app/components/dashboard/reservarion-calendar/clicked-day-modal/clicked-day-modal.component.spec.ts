import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClickedDayModalComponent } from './clicked-day-modal.component';

describe('ClickedDayModalComponent', () => {
  let component: ClickedDayModalComponent;
  let fixture: ComponentFixture<ClickedDayModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClickedDayModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClickedDayModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
