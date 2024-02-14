import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../services/data.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import moment from 'moment';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { GoalDialogComponent } from '../goals-dialog/goal-dialog.component';
import { MccGoalSummary } from 'e-care-common-data-services/build/main/types/mcc-types';

@Component({
  selector: 'app-consolidated-goals',
  templateUrl: './consolidated-goals.component.html',
  styleUrls: ['./consolidated-goals.component.css']
})
export class ConsolidatedGoalsComponent implements OnInit, AfterViewInit {
  consolidatedGoalsDataSource: MatTableDataSource<MccGoalSummary>;

  constructor(public dataService: DataService,private dialog: MatDialog) {
  }

  displayedColumns = ['rank',   'description',  'targetdate', 'status', 'mostrecentresult', 'expressedby'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngOnInit(): void {
    this.consolidatedGoalsDataSource = this.dataService.consolidatedGoalsDataSource;
  }

  ngAfterViewInit(): void {

    this.dataService.targetValues;
    this.consolidatedGoalsDataSource.paginator = this.paginator;
    this.consolidatedGoalsDataSource.sort = this.sort;
    this.consolidatedGoalsDataSource.sortingDataAccessor = (data: MccGoalSummary, header: string) => {
      switch (header) {
        case ('status'): {
          return data.achievementStatus.text;
        }
        case ('priority'): {
          if (data.priority.toLowerCase() === 'undefined') {
            return 'low-priority';
          } else {
            return data[header];
          }
        }
        case ('startDateText'): {
          return moment(data[header]).unix();
        }
        case ('targetDateText'): {
          return moment(data[header]).unix();
        }
        case ("achievementStatus"): {
          return data[header].text;
        }
        default: {
          return data[header];
        }
      }
    };
  }


  refresh() {
    this.dataService.consolidatedGoalsDataSource;
  }



  openDialog(goal:MccGoalSummary) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.hasBackdrop = true;
    dialogConfig.width = '700px';
    dialogConfig.data = goal;
    // goal.mostrecentresult = this.getMostRecentResult(goal);
    this.dialog.open(GoalDialogComponent, dialogConfig);
  }



  getMostRecentResult(goal: MccGoalSummary) {
    if (goal?.targets?.length > 0) {
      if (goal.targets[0].measure?.coding?.length > 0) {
        var item73 = this.dataService.targetValues.filter(function (targetValue) {
          return targetValue.code === goal.targets[0].measure?.coding[0].code;
        });


        if (item73?.length > 0) {
          return 'Target: ' + item73[0].measure + ' (' + item73[0].code + '); Last Value: ' + item73[0].mostRecentResult + ' on ' + item73[0].date.substring(0, 10);;
        }

        return "Target: " + goal.targets[0].measure.text + ' (' + goal.targets[0].measure.coding[0].code + '); Last Value: None Recorded';
      }
      return "Target: " + goal.targets[0].measure.text + '; Last Value: None Recorded (No code provided)'
    } else {
      return "Target: None";
    }

  }
}
