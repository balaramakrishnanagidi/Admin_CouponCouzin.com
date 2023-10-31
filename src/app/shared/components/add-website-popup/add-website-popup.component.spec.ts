import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddWebsitePopupComponent } from './add-website-popup.component';

describe('AddWebsitePopupComponent', () => {
  let component: AddWebsitePopupComponent;
  let fixture: ComponentFixture<AddWebsitePopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddWebsitePopupComponent]
    });
    fixture = TestBed.createComponent(AddWebsitePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
