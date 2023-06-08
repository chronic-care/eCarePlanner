/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import { request as __request } from '../core/request';

export class GoalControllerService {

    /**
     * @param subject
     * @param careplan
     * @returns any OK
     * @throws ApiError
     */
    public static async getGoalSummaryaASDads(
        subject: string,
        careplan?: string,
    ): Promise<any> {
        const result = await __request({
            method: 'GET',
            path: `/summary/goals`,
            query: {
                'subject': subject,
                'careplan': careplan,
            },
        });
        return result.body;
    }

    /**
     * @param subject
     * @param careplan
     * @returns any OK
     * @throws ApiError
     */
    public static async getGoalSummaryOld(
        subject: string,
        careplan?: string,
    ): Promise<any> {
        const result = await __request({
            method: 'GET',
            path: `/goalsummary`,
            query: {
                'subject': subject,
                'careplan': careplan,
            },
        });
        return result.body;
    }

    /**
     * @param subject
     * @returns any OK
     * @throws ApiError
     */
    public static async getGoalsasdfasdfasdf(
        subject: string,
    ): Promise<any> {
        const result = await __request({
            method: 'GET',
            path: `/goal`,
            query: {
                'subject': subject,
            },
        });
        return result.body;
    }

    /**
     * @param id
     * @returns any OK
     * @throws ApiError
     */
    public static async getGoalasdfasdfasdf(
        id: string,
    ): Promise<any> {
        const result = await __request({
            method: 'GET',
            path: `/goal/${id}`,
        });
        return result.body;
    }

}
