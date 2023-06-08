import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import {ConditionHistory} from '../generated-data-api';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-diagnosis-dialog',
  templateUrl: './diagnosis-dialog.component.html',
  styleUrls: ['./diagnosis-dialog.component.css']

})
export class DiagnosisDialogComponent implements OnInit {

  displayedColumns = ['description', 'onset', 'recorded', 'abatement','status','note'];
  dataSource;
  name: string;
  condition: string;
  history: ConditionHistory[] = [];

  constructor(private dialogRef: MatDialogRef<DiagnosisDialogComponent>,
              @Inject(MAT_DIALOG_DATA)  data: { name: string, condition: string, history: ConditionHistory[] }) {
    this.name = data.name;
    this.condition = data.condition;
    this.history = data.history;

  }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.history);
  }

  close() {
    this.dialogRef.close();
  }

}
