import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCouponPopupComponent } from './add-coupon-popup.component';

describe('AddCouponPopupComponent', () => {
  let component: AddCouponPopupComponent;
  let fixture: ComponentFixture<AddCouponPopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddCouponPopupComponent]
    });
    fixture = TestBed.createComponent(AddCouponPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
