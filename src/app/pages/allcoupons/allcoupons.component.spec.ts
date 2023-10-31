import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllcouponsComponent } from './allcoupons.component';

describe('AllcouponsComponent', () => {
  let component: AllcouponsComponent;
  let fixture: ComponentFixture<AllcouponsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllcouponsComponent]
    });
    fixture = TestBed.createComponent(AllcouponsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
