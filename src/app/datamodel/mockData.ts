import { CarePlan } from 'fhir/r4';
import {TargetValue} from './targetvalue';
import {
  ConditionLists,
  Contact,
  GoalLists,
  GoalSummary,
  GoalTarget,
  MedicationSummary,
  SocialConcern
} from '../generated-data-api';

import {MccPatient} from '../generated-data-api/models/MccPatient';
import { MccConditionList, MccCounselingSummary, MccEducationSummary, MccGoalList, MccPatientContact, MccReferralSummary } from 'e-care-common-data-services/build/main/types/mcc-types';


export const mockContacts: Contact[] = [
  {
    type: 'person',
    role: 'patient',
    name: 'Name goes here',
    phone: '(xxx) xxx-xxxx',
    email: 'xxx@xxxx.org',
    address: 'xxx street, city, state zipxxx'
  },
  {
    type: 'person',
    role: 'alternate_contact',
    name: 'Name goes here',
    phone: '(xxx) xxx-xxxx',
    email: 'xxx@xxxx.org',
    address: 'xxx street, city, state zipxxx'
  },
  {
    type: 'person',
    role: 'provider',
    name: 'Dr Name goes here',
    phone: '(xxx) xxx-xxxx',
    email: 'xxx@xxxx.org',
    address: 'xxx street, city, state zipxxx'
  },
  {
    type: 'organization',
    role: 'primary_care',
    name: 'Name goes here',
    phone: '(xxx) xxx-xxxx',
    email: 'xxx@xxxx.org',
    address: 'xxx street, city, state zipxxx'
  },
  {
    type: 'organization',
    role: 'insurance',
    name: 'Name goes here',
    phone: '(xxx) xxx-xxxx',
    email: 'xxx@xxxx.org',
    address: 'xxx street, city, state zipxxx'
  }
];

export const emptyContacts: MccPatientContact[] = [
  {
    type: 'person',
    role: '',
    name: 'Awating data load...',
    phone: '',
    email: '',
    address: '',
    hasImage: false,
    relFhirId: ''
  }
];
export const emptyReferrals: MccReferralSummary[] = [];




export const mockMedicationSummary: MedicationSummary[] = [
  {
    type: 'MedicationRequest',
    fhirId: 'cc-med-betsy-aspirin',
    status: 'active',
    medication: 'Aspirin 75 MG Oral Tablet',
    dosages: 'Once daily.',
    requestedBy: 'Dr. John Carlson, MD',
    reasons: 'Congestive heart failure'
  },
  {
    type: 'MedicationRequest',
    fhirId: 'cc-med-betsy-furosemide',
    status: 'active',
    medication: 'Furosemide 20 MG Oral Tablet',
    dosages: 'Take Furosemide 20mg tablet once a day for swelling in arms and legs.',
    requestedBy: 'Dr. John Carlson, MD',
    reasons: 'Congestive heart failure'
  },
  {
    type: 'MedicationRequest',
    fhirId: 'cc-med-betsy-simvastatin',
    status: 'active',
    medication: 'Simvastatin 40 MG Oral Tablet',
    dosages: 'Take Simvastatin 40mg tablet once a day for high cholesterol.',
    requestedBy: 'Dr. John Carlson, MD',
    reasons: 'Dyslipidemia'
  },
  {
    type: 'MedicationRequest',
    fhirId: 'cc-med-betsy-lisinopril',
    status: 'active',
    medication: 'Lisinopril 40 MG Oral Tablet',
    dosages: 'Take Lisinopril 40mg tablet once a day for high blood pressure.',
    requestedBy: 'Dr. John Carlson, MD',
    reasons: 'Hypertension'
  },
  {
    type: 'MedicationRequest',
    fhirId: 'cc-med-betsy-vitamin-d',
    status: 'active',
    medication: 'Vitamin D 1000 IU Oral Tablet',
    dosages: 'By mouth twice daily in the morning and evening.',
    requestedBy: 'Dr. John Carlson, MD',
    reasons: 'Chronic kidney disease'
  },
  {
    type: 'MedicationRequest',
    fhirId: 'cc-med-betsy-insulin',
    status: 'active',
    medication: 'Insulin, human Mixed 70/30 100 UNT/ML Injectable Suspension',
    dosages: 'Twice daily.',
    requestedBy: 'Dr. John Carlson, MD',
    reasons: 'Chronic kidney disease'
  }
];

export const emptyMediciationSummary: MedicationSummary[] = [];

export const emptyTargetData: TargetValue[] = [];

export const mockTargetData: TargetValue[] = [

];

export const emptyGoalsList: MccGoalList = {
  activeClinicalGoals: [],
  inactiveClinicalGoals: [],
  activePatientGoals: [],
  inactivePatientGoals: [],
  activeTargets: []
};

export const emptyCounseling: MccCounselingSummary[] = [];
export const emptyEducation: MccEducationSummary[] = [];
/*
export const emptyVitalSignsData: VitalSignsData = {
  date: '2020-01-01',
  value: 0
};
*/

/*
export const emptyVitalSignsTableData: VitalSignsTableData[] = [{
  systolic: 0,
  diastolic: 0,
  date: '2020-01-01'
}];
*/

