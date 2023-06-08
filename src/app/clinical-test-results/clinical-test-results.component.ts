import { Component, OnInit } from '@angular/core';
import { Constants } from '../common/constants';
import { Effective, GenericType } from '../generated-data-api';
import { DataService } from '../services/data.service';
import { formatEffectiveDate, getDisplayValue } from '../util/utility-functions';
declare var window: any;
@Component({
  selector: 'app-clinical-test-results',
  templateUrl: './clinical-test-results.component.html',
  styleUrls: ['./clinical-test-results.component.css']
})
export class ClinicalTestResultsComponent implements OnInit {

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

 getDisplayValue(value: GenericType): any {
   return getDisplayValue(value);
  }

getEffectiveValue(value: Effective): any {
    return formatEffectiveDate(value);
   }
}


