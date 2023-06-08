import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClinicalProcedureResultsComponent } from './clinical-procedure-results.component';

describe('ClinicalProcedureResultsComponent', () => {
  let component: ClinicalProcedureResultsComponent;
  let fixture: ComponentFixture<ClinicalProcedureResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClinicalProcedureResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClinicalProcedureResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
