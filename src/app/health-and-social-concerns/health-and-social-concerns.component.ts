import { Component, OnInit } from '@angular/core';
import { Constants } from '../common/constants';

declare var window: any;

@Component({
  selector: 'app-health-and-social-concerns',
  templateUrl: './health-and-social-concerns.component.html',
  styleUrls: ['./health-and-social-concerns.component.css']
})
export class HealthAndSocialConcernsComponent implements OnInit {
  featureToggling: any = Constants.featureToggling;

  constructor() { }

  ngOnInit(): void {
  }

  getActiveIsReady(): boolean {
    return window[Constants.ActiveDiagnosisIsLoaded];
  }

  getInActiveIsReady(): boolean {
    return window[Constants.InActiveDiagnosisIsLoaded];
  }
  getSocialConcernIsReady(): boolean {
    return window[Constants.SocialConcernsIsLoaded];
  }

}
