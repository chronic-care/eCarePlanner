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

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show content when showComponent is true', () => {
    component.showComponent = true;
    fixture.detectChanges();
    const groupHeader = fixture.debugElement.query(By.css('.group-header'));
    expect(groupHeader).toBeTruthy();
  });

  it('should hide content when showComponent is false', () => {
    component.showComponent = false;
    fixture.detectChanges();
    const groupHeader = fixture.debugElement.query(By.css('.group-header'));
    expect(groupHeader).toBeFalsy();
  });
});
