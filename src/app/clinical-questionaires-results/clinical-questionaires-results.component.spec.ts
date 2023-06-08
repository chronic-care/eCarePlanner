import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClinicalActvitiesResultsComponent } from './clinical-questionaires-results.component';

describe('ClinicalQuestionairesResultsComponent', () => {
  let component: ClinicalQuestionairesResultsComponent;
  let fixture: ComponentFixture<ClinicalQuestionairesResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClinicalQuestionairesResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClinicalQuestionairesResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
