import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import {ConditionHistory} from '../generated-data-api';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-medication-dialog',
  templateUrl: './medication-dialog.component.html',
  styleUrls: ['./medication-dialog.component.css']
})
export class MedicationDialogComponent implements OnInit {

  displayedColumns: string[] = ['description', 'onset', 'recorded', 'abatement', 'status'];
  medication: string;
  dateprescribed: string;
  refillsPermitted: string;
  dosages: string;
  frequency: string;
  method: string;
  notes: string;
  reasons: string;


  constructor(private dialogRef: MatDialogRef<MedicationDialogComponent>,
              @Inject(MAT_DIALOG_DATA)  data: { medication: string,dateprescribed:string,refillsPermitted:string,dosages:string,frequency:string,method:string,notes:string,reasons:string}) {


    this.medication= data.medication;
    this.dateprescribed= data.dateprescribed;
    this.refillsPermitted= data.refillsPermitted;
    this.dosages= data.dosages;
    this.frequency= data.frequency;
    this.method= data.method;
    this.notes= data.notes;
    this.reasons= data.reasons;

  }

  ngOnInit(): void {
    // this.dataSource = new MatTableDataSource(this.history);
  }

  close() {
    this.dialogRef.close();
  }

}
