import { Component, OnInit } from '@angular/core';
import { Constants } from '../common/constants';

@Component({
  selector: 'app-clinical-questionaires-results',
  templateUrl: './clinical-questionaires-results.component.html',
  styleUrls: ['./clinical-questionaires-results.component.css']
})
export class ClinicalQuestionairesResultsComponent implements OnInit {
  assessments: any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.loadDummyData();
  }

  loadDummyData() {
    this.assessments = [
      {
        title: "AHC Health-Related Social Needs Screening Tool",
        date: "Sep 05, 2024",
        questions: [
          { question: "Within the past 12 months, you worried that your food would run out before you got money to buy more", answer: "Sometimes true" },
          { question: "Within the past 12 months, the food you bought just didn't last and you didn't have money to get more", answer: "Sometimes true" }
        ]
      },
      {
        title: "PROMIS 29",
        date: "Sep 05, 2024",
        questions: [
          { question: "Are you able to do chores such as vacuuming or yard work?", answer: "With a little difficulty" },
          { question: "Are you able to go up and down stairs at a normal pace?", answer: "With much difficulty" }
        ]
      },
      {
        title: "Caregiver Strain Index",
        date: "Jun 09, 2024",
        questions: [
          { question: "During the past 4 weeks, have you felt strained from your duties?", answer: "Yes, often" },
          { question: "Do you feel that your family relationships have suffered?", answer: "No" }
        ]
      }
    ];
  }

  // Dummy methods to replace existing functionality
  getEffectiveValue(value: string): any {
    return value; // Simulate formatting function
  }

  getDisplayValue(value: any): any {
    return value.answer; // Simulate display value function
  }

  // Remove window dependency for testing
  getWotIsLoaded(): boolean {
    return true; // Assume always loaded fortesting.
    }

  getBPisLoaded(): boolean { return true; // Assume always loaded for testing.
    } }
