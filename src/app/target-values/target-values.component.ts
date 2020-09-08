import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import {GoalsDataService} from '../goals-data-service.service';
import {GoalTarget} from '../generated-data-api';

@Component({
  selector: 'app-target-values',
  templateUrl: './target-values.component.html',
  styleUrls: ['./target-values.component.css']
})
export class TargetValuesComponent implements OnInit {

  constructor(public dataservice: DataService) { }
  displayedColumns = ['measure', 'mostRecentResult', 'date', 'target'];
  ngOnInit(): void {
  }



}
