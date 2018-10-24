import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckTickComponent } from './check-tick.component';

describe('CheckTickComponent', () => {
  let component: CheckTickComponent;
  let fixture: ComponentFixture<CheckTickComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckTickComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckTickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
