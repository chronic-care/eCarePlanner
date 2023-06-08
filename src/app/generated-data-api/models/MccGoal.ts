/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Acceptance } from './Acceptance';
import type { GoalTarget } from './GoalTarget';
import type { MccCodeableConcept } from './MccCodeableConcept';
import type { MccDate } from './MccDate';
import { MccGoalRelationship } from './MccGoalRelationship';
import type { MccReference } from './MccReference';

export type MccGoal = {
    id: string;
    statusDate?: string;
    statusReason?: string;
    lifecycleStatus: string;
    categorySummary?: string;
    expressedBy?: MccReference;
    categories?: Array<MccCodeableConcept>;
    priority?: MccCodeableConcept;
    description?: MccCodeableConcept;
    useStartConcept?: boolean;
    startDateText?: string;
    startConcept?: MccCodeableConcept;
    startDate?: MccDate;
    targets?: Array<GoalTarget>;
    addresses?: Array<MccReference>;
    notes?: Array<string>;
    outcomeCodes?: Array<MccCodeableConcept>;
    outcomeReference?: string;
    acceptance?: Array<Acceptance>;
    fhirid?: string;
    relatedGoals?: Array<MccGoalRelationship>;
}
