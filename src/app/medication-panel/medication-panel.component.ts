import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../services/data.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MedicationDialogComponent } from '../medication-dialog/medication-dialog.component';


@Component({
  selector: 'app-medication-panel',
  templateUrl: './medication-panel.component.html',
  styleUrls: ['./medication-panel.component.css']
})

export class MedicationPanelComponent implements OnInit, AfterViewInit {

  constructor(public dataService: DataService,private dialog: MatDialog) { }
  displayedColumns = ['medication', 'effectiveDate','reasons', 'dosages', 'requestedBy', 'issues', 'priority','hasnotes','notes'];
  activeMedicationsDataSource: any;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngOnInit(): void {
    this.activeMedicationsDataSource = this.dataService.activeMedicationsDataSource;
  }

  ngAfterViewInit(): void {
    this.activeMedicationsDataSource.sort = this.sort;
    this.activeMedicationsDataSource.paginator = this.paginator;
  }


  openDialog(row) {

    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.hasBackdrop = true;
    dialogConfig.width = '700px';
    dialogConfig.data = {
      medication: row.medication,
      dateprescribed: row.effectiveDate,
      refillsPermitted: row.refillsPermitted,
      dosages: row.dosages,
      frequency: row.frequency,
      method: row.method,
      notes: row.notes,
      reasons: row.reasons


    };
    this.dialog.open(MedicationDialogComponent, dialogConfig);
  }
}
