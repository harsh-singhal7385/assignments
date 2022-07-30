import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InrComponent } from './inr.component';

describe('InrComponent', () => {
  let component: InrComponent;
  let fixture: ComponentFixture<InrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
