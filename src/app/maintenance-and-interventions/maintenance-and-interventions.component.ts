import { Component, OnInit } from '@angular/core';
import { Constants } from '../common/constants';

declare var window: any;

@Component({
  selector: 'app-maintenance-and-interventions',
  templateUrl: './maintenance-and-interventions.component.html',
  styleUrls: ['./maintenance-and-interventions.component.css']
})
export class MaintenanceAndInterventionsComponent implements OnInit {
  featureToggling: any = Constants.featureToggling;

  constructor() { }

  ngOnInit(): void {
  }

  getEducationIsReady(): boolean {
    return window[Constants.EducationIsLoaded];
  }

  getCounselingIsReady(): boolean {
    return window[Constants.CounselingIsLoaded];
  }

  getReferralsIsReady(): boolean {
    return window[Constants.ReferralsIsLoaded];
  }

  getMedicationIsReady(): boolean {
    return window[Constants.MedicationsIsLoaded];
  }

  getServiceRequestIsReady(): boolean {
    return window[Constants.ServiceRequestIsLoaded];
  }
}
