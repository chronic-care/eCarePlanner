import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../services/data.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DiagnosisDialogComponent } from '../diagnosis-dialog/diagnosis-dialog.component';
import { ActivatedRoute, Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import moment from 'moment';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-inactive-diagnosis-panel',
  templateUrl: './inactive-diagnosis-panel.component.html',
  styleUrls: ['./inactive-diagnosis-panel.component.css']
})

// todo: combine ActiveDiagnosisPanelCompenent and InactiveDiagnosisPanelCompenent into one component
export class InactiveDiagnosisPanelComponent implements OnInit {
  displayedColumns: string[] = ['code', 'rxfilter', 'trend', 'firstOnset', 'firstRecorded'];
  dataSource: any;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  private route: ActivatedRoute;
  private router: Router;
  constructor(public dataservice: DataService, private dialog: MatDialog, private rt: ActivatedRoute, private rtr: Router) {
    this.route = rt;
    this.router = rtr;
  }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.dataservice.conditions.inactiveConditions);
    this.dataSource.sortingDataAccessor = (item, property): string | number => {
      switch (property) {
        case "firstRecorded": return moment(item[property]).isValid() ? moment(item[property]).unix() : item[property];
        case 'firstOnset': return moment(item[property]).isValid() ? moment(item[property]).unix() : item[property];
        case 'code': return item[property].text.toUpperCase();
        default: return item[property];
      }
    };
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  openDialog(row) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.hasBackdrop = true;
    dialogConfig.width = '700px';
    dialogConfig.data = {
      name: this.dataservice.demographic.name,
      condition: row.code.text,
      history: row.history
    };
    this.dialog.open(DiagnosisDialogComponent, dialogConfig);
  }

  switchToHM(code: string) {
    // console.log('Switch to Health Maintenance icon clicked. code=', code);
    this.router.navigate(['/maint'], { queryParamsHandling: 'merge' });
  }

  switchToHS(code: string) {
    // console.log('Switch to Health Status icon clicked. code=', code);
    this.router.navigate(['/status'], { queryParamsHandling: 'merge' });
  }

}
