/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { FuzzyDate } from './FuzzyDate';
import type { MccCodeableConcept } from './MccCodeableConcept';

export type ServiceRequestSummary = {
    topic: MccCodeableConcept;
    type: string;
    displayDate?: string;
    date?: FuzzyDate;
    outcome?: MccCodeableConcept;
    status: string;
    performer?: string;
    reasons?: string;
    fhirid?: string;
}
