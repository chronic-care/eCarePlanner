/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { QuestionnaireResponseItemAnswer } from './QuestionnaireResponseItemAnswer';

export type QuestionnaireResponseItem = {
    linkid: string;
    text?: string;
    answers?: Array<QuestionnaireResponseItemAnswer>;
}


