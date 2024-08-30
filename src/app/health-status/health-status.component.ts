import { Component, OnInit } from '@angular/core';
import { Constants } from '../common/constants';

@Component({
  selector: 'app-health-status',
  templateUrl: './health-status.component.html',
  styleUrls: ['./health-status.component.css']
})
export class HealthStatusComponent implements OnInit {
  featureToggling: any = Constants.featureToggling;

  constructor() { }

  ngOnInit(): void {
    if (typeof this.featureToggling.status.exam === 'undefined') {
      this.featureToggling.status.exam = true;
    }

    if (typeof this.featureToggling.status.imaging === 'undefined') {
      this.featureToggling.status.imaging = true;
    }

    if (typeof this.featureToggling.status.activities === 'undefined') {
      this.featureToggling.status.activities = true;
    }

    if (typeof this.featureToggling.status.procedure === 'undefined') {
      this.featureToggling.status.procedure = true;
    }

    if (typeof this.featureToggling.status.therapy === 'undefined') {
      this.featureToggling.status.therapy = true;
    }
  }
}
