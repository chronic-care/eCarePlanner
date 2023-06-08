import { Injectable } from '@angular/core';
import { MccObservation, MccPatient, ServiceRequestSummary } from '../generated-data-api';
import { SubjectDataService } from './subject-data-service.service';
import { CareplanService } from './careplan.service';
import { GoalsDataService } from './goals-data-service.service';
import { Contact, GoalSummary, MccCarePlan } from '../generated-data-api';
import { SocialConcern } from '../generated-data-api';
import { ConditionLists } from '../generated-data-api';
import { TargetValue } from '../datamodel/targetvalue';

import {
  dummyPatientId,
  dummyCareplanId,
  dummySubject,
  dummyConditions,
  dummyCarePlan,
  emptySocialConcerns,
  emptyContacts,
  emptyCounseling,
  emptyGoalsList, emptyMediciationSummary, emptyEducation, emptyReferrals,
} from '../datamodel/mockData';
import { GoalLists } from '../generated-data-api';
import { MedicationSummary } from '../generated-data-api';
import { finalize, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { ContactsService } from './contacts.service';
import { MedicationService } from './medication.service';
import { concatMap } from 'rxjs/operators';
import { MatTableDataSource } from '@angular/material/table';
import { MessageService } from './message.service';
import {
  emptyVitalSigns,
  VitalSigns,
  VitalSignsTableData
} from '../datamodel/vitalSigns';
import {
  EgfrTableData,
  Egfr,
  emptyEgfr
} from '../datamodel/egfr';
import {
  UacrTableData,
  Uacr,
  emptyUacr
} from '../datamodel/uacr';
import {
  WotTableData,
  Wot,
  emptyWot
} from '../datamodel/weight-over-time';
import {
  formatEgfrResult,
  formatUacrResult,
  getEgrLineChartAnnotationsObject,
  getUacrLineChartAnnotationsObject,
  getLineChartOptionsObject,
  reformatYYYYMMDD,
  formatWotResult,
  getWotLineChartAnnotationsObject
} from '../util/utility-functions';
import { ChartDataSets } from 'chart.js';
import moment from 'moment';
import { CounselingSummary } from '../generated-data-api/models/CounselingSummary';
import { CounselingService } from './counseling.service';
import { EducationService } from './education.service';
import { EducationSummary } from '../generated-data-api/models/EducationSummary';
import { ReferralSummary } from '../generated-data-api/models/ReferralSummary';
import { ReferralService } from './referrals.service';
import { ObservationsService } from './observations.service';
import { Constants } from '../common/constants';
import { SeviceRequestService } from './service-request.service';

declare var window: any;

@Injectable({
  providedIn: 'root'
})

export class DataService {
  featureToggling: any = Constants.featureToggling;

  constructor(private subjectdataservice: SubjectDataService,
    private careplanservice: CareplanService,
    private goalsdataservice: GoalsDataService,
    private contactdataService: ContactsService,
    private medicationdataService: MedicationService,
    private counselingService: CounselingService,
    private educationService: EducationService,
    private servicerequestService:SeviceRequestService,
    private referralService: ReferralService,
    private messageService: MessageService,
    private obsService: ObservationsService
  ) {
    this.activeMedications = emptyMediciationSummary;
    this.education = emptyEducation;
    this.counseling = emptyCounseling;
    this.referrals = emptyReferrals;
    this.contacts = emptyContacts;
    this.goals = emptyGoalsList;
    this.vitalSigns = emptyVitalSigns;
    this.egfr = emptyEgfr;
    this.uacr = emptyUacr;
    this.wot = emptyWot;
  }

  authorizationToken: string;
  mainfhirserver: string;
  secondaryfhirserver: string;
  currentPatientId: string;
  currentCareplanId: string;
  demographic: MccPatient;
  careplan: MccCarePlan;
  careplans: MccCarePlan[];
  socialConcerns: SocialConcern[];
  conditions: ConditionLists;
  targetValues: TargetValue[] = [];
  activeMedications: MedicationSummary[] = [];
  inactiveMedications: MedicationSummary[];
  allGoals: GoalSummary[] = [];
  vitalSigns: VitalSigns = emptyVitalSigns;
  egfr: Egfr = emptyEgfr;
  uacr: Uacr = emptyUacr;
  wot: Wot = emptyWot;

  goals: GoalLists;


  targetValuesDataSource = new MatTableDataSource(this.targetValues);
  vitalSignsDataSource = new MatTableDataSource(this.vitalSigns.tableData);
  egfrDataSource = new MatTableDataSource(this.egfr.tableData);
  uacrDataSource = new MatTableDataSource(this.uacr.tableData);
  wotDataSource = new MatTableDataSource(this.wot.tableData);
  activeMedicationsDataSource = new MatTableDataSource(this.activeMedications);
  consolidatedGoalsDataSource = new MatTableDataSource(this.allGoals);

  servicerequest :  ServiceRequestSummary[];
  education: EducationSummary[];
  counseling: CounselingSummary[];
  referrals: ReferralSummary[];
  labResults: MccObservation[];
// new results based on category
activities: MccObservation[];
exam: MccObservation[];
questionaires: MccObservation[];
procedure: MccObservation[];
history: MccObservation[];
imaging: MccObservation[];
therapy: MccObservation[];




  vitalSignResults: MccObservation[];
  contacts: Contact[];

  private commonHttpOptions;


  updateFHIRConnection(server: string, token: string) {
    this.authorizationToken = token;
    console.log('Token = ' + token);
    this.mainfhirserver = server;
    let headersobj = new HttpHeaders();
    headersobj = headersobj.set('Content-Type', 'application/json').set('mcc-fhir-server', server).set('mcc-token', token);
    this.commonHttpOptions = {
      headers: headersobj
    };
    this.subjectdataservice.httpOptions = this.commonHttpOptions;
    this.careplanservice.httpOptions = this.commonHttpOptions;
    this.goalsdataservice.httpOptions = this.commonHttpOptions;
    this.contactdataService.httpOptions = this.commonHttpOptions;
    this.medicationdataService.httpOptions = this.commonHttpOptions;
    this.counselingService.httpOptions = this.commonHttpOptions;
    this.educationService.httpOptions = this.commonHttpOptions;
    this.referralService.httpOptions = this.commonHttpOptions;
    this.obsService.HTTP_OPTIONS = this.commonHttpOptions;
    this.servicerequestService.HTTP_OPTIONS = this.commonHttpOptions;
  }



  updateFHIRConnection2( secondaryserver: string ) {



    // this.authorizationToken = token;
    // console.log('Token = ' + token);
    // this.mainfhirserver = server;
    this.secondaryfhirserver = secondaryserver;
    let headersobj = new HttpHeaders();
    headersobj = headersobj.set('Content-Type', 'application/json').set('mcc-fhir-server', this.mainfhirserver).set('mcc-token', this.authorizationToken).set('mcc-secondaryfhir-server', this.secondaryfhirserver);
    this.commonHttpOptions = {
      headers: headersobj
    };
    this.subjectdataservice.httpOptions = this.commonHttpOptions;
    this.careplanservice.httpOptions = this.commonHttpOptions;
    this.goalsdataservice.httpOptions = this.commonHttpOptions;
    this.contactdataService.httpOptions = this.commonHttpOptions;
    this.medicationdataService.httpOptions = this.commonHttpOptions;
    this.counselingService.httpOptions = this.commonHttpOptions;
    this.educationService.httpOptions = this.commonHttpOptions;
    this.referralService.httpOptions = this.commonHttpOptions;
    this.obsService.HTTP_OPTIONS = this.commonHttpOptions;
  }



  getCurrentPatient(): Observable<MccPatient> {
    return this.subjectdataservice.getSubject(this.currentPatientId).pipe(
      map(data => data)
    );
  }

  async setCurrentSubject(patientId: string): Promise<boolean> {
    this.log('Setting patient to Id = '.concat(patientId));
    this.currentPatientId = patientId;
    this.targetValues = [];
    this.targetValuesDataSource.data = this.targetValues;
    console.log("DATA-174", this.targetValuesDataSource);
    this.activeMedications = emptyMediciationSummary;
    this.vitalSigns = emptyVitalSigns;
    this.vitalSignsDataSource.data = this.vitalSigns.tableData;
    console.log("DATA-178", this.vitalSignsDataSource);
    this.activeMedicationsDataSource.data = this.activeMedications;
    console.log("DATA-180", this.activeMedicationsDataSource);
    if ((!patientId || patientId.trim().length === 0)) {
      this.currentPatientId = dummyPatientId;
      this.currentCareplanId = dummyCareplanId;
      this.demographic = dummySubject;
      this.conditions = dummyConditions;
      // this.goals  = emptyGoalsList;
    } else {

      this.updateDemographics();
      this.updateConditions();
      this.getCarePlansForSubject();
      this.getPatientGoals();
      this.updateContacts();
      this.updateCounseling();
      this.updateEducation();
      this.updateServiceRequest();
      this.updateReferrals();
      this.getPatientGoalTargets(this.currentPatientId).then(() => {
        window[Constants.TargetsIsLoaded] = true;
      })
      this.getPatientBPInfo(this.currentPatientId);
      this.getPatientEgfrInfo(this.currentPatientId);
      this.getPatientUacrInfo(this.currentPatientId);
      this.getPatientWotInfo(this.currentPatientId);
    }
    // this.activeMedications = mockMedicationSummary;
    this.education = emptyEducation;
    this.counseling = emptyCounseling;
    this.referrals = emptyReferrals;
    this.contacts = emptyContacts;
    // this.targetValue
    return true;

  }

  async setCurrentCarePlan(planId: string): Promise<boolean> {
    this.currentCareplanId = planId;
    if ((!planId || planId.trim().length === 0)) {
      this.socialConcerns = emptySocialConcerns;
      this.careplan = dummyCarePlan;
    } else {
      await this.updateCarePlan();
      await this.updateSocialConcerns();
      await this.updateContacts();
      await this.updateCounseling();
      await this.updateEducation();
      await this.updateServiceRequest();
      await this.updateReferrals();
      await this.updateMedications();
    }

    return true;
  }

  async updateCarePlan(): Promise<boolean> {
    this.careplanservice.getCarePlan(this.currentCareplanId)
      .subscribe(careplan => {
        // Inject
        this.careplan = careplan
      });
    return true;
  }

  async getCarePlansForSubject(): Promise<boolean> {
    this.careplanservice.getCarePlansBySubject(this.currentPatientId)
      .subscribe((cp) => {
        this.careplans = cp;
        if (this.careplans.length > 0) {
          this.careplan = this.careplans[0];
          //this.careplan = this.careplans[this.careplans.length - 1]; // Initialize selected careplan to last in MccCarePlan array
          this.currentCareplanId = this.careplan.fhirid;
          this.updateContacts();
          this.updateCounseling();
          this.updateEducation();
          this.updateServiceRequest();
          this.updateMedications();
          this.updateReferrals();
          this.updateLabResults(this.currentPatientId, this.currentCareplanId);
          this.updateVitalSignResults(this.currentPatientId, this.currentCareplanId);

          this.updateActivities();
          this.updateExam();
          this.updateQuestionaires( );
          this.updateProcedure( );
          this.updateHistory( );
          this.updateImaging( );
          this.updateTherapy( );




        } else {
          this.careplan = dummyCarePlan;        // Initialize selected careplan to dummy careplan if no care plans available for subject
          this.updateContacts();
          this.updateLabResults(this.currentPatientId, "general");
          this.updateVitalSignResults(this.currentPatientId, "general");
        }
        this.updateSocialConcerns();
      });
    return true;
  }

  async updateSocialConcerns(): Promise<boolean> {
    this.subjectdataservice.getSocialConcerns(this.currentPatientId, this.currentCareplanId)
      .subscribe(concerns => { this.socialConcerns = concerns; window[Constants.SocialConcernsIsLoaded] = true; });
    return true;
  }

  async updateContacts(): Promise<boolean> {
    this.contactdataService.getContactsBySubjectAndCareplan(this.currentPatientId, this.currentCareplanId)
      .subscribe(contacts => this.contacts = contacts);
    return true;
  }

  async updateCounseling(): Promise<boolean> {
    this.counselingService.getCounselingSummaries(this.currentPatientId, this.currentCareplanId)
      .subscribe(counseling => { this.counseling = counseling; window[Constants.CounselingIsLoaded] = true; });
    return true;
  }

  async updateReferrals(): Promise<boolean> {
    this.referralService.getReferralSummaries(this.currentPatientId, this.currentCareplanId)
      .subscribe(referrals => { this.referrals = referrals; window[Constants.ReferralsIsLoaded] = true; });
    return true;
  }

  async updateLabResults(patientId: string, longTermCondition: string): Promise<boolean> {
    this.obsService.getLabResults(patientId, longTermCondition).then((res: MccObservation[]) => {
      this.labResults = res;
    })
    return true;
  }




  async updateActivities(): Promise<boolean> {
    this.obsService.getObservationsByCategory(this.currentPatientId, 'activity')
      .subscribe(activities => this.activities = activities);
    return true;
  }

  async updateExam(): Promise<boolean> {
    this.obsService.getObservationsByCategory(this.currentPatientId, 'exam')
      .subscribe(exam => this.exam = exam);
    return true;
  }

  async updateQuestionaires(): Promise<boolean> {
    this.obsService.getObservationsByCategory(this.currentPatientId, 'survey')
      .subscribe(questionaires => this.questionaires = questionaires);
    return true;
  }

  async updateProcedure(): Promise<boolean> {
    this.obsService.getObservationsByCategory(this.currentPatientId, 'procedure')
      .subscribe(procedure => this.procedure = procedure);
    return true;
  }

  async updateHistory(): Promise<boolean> {
    this.obsService.getObservationsByCategory(this.currentPatientId, 'social-history')
      .subscribe(history => this.history = history);
    return true;
  }

  async updateImaging(): Promise<boolean> {
    this.obsService.getObservationsByCategory(this.currentPatientId, 'imaging')
      .subscribe(imaging => this.imaging = imaging);
    return true;
  }

  async updateTherapy(): Promise<boolean> {
    this.obsService.getObservationsByCategory(this.currentPatientId, 'therapy')
      .subscribe(therapy => this.therapy = therapy);
    return true;
  }


  async updateVitalSignResults(patientId: string, longTermCondition: string): Promise<boolean> {
    this.obsService.getVitalSignResults(patientId, longTermCondition).then((res: MccObservation[]) => {
      this.vitalSignResults = res;
    })
    return true;
  }


  async updateEducation(): Promise<boolean> {
    this.educationService.getEducationSummaries(this.currentPatientId, this.currentCareplanId)
      .subscribe(education => { this.education = education; window[Constants.EducationIsLoaded] = true; });
    return true;
  }

  async updateServiceRequest(): Promise<boolean> {
    this.servicerequestService.getServiceRequestSummaries(this.currentPatientId, this.currentCareplanId)
      .subscribe(servicerequest => { this.servicerequest = servicerequest; window[Constants.ServiceRequestIsLoaded] = true; });
    return true;
  }

  async updateMedications(): Promise<boolean> {
    this.medicationdataService.getMedicationSummaryBySubjectAndCareplan(this.currentPatientId, this.currentCareplanId)
      .subscribe(medications => {
        this.activeMedications = medications.activeMedications;
        this.activeMedicationsDataSource.data = this.activeMedications;
        this.inactiveMedications = medications.inactiveMedications;
        window[Constants.MedicationsIsLoaded] = true;
      });
    return true;
  }

  async updateDemographics(): Promise<boolean> {
    this.subjectdataservice.getSubject(this.currentPatientId)
      .subscribe(demograhic => this.demographic = demograhic);
    return true;
  }

  async updateConditions(): Promise<boolean> {
    this.subjectdataservice.getConditions(this.currentPatientId)
      .subscribe(condition => { this.conditions = condition; window[Constants.ActiveDiagnosisIsLoaded] = true; window[Constants.InActiveDiagnosisIsLoaded] = true; });
    return true;
  }

  async getPatientGoals(): Promise<boolean> {
    this.goalsdataservice.getGoals(this.currentPatientId)
      .subscribe(goals => {
        this.goals = goals;
        this.consolidatedGoalsDataSource.data = this.goals.allGoals;
        window[Constants.GoalsIsLoaded] = true;
      });
    return true;
  }

  async getPatientGoalTargets(patientId): Promise<boolean> {
    this.goalsdataservice.getGoals(patientId)
      .pipe(
        concatMap(goals => this.goalsdataservice.getPatientGoalTargets(patientId, goals.activeTargets)),
      ).subscribe(res => {
        this.targetValues.push(res);
        this.targetValuesDataSource.data = this.targetValues;
      });
    return true;
  }

  async getPatientBPInfo(patientId): Promise<boolean> {
    const systolicChartData: ChartDataSets = { data: [], label: 'Systolic', fill: false };
    const diastolicChartData: ChartDataSets = { data: [], label: 'Diastolic', fill: false };
    // const xAxisLabels: string[] = [];
    const xAxisLabels: string[] = [];
    this.vitalSigns = emptyVitalSigns;
    this.vitalSigns.tableData = [];
    this.vitalSigns.chartData = [];

    this.goalsdataservice.getPatientVitalSigns(patientId)
      .pipe(
        finalize(() => {
          this.vitalSigns.chartData.push(systolicChartData);
          this.vitalSigns.chartData.push(diastolicChartData);
          this.vitalSignsDataSource.data = this.vitalSigns.tableData.sort((a, b) => { return moment(a.date).unix() > moment(b.date).unix() ? -1 : 1; });
          const vsLowDateRow: VitalSignsTableData = (this.vitalSigns.tableData.reduce((low, vs) =>
            reformatYYYYMMDD(low.date) < reformatYYYYMMDD(vs.date) ? low : vs));
          const vsHighDateRow: VitalSignsTableData = (this.vitalSigns.tableData.reduce((high, vs) =>
            reformatYYYYMMDD(high.date) >= reformatYYYYMMDD(vs.date) ? high : vs));
          this.vitalSigns.mostRecentSystolic.date = vsHighDateRow.date;
          this.vitalSigns.mostRecentSystolic.value = vsHighDateRow.systolic;
          this.vitalSigns.mostRecentDiastolic.date = vsHighDateRow.date;
          this.vitalSigns.mostRecentDiastolic.value = vsHighDateRow.diastolic;
          const minDate = moment(vsLowDateRow.date);
          this.vitalSigns.suggestedMin = minDate;
          const maxDate = moment(vsHighDateRow.date);
          this.vitalSigns.suggestedMax = minDate;
          this.vitalSigns.lineChartOptions = getLineChartOptionsObject(50, 180, this.vitalSigns.suggestedMin, this.vitalSigns.suggestedMax);
          this.vitalSigns.xAxisLabels = [];
          let yr = '';
          let prevYr = '';
          this.vitalSigns.tableData.map(vs => {
            if (moment(vs.date.toString()).format('YYYY') !== prevYr) {
              yr = moment(vs.date.toString()).format('YYYY');
              prevYr = yr;
            } else {
              yr = '';
            }
            // @ts-ignore
            xAxisLabels.push([moment(vs.date.toString()).format('MMM'),
            moment(vs.date.toString()).format('DD'),
              yr]
            );
          });
          this.vitalSigns.xAxisLabels = xAxisLabels;
          window[Constants.BPisLoaded] = true;
        })
      )
      .subscribe(res => {
        this.vitalSigns.tableData.push(res);
        const systolicVitalSign = {
          x: new Date(res.date),
          y: res.systolic
        };
        const diastolicVitalSign = {
          x: new Date(res.date),
          y: res.diastolic
        };
        // @ts-ignore
        systolicChartData.data.push(systolicVitalSign);
        // @ts-ignore
        diastolicChartData.data.push(diastolicVitalSign);
      });

    return true;
  }

  async getPatientEgfrInfo(patientId): Promise<boolean> {
    this.egfr = emptyEgfr;
    this.egfr.tableData = [];
    this.egfr.chartData = [];
    await this.goalsdataservice.getPatientEgfr(patientId)
      .pipe(finalize(() => {
        this.filterDataSet(0);
      }))
      .subscribe(res => {
        const egfr = {
          x: new Date(res.date),
          y: res.egfr
        };
        if (!this.aggregatedChartData.find(x => x.label === res.test)) {
          if (res.isNumber) { // if the value is not a number we do not want to chart it
            this.aggregatedChartData.push({
              data: [egfr],
              label: res.test,
              fill: false
            })
          }
          this.aggregatedTableData.push({
            data: [res],
            label: res.test
          })
        }
        else {
          // @ts-ignore
          if (res.isNumber) this.aggregatedChartData.find(x => x.label === res.test).data.push(egfr);
          this.aggregatedTableData.find(x => x.label === res.test).data.push(res);
        }
      });

    return true;
  }

  aggregatedChartData: ChartDataSets[] = [];
  aggregatedTableData: any[] = [];
  selectedIndex: number;

  filterDataSet(index: number): void {
    if (!this.aggregatedChartData || this.aggregatedChartData.length === 0) { window[Constants.EGFRisLoaded] = true; return; }

    this.selectedIndex = index;
    const xAxisLabels: string[] = [];

    this.egfr.chartData = [];
    this.egfr.chartData.push(this.aggregatedChartData[index]);

    this.egfr.tableData = [];
    this.egfr.tableData = (this.aggregatedTableData[index].data);

    this.egfrDataSource.data = this.egfr.tableData.sort((a, b) => { return moment(a.date).unix() > moment(b.date).unix() ? -1 : 1; });;

    const vsLowDateRow: EgfrTableData = (this.egfr.tableData.reduce((low, e) =>
      reformatYYYYMMDD(low.date) < reformatYYYYMMDD(e.date) ? low : e));
    const vsHighDateRow: EgfrTableData = (this.egfr.tableData.reduce((high, e) =>
      reformatYYYYMMDD(high.date) >= reformatYYYYMMDD(e.date) ? high : e));
    this.egfr.mostRecentEgfr.date = vsHighDateRow.date;
    this.egfr.mostRecentEgfr.value = vsHighDateRow.egfr;
    this.egfr.mostRecentEgfr.unit = vsHighDateRow.unit;
    this.egfr.mostRecentEgfr.test = vsHighDateRow.test;
    this.egfr.mostRecentEgfr.result = formatEgfrResult(vsHighDateRow.egfr, vsHighDateRow.unit);
    const minDate = moment(vsLowDateRow.date);
    this.egfr.suggestedMin = minDate.toDate();
    const maxDate = moment(vsHighDateRow.date);
    this.egfr.suggestedMax = maxDate.toDate();
    const lineChartOptions = getLineChartOptionsObject(10, 70, this.egfr.suggestedMin, this.egfr.suggestedMax);
    const lineChartAnnotations = getEgrLineChartAnnotationsObject();
    this.egfr.lineChartOptions = { ...lineChartOptions, annotation: lineChartAnnotations };
    this.egfr.xAxisLabels = [];
    let yr = '';
    let prevYr = '';
    this.egfr.tableData.map(vs => {
      if (moment(vs.date.toString()).format('YYYY') !== prevYr) {
        yr = moment(vs.date.toString()).format('YYYY');
        prevYr = yr;
      } else {
        yr = '';
      }
      // @ts-ignore
      xAxisLabels.push([moment(vs.date.toString()).format('MMM'),
      moment(vs.date.toString()).format('DD'),
        yr]
      );
    });
    this.egfr.xAxisLabels = xAxisLabels;
    window[Constants.EGFRisLoaded] = true;
  }

  emptyChart(): void {
    this.egfr.chartData = [];
    this.egfr.tableData = [];
    // @ts-ignore
    this.egfr.lineChartOptions = {};
  }

  async getPatientUacrInfo(patientId): Promise<boolean> {
    const uacrChartData: ChartDataSets = { data: [], label: 'Uacr', fill: false };
    const xAxisLabels: string[] = [];
    this.uacr = emptyUacr;
    this.uacr.tableData = [];
    this.uacr.chartData = [];
    this.goalsdataservice.getPatientUacr(patientId)
      .pipe(
        finalize(() => {
          this.uacr.chartData.push(uacrChartData);
          this.uacrDataSource.data = this.uacr.tableData.sort((a, b) => { return moment(a.date).unix() > moment(b.date).unix() ? -1 : 1; });
          const vsLowDateRow: UacrTableData = (this.uacr.tableData.reduce((low, e) =>
            reformatYYYYMMDD(low.date) < reformatYYYYMMDD(e.date) ? low : e));
          const vsHighDateRow: UacrTableData = (this.uacr.tableData.reduce((high, e) =>
            reformatYYYYMMDD(high.date) >= reformatYYYYMMDD(e.date) ? high : e));
          this.uacr.mostRecentUacr.date = vsHighDateRow.date;
          this.uacr.mostRecentUacr.value = vsHighDateRow.uacr;
          this.uacr.mostRecentUacr.unit = vsHighDateRow.unit;
          this.uacr.mostRecentUacr.test = vsHighDateRow.test;
          this.uacr.mostRecentUacr.result = formatUacrResult(vsHighDateRow.uacr, vsHighDateRow.unit);
          const minDate = moment(vsLowDateRow.date, moment.defaultFormat);
          this.uacr.suggestedMin = minDate;
          const maxDate = moment(vsHighDateRow.date.toString());
          this.uacr.suggestedMax = maxDate;
          const lineChartOptions = getLineChartOptionsObject(0, 400, this.uacr.suggestedMin, this.uacr.suggestedMax);
          const lineChartAnnotations = getUacrLineChartAnnotationsObject();
          this.uacr.lineChartOptions = { ...lineChartOptions, annotation: lineChartAnnotations };
          this.uacr.xAxisLabels = [];
          let yr = '';
          let prevYr = '';
          this.uacr.tableData.map(vs => {
            if (moment(vs.date.toString()).format('YYYY') !== prevYr) {
              yr = moment(vs.date.toString()).format('YYYY');
              prevYr = yr;
            } else {
              yr = '';
            }
            // @ts-ignore
            xAxisLabels.push([moment(vs.date.toString()).format('MMM'),
            moment(vs.date.toString()).format('DD'),
              yr]
            );
          });
          this.uacr.xAxisLabels = xAxisLabels;
          window[Constants.UACRisLoaded] = true;
        })
      )
      .subscribe(res => {
        this.uacr.tableData.push(res);
        const uacr = {
          x: new Date(res.date),
          y: res.uacr
        };
        // @ts-ignore
        uacrChartData.data.push(uacr);
      });

    return true;
  }

  async getPatientWotInfo(patientId): Promise<boolean> {
    const wotChartData: ChartDataSets = { data: [], label: 'Wot', fill: false };
    const xAxisLabels: string[] = [];
    this.wot = emptyWot;
    this.wot.tableData = [];
    this.wot.chartData = [];
    this.goalsdataservice.getPatientWot(patientId)
      .pipe(
        finalize(() => {
          this.wot.chartData.push(wotChartData);
          this.wotDataSource.data = this.wot.tableData.sort((a, b) => { return moment(a.date).unix() > moment(b.date).unix() ? -1 : 1; });
          window[Constants.WotIsLoaded] = true;
          const vsHighDateRow: WotTableData = (this.wot.tableData.reduce((high, e) =>
            reformatYYYYMMDD(high.date) >= reformatYYYYMMDD(e.date) ? high : e));
          this.wot.mostRecentWot.date = vsHighDateRow.date;
          this.wot.mostRecentWot.value = vsHighDateRow.value;
          this.wot.mostRecentWot.unit = vsHighDateRow.unit;
          this.wot.mostRecentWot.test = vsHighDateRow.test;
          this.wot.mostRecentWot.result = formatWotResult(vsHighDateRow.value, vsHighDateRow.unit);
          const lineChartOptions = getLineChartOptionsObject();
          this.wot.lineChartOptions = { ...lineChartOptions, annotation: {} }; //lineChartAnnotations };
          this.wot.xAxisLabels = [];
          let yr = '';
          let prevYr = '';
          this.wot.tableData.map(vs => {
            if (moment(vs.date.toString()).format('YYYY') !== prevYr) {
              yr = moment(vs.date.toString()).format('YYYY');
              prevYr = yr;
            } else {
              yr = '';
            }
            // @ts-ignore
            xAxisLabels.push([moment(vs.date.toString()).format('MMM'),
            moment(vs.date.toString()).format('DD'),
              yr]
            );
          });
          this.wot.xAxisLabels = xAxisLabels;
        })
      )
      .subscribe(res => {
        this.wot.tableData.push(res);
        const wot = {
          x: new Date(res.date),
          y: res.value
        };
        // @ts-ignore
        wotChartData.data.push(wot);
      });

    return true;
  }
  /** Log a message with the MessageService */
  private log(message: string) {
    this.messageService.add(`subject-data-service: ${message}`);
  }

}



