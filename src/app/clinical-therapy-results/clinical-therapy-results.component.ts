import { Component, OnInit } from '@angular/core';
import { Constants } from '../common/constants';
import { Effective } from '../generated-data-api';
import { GenericType } from '../generated-data-api/models/GenericType';
import { DataService } from '../services/data.service';
import { formatEffectiveDate, getDisplayValue } from '../util/utility-functions';
declare var window: any;
@Component({
  selector: 'app-clinical-therapy-results',
  templateUrl: './clinical-therapy-results.component.html',
  styleUrls: ['./clinical-therapy-results.component.css']
})
export class ClinicalTherapyResultsComponent implements OnInit {

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


