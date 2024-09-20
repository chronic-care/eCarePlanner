import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssessmentSectionComponent } from './assessment-section.component';

describe('AssessmentSectionComponent', () => {
  let component: AssessmentSectionComponent;
  let fixture: ComponentFixture<AssessmentSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssessmentSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssessmentSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
