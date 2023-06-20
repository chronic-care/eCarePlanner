import { Component, OnInit } from '@angular/core';
import { Observation } from 'fhir/r4';
import { Constants } from '../common/constants';
import { DataService } from '../services/data.service';
import { formatEffectiveDateNew, getDisplayValueNew } from '../util/utility-functions';
declare var window: any;
@Component({
  selector: 'app-clinical-questionaires-results',
  templateUrl: './clinical-questionaires-results.component.html',
  styleUrls: ['./clinical-questionaires-results.component.css']
})
export class ClinicalQuestionairesResultsComponent implements OnInit {

  constructor(public dataservice: DataService) {
  }

  ngOnInit(): void {
  }


  getWotIsLoaded(): boolean {
    return window[Constants.WotIsLoaded];
  }

  getBPisLoaded(): boolean {
    return window[Constants.BPisLoaded];
  }
  getDisplayValue(value: Observation): any {
    const newDisplay = getDisplayValueNew(value);
    return newDisplay;
  }

  getEffectiveValue(value: string): any {
    return formatEffectiveDateNew(value);
  }

}
