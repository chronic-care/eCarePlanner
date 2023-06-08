import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { ServiceWorkerModule } from '@angular/service-worker';
import { ChartsModule } from 'ng2-charts';

import { AppMaterialModuleModule } from './app-material-module/app-material-module.module';

import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { DemographicsPanelComponent } from './demographics-panel/demographics-panel.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HealthAndSocialConcernsComponent } from './health-and-social-concerns/health-and-social-concerns.component';
import { GoalsComponent } from './goals/goals.component';
// import { CourseDialogComponent} from './goals/course-dialog.component';
import { ActiveDiagnosisPanelComponent } from './active-diagnosis-panel/active-diagnosis-panel.component';
import { InactiveDiagnosisPanelComponent } from './inactive-diagnosis-panel/inactive-diagnosis-panel.component';
import { DiagnosisPanelComponent } from './diagnosis-panel/diagnosis-panel.component';
import { SocialConcernPanelComponent } from './social-concern-panel/social-concern-panel.component';
import { ClinicalGoalsComponent } from './clinical-goals/clinical-goals.component';
import { PatientChoicesComponent } from './patient-choices/patient-choices.component';
import { TargetValuesComponent } from './target-values/target-values.component';
import { PatientGoalsComponent } from './patient-goals/patient-goals.component';
import { MaintenanceAndInterventionsComponent } from './maintenance-and-interventions/maintenance-and-interventions.component';
import { MedicationPanelComponent } from './medication-panel/medication-panel.component';
import { EducationPanelComponent } from './education-panel/education-panel.component';
import { ActiveOrdersPanelComponent } from './active-orders-panel/active-orders-panel.component';
import { CounselingPanelComponent } from './counseling-panel/counseling-panel.component';
import { ReferralPanelComponent } from './referral-panel/referral-panel.component';
import { HealthStatusComponent } from './health-status/health-status.component';
import { CareTeamComponent } from './care-team/care-team.component';
import { ClinicalTestResultsComponent } from './clinical-test-results/clinical-test-results.component';
import { ClinicalExamResultsComponent } from './clinical-exam-results/clinical-exam-results.component';
import { ClinicalProcedureResultsComponent } from './clinical-procedure-results/clinical-procedure-results.component';
import { ClinicalImagingResultsComponent } from './clinical-imaging-results/clinical-imaging-results.component';
import { ClinicalActivitiesResultsComponent } from './clinical-activities-results/clinical-activities-results.component';
import { ClinicalQuestionairesResultsComponent } from './clinical-questionaires-results/clinical-questionaires-results.component';
import { ClinicalHistoryResultsComponent } from './clinical-history-results/clinical-history-results.component';
import { ClinicalTherapyResultsComponent } from './clinical-therapy-results/clinical-therapy-results.component';
import { LabTestResultComponent } from './lab-test-result/lab-test-result.component';
import { BloodPressureComponent } from './blood-pressure/blood-pressure.component';
import { EGFRComponent } from './e-gfr/e-gfr.component';
import { WeightOverTimeComponent } from './weight-over-time/weight-over-time.component';
import { UACRComponent } from './uacr/uacr.component';
import { BPGraphComponent } from './bpgraph/bpgraph.component';
import { DiagnosisDialogComponent } from './diagnosis-dialog/diagnosis-dialog.component';
import { AppRoutingModule } from './app-routing.module';
import { ConsolidatedGoalsComponent } from './consolidated-goals/consolidated-goals.component';
import { Testgraph1Component } from './testgraph1/testgraph1.component';
import { ObservationsService } from './services/observations.service';
import { NullCheckPipe } from './pipes/null-check.pipe';
import { MatSortModule } from '@angular/material/sort';
import { RetryInterceptor } from './interceptors/404.retry.interceptor';
import { CourseDialogComponent } from './goals/course-dialog.component';
import { MedicationDialogComponent } from './medication-dialog/medication-dialog.component';
import { GoalDialogComponent } from './goals-dialog/goal-dialog.component';


const routes: Routes = []; // sets up routes constant where you define your routes

@NgModule({
  declarations: [
    GoalDialogComponent,
    MedicationDialogComponent,
    CourseDialogComponent,
    AppComponent,
    DemographicsPanelComponent,
    HealthAndSocialConcernsComponent,
    GoalsComponent,
    ActiveDiagnosisPanelComponent,
    InactiveDiagnosisPanelComponent,
    DiagnosisPanelComponent,
    SocialConcernPanelComponent,
    ClinicalGoalsComponent,
    PatientChoicesComponent,
    TargetValuesComponent,
    PatientGoalsComponent,
    MaintenanceAndInterventionsComponent,
    MedicationPanelComponent,
    EducationPanelComponent,
    CounselingPanelComponent,
    ReferralPanelComponent,
    HealthStatusComponent,
    CareTeamComponent,
    ClinicalTestResultsComponent,
    ClinicalImagingResultsComponent,
    ClinicalExamResultsComponent,
    ClinicalProcedureResultsComponent,
    ClinicalActivitiesResultsComponent,
    ClinicalQuestionairesResultsComponent,
    ClinicalTherapyResultsComponent,
    ClinicalHistoryResultsComponent,
    LabTestResultComponent,
    BloodPressureComponent,
    EGFRComponent,
    WeightOverTimeComponent,
    UACRComponent,
    BPGraphComponent,
    DiagnosisDialogComponent,
    ConsolidatedGoalsComponent,
    Testgraph1Component,
    NullCheckPipe,
    ActiveOrdersPanelComponent
  ],
  imports: [
    MatSortModule,
    FlexLayoutModule,
    ChartsModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppMaterialModuleModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes, { enableTracing: false }),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    AppRoutingModule,
    ReactiveFormsModule
  ],
  exports: [RouterModule,ReactiveFormsModule],
  providers: [ObservationsService, { provide: HTTP_INTERCEPTORS, useClass: RetryInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
