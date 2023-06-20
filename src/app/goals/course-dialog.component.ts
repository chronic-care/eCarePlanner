import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";

import { FormBuilder, Validators, FormGroup, FormControl } from "@angular/forms";
import moment from 'moment';
import { GoalSummary } from '../generated-data-api/models/GoalSummary';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GoalTarget } from '../generated-data-api/models/GoalTarget';
import { MccCodeableConcept, MccCoding } from '../generated-data-api';
import { DataService } from '../services/data.service';


@Component({
  selector: 'course-dialog',
  templateUrl: './course-dialog.component.html',
  styleUrls: ['./course-dialog.component.css']
})
export class CourseDialogComponent implements OnInit {

  constructor(public dataservice: DataService,private http: HttpClient) { }



  form: FormGroup;
  description: string;
  errorMessage: any;
  postId: any;


  ngOnInit() {
    this.form = new FormGroup(
      {
        priority: new FormControl(),
        expressedByType: new FormControl(),
        description: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(60)]),
        achievementStatus: new FormControl(),
        achievementText: new FormControl(),
        lifecycleStatus: new FormControl('', [Validators.required]),
        startDateText: new FormControl(),
        targetDateText: new FormControl(),
        addresses: new FormControl(),
        expressedBy: new FormControl(),
        acceptance: new FormControl(),
        targets: new FormControl()

      });
  }


  save() {
    console.trace('priority ' + this.form.controls['priority'].value);
    console.trace('expressedByType ' + this.form.controls['expressedByType'].value);
    console.trace('description ' + this.form.controls['description'].value);
    console.trace('achievementStatus ' + this.form.controls['achievementStatus'].value);
    console.trace('achievementText ' + this.form.controls['achievementText'].value);
    if (!this.form.controls['startDateText'].dirty) {
      console.trace('startDateText ' + this.form.controls['startDateText'].value);
    }

    if (!this.form.controls['targetDateText'].pristine) {
    console.trace('targetDateText ' + this.form.controls['targetDateText'].value);
    }
    console.trace('addresses ' + this.form.controls['addresses'].value);
    console.trace('expressedBy ' + this.form.controls['expressedBy'].value);
    console.trace('acceptance ' + this.form.controls['acceptance'].value);
    console.trace('targets ' + this.form.controls['targets'].value);
    console.trace('lifecycleStatus ' + this.form.controls['lifecycleStatus'].value);


    const url = `${environment.mccapiUrl}` + '/creategoal?patientId=';




    const gtmeasure : MccCodeableConcept = {
      text:this.form.controls['targets'].value
    }

    const gt : GoalTarget = {
      measure:gtmeasure,
      dueAsText:this.form.controls['targetDateText'].value
    }
    var gts = [gt];


    const acs : MccCoding = {
      code:this.form.controls['achievementStatus'].value
    };

    var acss = [acs];
    const achievementStatus : MccCodeableConcept = {
      text:this.form.controls['achievementStatus'].value,
      coding:acss
    }

    const ada: GoalSummary = {
      priority: this.form.controls['priority'].value,
      lifecycleStatus: this.form.controls['lifecycleStatus'].value,
      description: this.form.controls['description'].value,
      achievementStatus : achievementStatus,
      startDateText:  this.form.controls['startDateText'].dirty ?  moment(this.form.controls['startDateText'].value).format("YYYY-MM-DD") : null,
      targetDateText: this.form.controls['targetDateText'].dirty ? moment(this.form.controls['targetDateText'].value).format("YYYY-MM-DD"): null,
      addresses: this.form.controls['addresses'].value,
      expressedBy: this.form.controls['expressedBy'].value,
      acceptance: this.form.controls['acceptance'].value,

      targets :  gts,
      server: this.dataservice.mainfhirserver
    };


    console.log("ada  = " + JSON.stringify(ada));



    this.http.post<any>(url + this.dataservice.currentPatientId, ada).subscribe({
      next: data => {
        this.postId = data.id;
      },
      error: error => {
        this.errorMessage = error.message;
        console.error('There was an error!', error);
      }
    })



  }



  close() {
    this.dataservice.getPatientGoals();
  }

  isDisabled() {

    console.error('this.form.valid ', this.form.valid);
    console.error('this.form.valid ', this.form.valid);
    console.error('this.form.valid ', this.form.valid);
    console.error('this.form.valid ', this.form.valid);
    console.error('this.form.valid ', this.form.valid);
    console.error('this.form.valid ', this.form.valid);

    return this.form.valid;
    // return true;
  }
}
