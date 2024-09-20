/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { MccDate } from './MccDate';
import type { QuestionnaireResponseItem } from './QuestionnaireResponseItem';

export type MccQuestionnaireResponse = {
    id: string;
    status?: string;
    authored?: MccDate;
    questionnaire?: string;
    author?: string;
    source?: string;
    subject?: string;
    items?: Array<QuestionnaireResponseItem>;
    fhirid?: string;
}

export type MCCAssessmentResponseItem = {
  question?: string;
  answer?: string;

}


export type MccAssessment = {
  title?: string;
  date?: string,
  questions?: Array<MCCAssessmentResponseItem>;

}
