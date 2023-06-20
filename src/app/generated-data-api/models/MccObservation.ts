/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Effective } from './Effective';
import type { GenericType } from './GenericType';
import type { MccCodeableConcept } from './MccCodeableConcept';
import type { MccReference } from './MccReference';
import type { ObservationComponent } from './ObservationComponent';
import type { ReferenceRange } from './ReferenceRange';

export type MccObservation = {
    code: MccCodeableConcept;
    status: string;
    basedOn?: Array<MccReference>;
    effective?: Effective;
    value?: GenericType;
    note?: string;
    referenceRanges?: Array<ReferenceRange>;
    components?: Array<ObservationComponent>;
    component?: Array<ObservationComponent>;
    category?: Array<MccCodeableConcept>;
    dataAbsentReason?: MccCodeableConcept;
    fhirid?: string;
}
