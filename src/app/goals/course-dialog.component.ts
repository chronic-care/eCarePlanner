import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";

import { FormBuilder, Validators, FormGroup, FormControl } from "@angular/forms";
import moment from 'moment';
import { GoalSummary } from '../generated-data-api/models/GoalSummary';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GoalTarget } from '../generated-data-api/models/GoalTarget';
import { Acceptance, GenericType, MccCodeableConcept, MccCoding,MccReference} from '../generated-data-api';
import { DataService } from '../services/data.service';
import { formatEffectiveDate, getDisplayValue } from '../util/utility-functions';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { GoalsDataService } from '../services/goals-data-service.service';
import { MccGoalRelationship } from '../generated-data-api/models/MccGoalRelationship';

@Component({
  selector: 'course-dialog',
  templateUrl: './course-dialog.component.html',
  styleUrls: ['./course-dialog.component.css']
})
export class CourseDialogComponent implements OnInit {
  // relatedGoals = new Array<GoalSummary>();
  displayedColumns: string[] = [ 'goal', 'relationship','actionsColumn'];
  dataSource: MccGoalRelationship[] = [  ];
  selection = new SelectionModel<GoalSummary>(true, []);


  getDisplayValue(value: GenericType): any {
    return getDisplayValue(value);
   }







  constructor(public dataservice: DataService,public goalsdataservice: GoalsDataService,private http: HttpClient) { }


  public HTTP_OPTIONS = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
  form: FormGroup;
  description: string;
  errorMessage: any;
  postId: any;

  successorClinicalGoals: Array<GoalSummary>;

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
        acceptanceBy: new FormControl(),
        acceptanceStatus: new FormControl(),
        acceptancePriority: new FormControl(),
        targets: new FormControl(),
        relatedgoal : new FormControl(),
        acceptancepriority: new FormControl(),
        outcome : new FormControl(),
        note : new FormControl(),

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
    console.trace('acceptanceBy ' + this.form.controls['acceptanceBy'].value);
    console.trace('targets ' + this.form.controls['targets'].value);
    console.trace('lifecycleStatus ' + this.form.controls['lifecycleStatus'].value);

    console.trace('this.dataSource) ' +this.dataSource);


    const url = `${environment.mccapiUrl}` + '/creategoal?patientId=';



    var targetAsString = String( this.form.controls['targets'].value);
    console.trace('targetAsString ' +targetAsString);
    var targetAsSplit = targetAsString.split('^');
    // var targetCode
    var targetText
    var targetCoding = new Array<MccCoding>()
    if (targetAsSplit.length = 2) {
      targetText = targetAsSplit[1];
      const targetCode: MccCoding = { code: targetAsSplit[0], display: targetAsSplit[1] }
      targetCoding.push(targetCode);
    } else {
      targetText = targetAsString;
    }


    const gtmeasure : MccCodeableConcept = {

      text:targetText,
      coding:targetCoding
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



    var foobar = String( this.form.controls['addresses'].value);


    var sa2 = foobar.split(',');

    console.log(typeof foobar);


    var addressesSelected = new Array<MccReference>();



    for(var i = 0; i < sa2.length; i++) {
     var refaaa : MccReference = { display:sa2[i]};
     addressesSelected.push(refaaa);
    }

    var relatedGoals = new Array<MccGoalRelationship>();

    var goalnotes = new Array<string>();

    goalnotes.push(this.form.controls['note'].value);


    for(var ii = 0; ii < this.dataSource.length; ii++) {

      console.trace('relatedGoals this.dataSource[ii].target.display' + this.dataSource[ii].target.display + 'llllll');
      console.trace('relatedGoals this.dataSource[ii].type.text} ' + this.dataSource[ii].type.text+ 'llllll');

      var r : MccReference ={display:this.dataSource[ii].target.display};
      var g : MccCodeableConcept={text:this.dataSource[ii].type.text};
      var goalRelationship : MccGoalRelationship = { target : r, type:g };
      relatedGoals.push(goalRelationship);
     }

     const individual: MccReference = {display:this.form.controls['acceptanceBy'].value}

    const priority: MccCodeableConcept = {text:this.form.controls['acceptancePriority'].value}


     const acceptance: Acceptance = {individual:individual,code:this.form.controls['acceptanceStatus'].value,priority:priority};

    const ada: GoalSummary = {
      priority: this.form.controls['priority'].value,
      lifecycleStatus: this.form.controls['lifecycleStatus'].value,
      description: this.form.controls['description'].value,
      achievementStatus : achievementStatus,
      startDateText:  this.form.controls['startDateText'].dirty ?  moment(this.form.controls['startDateText'].value).format("YYYY-MM-DD") : null,
      targetDateText: this.form.controls['targetDateText'].dirty ? moment(this.form.controls['targetDateText'].value).format("YYYY-MM-DD"): null,
      addresses: addressesSelected,
      expressedBy: this.form.controls['expressedBy'].value,
      acceptance: acceptance,
      // acceptanceBy: this.form.controls['acceptanceBy'].value,
      // acceptanceStatus: this.form.controls['acceptanceStatus'].value,
      // acceptancePriority: this.form.controls['acceptancePriority'].value,
      relatedGoals: relatedGoals,
      targets :  gts,
      server: this.dataservice.mainfhirserver,
      notes:goalnotes
    };

    this.http.post<any>(url + this.dataservice.currentPatientId, ada,this.goalsdataservice.httpOptions ).subscribe({
      next: data => {
        this.postId = data.id;
      },
      error: error => {
        this.errorMessage = error.message;
        console.error('There was an error!', error);
      }
    })
  }


  addRow() {
    var r : MccReference ={display:"111"};
    var g : MccCodeableConcept={text:"222"};
    const  gs:  MccGoalRelationship = {
    target:r,type:g

    };

    this.dataSource = [...this.dataSource, gs];
  }

  close() {
    this.dataservice.getPatientGoals();
  }

  isDisabled() {
    return this.form.valid;
  }

  onGoalChange(index,ob) {
    console.log('onGoalChange changed...');
    console.log('onGoalChange changed...'+JSON.stringify(index));

    this.dataSource[index].target.display=ob.value;
    let selectedBook = ob.value;
    console.log(selectedBook);

    for (var i = 0; i < this.dataSource.length; i++) { console.log(JSON.stringify(this.dataSource[i])); }

  }

  onGoalRelationshipChange(index,ob) {
    console.log('onGoalRelationshipChange changed...');
    console.log('onGoalChange changed...'+JSON.stringify(index));
    this.dataSource[index].type.text=ob.value;
    let selectedBook = ob.value;
    console.log(selectedBook);
    for (var i = 0; i < this.dataSource.length; i++) { console.log(JSON.stringify(this.dataSource[i])); }
  }

  deleteTicket(rowid: number) {
    if (rowid > -1) {
      this.dataSource.splice(rowid, 1);
      this.dataSource = [...this.dataSource];
    }
  }

}

