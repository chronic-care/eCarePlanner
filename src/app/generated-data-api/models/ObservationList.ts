/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { MccCoding } from './MccCoding';
import { Observation } from 'fhir/r4';

export type ObservationList = {
    primaryCode?: string;
    observations?: Array<Observation>;
}
