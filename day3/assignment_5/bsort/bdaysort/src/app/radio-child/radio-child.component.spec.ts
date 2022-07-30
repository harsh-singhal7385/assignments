import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioChildComponent } from './radio-child.component';

describe('RadioChildComponent', () => {
  let component: RadioChildComponent;
  let fixture: ComponentFixture<RadioChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RadioChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RadioChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
