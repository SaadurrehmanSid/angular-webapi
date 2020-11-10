import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseEidtComponent } from './course-eidt.component';

describe('CourseEidtComponent', () => {
  let component: CourseEidtComponent;
  let fixture: ComponentFixture<CourseEidtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseEidtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseEidtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
