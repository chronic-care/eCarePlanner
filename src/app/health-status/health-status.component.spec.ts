import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HealthStatusComponent } from './health-status.component';
import { ClinicalExamResultsComponent } from '../clinical-exam-results/clinical-exam-results.component';
import { ClinicalImagingResultsComponent } from '../clinical-imaging-results/clinical-imaging-results.component';
import { By } from '@angular/platform-browser';

describe('HealthStatusComponent', () => {
  let component: HealthStatusComponent;
  let fixture: ComponentFixture<HealthStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HealthStatusComponent,
        ClinicalExamResultsComponent,
        ClinicalImagingResultsComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show ClinicalExamResultsComponent when featureToggling.status.exam is true', () => {
    component.featureToggling.status.exam = true;
    fixture.detectChanges();
    const examComponent = fixture.debugElement.query(By.css('app-clinical-exam-results'));
    expect(examComponent).toBeTruthy();
  });

  it('should hide ClinicalExamResultsComponent when featureToggling.status.exam is false', () => {
    component.featureToggling.status.exam = false;
    fixture.detectChanges();
    const examComponent = fixture.debugElement.query(By.css('app-clinical-exam-results'));
    expect(examComponent).toBeFalsy();
  });

  it('should show ClinicalImagingResultsComponent when featureToggling.status.imaging is true', () => {
    component.featureToggling.status.imaging = true;
    fixture.detectChanges();
    const imagingComponent = fixture.debugElement.query(By.css('app-clinical-imaging-results'));
    expect(imagingComponent).toBeTruthy();
  });

  it('should hide ClinicalImagingResultsComponent when featureToggling.status.imaging is false', () => {
    component.featureToggling.status.imaging = false;
    fixture.detectChanges();
    const imagingComponent = fixture.debugElement.query(By.css('app-clinical-imaging-results'));
    expect(imagingComponent).toBeFalsy();
  });

  it('should show ClinicalactivitiesResultsComponent when featureToggling.status.activities is true', () => {
    component.featureToggling.status.activities = true;
    fixture.detectChanges();
    const activitiesComponent = fixture.debugElement.query(By.css('app-clinical-activities-results'));
    expect(activitiesComponent).toBeTruthy();
  });

  it('should hide ClinicalactivitiesResultsComponent when featureToggling.status.activities is false', () => {
    component.featureToggling.status.activities = false;
    fixture.detectChanges();
    const activitiesComponent = fixture.debugElement.query(By.css('app-clinical-activities-results'));
    expect(activitiesComponent).toBeFalsy();
  });

  it('should show ClinicalprocedureResultsComponent when featureToggling.status.procedure is true', () => {
    component.featureToggling.status.procedure = true;
    fixture.detectChanges();
    const procedureComponent = fixture.debugElement.query(By.css('app-clinical-procedure-results'));
    expect(procedureComponent).toBeTruthy();
  });

  it('should hide ClinicalprocedureResultsComponent when featureToggling.status.procedure is false', () => {
    component.featureToggling.status.procedure = false;
    fixture.detectChanges();
    const procedureComponent = fixture.debugElement.query(By.css('app-clinical-procedure-results'));
    expect(procedureComponent).toBeFalsy();
  });

  it('should show ClinicaltherapyResultsComponent when featureToggling.status.therapy is true', () => {
    component.featureToggling.status.therapy = true;
    fixture.detectChanges();
    const therapyComponent = fixture.debugElement.query(By.css('app-clinical-therapy-results'));
    expect(therapyComponent).toBeTruthy();
  });

  it('should hide ClinicaltherapyResultsComponent when featureToggling.status.therapy is false', () => {
    component.featureToggling.status.therapy = false;
    fixture.detectChanges();
    const therapyComponent = fixture.debugElement.query(By.css('app-clinical-therapy-results'));
    expect(therapyComponent).toBeFalsy();
  });
});
