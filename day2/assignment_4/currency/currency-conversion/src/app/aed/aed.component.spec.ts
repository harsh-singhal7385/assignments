import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AedComponent } from './aed.component';

describe('AedComponent', () => {
  let component: AedComponent;
  let fixture: ComponentFixture<AedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