export const mockGoalList: GoalLists = {
  activeClinicalGoals: [
    {
      priority: 'high-priority',
      expressedByType: 'Practitioner',
      description: 'Stabilize Hemoglobin A1c',

      lifecycleStatus: 'active',
      startDateText: '11/30/2016',
      targets: [
        {
          measure: {
            coding: [
              {
                system: 'http://loinc.org',
                code: '4548-4',
                display: '4548-4'
              }
            ],
            text: 'Hemoglobin A1c total in Blood'
          },
          value: {
            valueType: 'Quantity',
            integerValue: 0,
            booleanValue: false,
            quantityValue: {
              unit: '%',
              comparator: '<',
              value: 7,
              system: 'http://unitsofmeasure.org/',
              code: '%'
            }
          }
        }
      ],
      fhirid: 'cc-goal-betsy-a1c'
    },
    {
      priority: 'high-priority',
      expressedByType: 'Practitioner',
      description: 'Phosphorus in blood',

      lifecycleStatus: 'active',
      startDateText: '02/20/2018',
      targets: [
        {
          measure: {
            coding: [
              {
                system: 'http://loinc.org',
                code: '2777-1',
                display: '2777-1'
              }
            ],
            text: 'Serum phosphorus'
          },
          value: {
            valueType: 'Range',
            integerValue: 0,
            booleanValue: false,
            rangeValue: {
              high: {
                unit: 'mg/dL',
                value: 4.5,
                system: 'http://unitsofmeasure.org',
                code: 'mg/dL'
              },
              low: {
                unit: 'mg/dL',
                value: 2.5,
                system: 'http://unitsofmeasure.org',
                code: 'mg/dL'
              }
            }
          }
        }
      ],
      fhirid: 'cc-goal-betsy-lab-phos'
    },
    {
      priority: 'medium-priority',
      expressedByType: 'Practitioner',
      description: 'Systolic blood pressure',

      lifecycleStatus: 'active',
      startDateText: '06/30/2017',
      targets: [
        {
          measure: {
            coding: [
              {
                system: 'http://loinc.org',
                code: '8480-6',
                display: '8480-6'
              }
            ],
            text: 'Systolic blood pressure'
          },
          value: {
            valueType: 'Quantity',
            integerValue: 0,
            booleanValue: false,
            quantityValue: {
              unit: 'mmHg',
              comparator: '<',
              value: 140,
              system: 'http://unitsofmeasure.org',
              code: 'mm[Hg]'
            }
          }
        }
      ],
      fhirid: 'cc-goal-betsy-bp-systolic'
    },
    {
      priority: 'Undefined',
      expressedByType: 'Practitioner',
      description: 'Diastolic blood pressure',
       lifecycleStatus: 'active',
      startDateText: '01/12/2019',
      targets: [
        {
          measure: {
            coding: [
              {
                system: 'http://loinc.org',
                code: '8462-4',
                display: '8462-4'
              }
            ],
            text: 'Diastolic blood pressure'
          },
          value: {
            valueType: 'Quantity',
            integerValue: 0,
            booleanValue: false,
            quantityValue: {
              unit: 'mmHg',
              comparator: '<',
              value: 80,
              system: 'http://unitsofmeasure.org',
              code: 'mm[Hg]'
            }
          }
        }
      ],
      fhirid: 'cc-goal-betsy-bp-diastolic'
    },
    {
      priority: 'Undefined',
      expressedByType: 'Practitioner',
      description: 'Exercise at least 30 minutes per day',
       lifecycleStatus: 'active',
      startDateText: '12/07/2017',
      targets: [
        {
          measure: {
            coding: [
              {
                system: 'http://snomed.info/sct',
                code: '226029000',
                display: '226029000'
              }
            ],
            text: 'Exercises'
          }
        }
      ],
      fhirid: 'cc-goal-betsy-exercise'
    }
  ],
  inactiveClinicalGoals: [],
  activePatientGoals: [
    {
      priority: 'high-priority',
      expressedByType: 'Patient',
      description: 'Maximize Quality of Life',
       lifecycleStatus: 'active',
      startDateText: '11/30/2016',
      fhirid: 'cc-goal-betsy-maxql'
    }
  ],
  inactivePatientGoals: [
    {
      priority: 'high-priority',
      expressedByType: 'Patient',
      description: 'Be able to dance again',
       lifecycleStatus: 'completed',
      startDateText: '10/30/2015',
      fhirid: 'cc-goal-betsy-dance'
    }
  ]
};

export const dummySubject: MccPatient = {
  name: 'No Patient Selected',
  id: '',
  fhirid: '',
  dateOfBirth: '',
  gender: '',
  race: '',
  ethnicity: ''
};
export const dummyPatientId = '';
export const dummyCareplanId = '';

export const dummyConditions: MccConditionList = {
  activeConditions: [],
  inactiveConditions: [],
  activeConcerns: [],
  inactiveConcerns: []
};

export const dummyCarePlan: CarePlan = {
  title: 'Test careplan',
  addresses: [],
  id: '',
  note: [],
  category: [],
  status: 'active',
  intent: 'plan',
  description: 'No Care Plan Selected',
  resourceType: 'CarePlan',
  subject: {},
  meta: {
    lastUpdated: '12/12/2022',
    versionId: '',
  },
  period: {
    start: '12/12/2022',
    end: '12/12/2025',
  }
};

export const emptySocialConcerns: SocialConcern[] = [];

/*
export const dummyGoals: GoalLists =  new class implements GoalLists {
  activeClinicalGoals: Goal[];
  activePatientGoals: Goal[];
  inactiveClinicalGoals: Goal[];
  inactivePatientGoals: Goal[];
} ();
*/

export const dummyGoals: GoalLists = new class implements GoalLists {
  activeClinicalGoals: Array<GoalSummary>;
  activePatientGoals: Array<GoalSummary>;
  activeTargets: Array<GoalTarget>;
  inactiveClinicalGoals: Array<GoalSummary>;
  inactivePatientGoals: Array<GoalSummary>;
}();
