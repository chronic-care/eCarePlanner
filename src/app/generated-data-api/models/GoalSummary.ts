/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import { Acceptance } from '..';
import type { GoalTarget } from './GoalTarget';
import type { MccCodeableConcept } from './MccCodeableConcept';
import { MccGoalRelationship } from './MccGoalRelationship';


import { MccReference } from './MccReference';

export type GoalSummary = {
    priority: string;
    expressedByType?: string;
    description: string;
    achievementStatus?: MccCodeableConcept;
    achievementText?: string;
    lifecycleStatus: string;
    startDateText?: string;
    targetDateText?: string;
    addresses?: Array<MccReference>;
    expressedBy?: string;
    acceptance?: Acceptance;
    targets?: Array<GoalTarget>;
    fhirid?: string;
    server?: string;
    relatedGoals?: Array<MccGoalRelationship>;
    notes?: Array<string>;
    mostrecentresult?: string;
}
