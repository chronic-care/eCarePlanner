import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import moment from 'moment';

@Component({
  selector: 'app-social-concern-panel',
  templateUrl: './social-concern-panel.component.html',
  styleUrls: ['./social-concern-panel.component.css']
})
export class SocialConcernPanelComponent implements OnInit, AfterViewInit {
  dataSource: MatTableDataSource<any>;
  showFilter = false;

  @ViewChild(MatSort) sort: MatSort;

  displayedColumns = ['name', 'data', 'date'];

  constructor(public dataService: DataService) { }

  ngOnInit(): void {
    // Convert date strings to Date objects for proper sorting
    const socialConcernsWithConvertedDates = this.dataService.socialConcerns.map(concern => ({
      ...concern,
      dateAsDate: moment(concern.date, 'MMM DD, YYYY').toDate() // Adjust date format if needed
    }));

    // console.log("socialConcernsWithConvertedDates", socialConcernsWithConvertedDates);

    this.dataSource = new MatTableDataSource(socialConcernsWithConvertedDates);

    // Setup sorting for the data source
    this.dataSource.sortingDataAccessor = (item, property): string | number => {
      switch (property) {
        case 'date':
          return item.dateAsDate ? item.dateAsDate.getTime() : item.date; // Return timestamp for date sorting
        default:
          return item[property];
      }
    };
  }

  ngAfterViewInit(): void {
    // Assign the sort to the data source
    this.dataSource.sort = this.sort;
  }

  toggleFilter(): void {
    this.showFilter = !this.showFilter;
  }

  applyFilter(filterValue: string): void {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
