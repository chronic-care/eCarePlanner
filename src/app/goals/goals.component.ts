

import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';


// import { DialogDataExampleDialog } from '../addgoal/dialog.data.example';

import { Constants } from '../common/constants';

import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { CourseDialogComponent } from './course-dialog.component';
import { DataService } from '../services/data.service';
// import { DialogDataExampleDialog } from './dialog.data.example';


@Component({
  selector: 'app-goals',
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.css']
})
export class GoalsComponent implements OnInit {
  featureToggling: any = Constants.featureToggling;

  public breakpoint: number; // Breakpoint observer code

  public date: FormControl = new FormControl(new Date()); // Date picker code
  public serializedDate: FormControl = new FormControl(
    new Date().toISOString(),
  ); // Date picker code

  public selected: string = 'option2'; // Country code

  public addCusForm: FormGroup;


  constructor(public dataservice: DataService,public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  getGoalsReady(): boolean {
    return window[Constants.GoalsIsLoaded];
  }

  addNewGoalFeature() : boolean {
    return false;
  }

  getTargetsReady(): boolean {
    return window[Constants.TargetsIsLoaded];
  }

  getChoicesReady(): boolean {
    return window[Constants.ChoicesIsLoaded];
  }

  openDialog() {
    const dialogRef = this.dialog.open(CourseDialogComponent,{
      height: '80%',
      width: '100%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.dataservice.getPatientGoals();

    });
  }

  public onAddCus(): void {
    this.markAsDirty(this.addCusForm);
  }

  // tslint:disable-next-line:no-any
  public onChange(data: any): void {
    if (data) {
      // tslint:disable-next-line:no-backbone-get-set-outside-model
      this.addCusForm.get('idNum').enable();
    } else {
      // tslint:disable-next-line:no-backbone-get-set-outside-model
      this.addCusForm.get('idNum').disable();
    }
  }

  // tslint:disable-next-line:no-any
  public onResize(event: any): void {
    this.breakpoint = event.target.innerWidth <= 600 ? 1 : 2;
  }

  private markAsDirty(group: FormGroup): void {
    group.markAsDirty();
    // tslint:disable-next-line:forin
    for (const i in group.controls) {
      group.controls[i].markAsDirty();
    }
  }

}

