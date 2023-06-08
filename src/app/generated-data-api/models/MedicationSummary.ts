/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type MedicationSummary = {
    type: string;
    fhirId: string;
    inConflict?: boolean;
    conflictsWith?: Array<string>;
    status: string;
    categories?: string;
    medication: string;
    dosages?: string;
    requestedBy?: string;
    reasons?: string;
    issues?: string;
    priority?: string;
    onCareplans?: string;
    notes?: string;
}
