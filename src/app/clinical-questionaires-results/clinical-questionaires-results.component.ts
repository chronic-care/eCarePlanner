import { Component, OnInit } from '@angular/core';
import { Constants } from '../common/constants';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-clinical-questionaires-results',
  templateUrl: './clinical-questionaires-results.component.html',
  styleUrls: ['./clinical-questionaires-results.component.css']
})
export class ClinicalQuestionairesResultsComponent implements OnInit {
  assessments: any[] = [];

  constructor(public dataService: DataService) { }

  getAssessmentsReady(): boolean {
    if (window[Constants.AssessmentsIsLoaded]) {
      this.assessments = this.dataService.assessments;
    }
    return window[Constants.AssessmentsIsLoaded];
  }

  ngOnInit(): void {

  }



  // Dummy methods to replace existing functionality
  getEffectiveValue(value: string): any {
    return value; // Simulate formatting function
  }

  getDisplayValue(value: any): any {
    return value.answer; // Simulate display value function
  }

  // Remove window dependency for testing
  getWotIsLoaded(): boolean {
    return true; // Assume always loaded fortesting.
    }

  getBPisLoaded(): boolean { return true; // Assume always loaded for testing.
    } }
