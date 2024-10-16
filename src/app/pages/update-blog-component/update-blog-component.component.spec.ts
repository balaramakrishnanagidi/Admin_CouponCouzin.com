import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateBlogComponentComponent } from './update-blog-component.component';

describe('UpdateBlogComponentComponent', () => {
  let component: UpdateBlogComponentComponent;
  let fixture: ComponentFixture<UpdateBlogComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateBlogComponentComponent]
    });
    fixture = TestBed.createComponent(UpdateBlogComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
