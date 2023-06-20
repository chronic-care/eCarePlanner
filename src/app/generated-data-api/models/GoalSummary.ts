/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { GoalTarget } from './GoalTarget';
import type { MccCodeableConcept } from './MccCodeableConcept';

export type GoalSummary = {
    priority: string;
    expressedByType?: string;
    description: string;
    achievementStatus?: MccCodeableConcept;
    achievementText?: string;
    lifecycleStatus: string;
    startDateText?: string;
    targetDateText?: string;
    addresses?: string;
    expressedBy?: string;
    acceptance?: string;
    targets?: Array<GoalTarget>;
    fhirid?: string;
    server?: string;
}
