import type { Acceptance } from './Acceptance';
import type { GoalTarget } from './GoalTarget';
import type { MccCodeableConcept } from './MccCodeableConcept';
import type { MccDate } from './MccDate';
import type { MccReference } from './MccReference';

export type MccGoalRelationship = {
    target: MccReference;
    type: MccCodeableConcept;
}

