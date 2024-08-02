import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import moment from 'moment';

@Component({
  selector: 'app-active-diagnosis-panel',
  templateUrl: './active-diagnosis-panel.component.html',
  styleUrls: ['./active-diagnosis-panel.component.css']
})
export class ActiveDiagnosisPanelComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['code', 'firstOnset', 'firstRecorded'];
  // dataSource: MatTableDataSource<any>;
  dataSource: any;
  showFilter: any = false;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(public dataservice: DataService) {}

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.dataservice.conditions.activeConditions);
    console.log("Active Diagnosis", this.dataservice.conditions.activeConditions );
    this.dataSource.sortingDataAccessor = (item, property): string | number => {
      switch (property) {
        case "firstRecorded": return moment(item[property]).isValid() ? moment(item[property]).unix() : item[property];
        case 'firstOnset': return moment(item[property]).isValid() ? moment(item[property]).unix() : item[property];
        case 'code': return item[property].text.toUpperCase();
        default: return item[property];
      }
    };
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value.trim().toLowerCase();

    this.dataSource.filterPredicate = (data: any, filter: string): boolean => {
      return data.code.text.toLowerCase().includes(filter);
    };

    this.dataSource.filter = filterValue;
  }

  toggleFilter(): void {
    this.showFilter = !this.showFilter;
  }
}
