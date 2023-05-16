import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import {ConditionHistory, GoalSummary} from '../generated-data-api';
import {MatTableDataSource} from '@angular/material/table';
import { MccGoalSummary } from 'e-care-common-data-services/build/main/types/mcc-types';

@Component({
  selector: 'app-medication-dialog',
  templateUrl: './goal-dialog.component.html',
  styleUrls: ['./goal-dialog.component.css']
})
export class GoalDialogComponent implements OnInit {




  // displayedColumns: string[] = ['lifecycleStatus', 'description', 'achievementStatus'];
  // lifecycleStatus: string;
  // description: string;
  // achievementStatus: string;
  theGoal: MccGoalSummary;



  constructor(private dialogRef: MatDialogRef<GoalDialogComponent>,
              @Inject(MAT_DIALOG_DATA)  goal) {
    console.log('GoalDialogComponentGoalDialogComponent ' +JSON.stringify(goal));
    this.theGoal = goal;
    ;


  }

  ngOnInit(): void {
    // this.dataSource = new MatTableDataSource(this.history);
  }

  close() {
    this.dialogRef.close();
  }

}
