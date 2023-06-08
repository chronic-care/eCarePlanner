import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClinicalActvitiesResultsComponent } from './clinical-activities-results.component';

describe('ClinicalActivitiesResultsComponent', () => {
  let component: ClinicalActivitiesResultsComponent;
  let fixture: ComponentFixture<ClinicalActivitiesResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClinicalActivitiesResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClinicalActivitiesResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
