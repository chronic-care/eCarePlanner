import { Component, Input, OnInit } from '@angular/core';
import { Observation } from 'fhir/r4';
import { Constants } from '../common/constants';
import { DataService } from '../services/data.service';
import { formatEffectiveDateNew, getDisplayValueNew } from '../util/utility-functions';
declare var window: any;

@Component({
  selector: 'app-clinical-exam-results',
  templateUrl: './clinical-exam-results.component.html',
  styleUrls: ['./clinical-exam-results.component.css']
})
export class ClinicalExamResultsComponent implements OnInit {

  @Input() showComponent: boolean = false;

  constructor(public dataservice: DataService) {}

  ngOnInit(): void {}

  getWotIsLoaded(): boolean {
    return window[Constants.WotIsLoaded];
  }

  getBPisLoaded(): boolean {
    return window[Constants.BPisLoaded];
  }

  getDisplayValue(value: Observation): any {
    return getDisplayValueNew(value);
  }

  getEffectiveValue(value: string): any {
    return formatEffectiveDateNew(value);
  }
}
