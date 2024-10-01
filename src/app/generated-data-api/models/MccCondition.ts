/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { MccCodeableConcept } from './MccCodeableConcept';
import type { MccDate } from './MccDate';
import type { MccIdentifer } from './MccIdentifer';
import type { MccReference } from './MccReference';

export type MccCondition = {
    clinicalStatus: MccCodeableConcept;
    verifiationStatus: MccCodeableConcept;
    categories?: Array<MccCodeableConcept>;
    severity?: MccCodeableConcept;
    code?: MccCodeableConcept;
    onset?: string;
    abatement?: string;
    recordedDate?: MccDate;
    recorder?: MccReference;
    asserter?: MccReference;
    note?: string;
    profileId?: string;
    identifer?: Array<MccIdentifer>;
    fhirid?: string;
    provenance?: string;
}
