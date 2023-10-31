import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPosterPopupComponent } from './add-poster-popup.component';

describe('AddPosterPopupComponent', () => {
  let component: AddPosterPopupComponent;
  let fixture: ComponentFixture<AddPosterPopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddPosterPopupComponent]
    });
    fixture = TestBed.createComponent(AddPosterPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
