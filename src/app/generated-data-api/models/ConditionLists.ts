/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ConditionSummary } from './ConditionSummary';

export type ConditionLists = {
    activeConditions: Array<ConditionSummary>;
    inactiveConditions: Array<ConditionSummary>;
    activeConcerns: Array<ConditionSummary>;
    inactiveConcerns: Array<ConditionSummary>;
}

