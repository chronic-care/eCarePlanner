/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import { request as __request } from '../core/request';

export class ConditionControllerService {

    /**
     * @param subject
     * @param careplan
     * @returns any OK
     * @throws ApiError
     */
    public static async getConditionSummary(
        subject: string,
        careplan?: string,
    ): Promise<any> {
        const result = await __request({
            method: 'GET',
            path: `/summary/conditions`,
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
    public static async getConditionSummaryOld(
        subject: string,
        careplan?: string,
    ): Promise<any> {
        const result = await __request({
            method: 'GET',
            path: `/conditionsummary`,
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
    public static async getConditions(
        subject: string,
    ): Promise<any> {
        const result = await __request({
            method: 'GET',
            path: `/condition`,
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
    public static async getCondition(
        id: string,
    ): Promise<any> {
        const result = await __request({
            method: 'GET',
            path: `/condition/${id}`,
        });
        return result.body;
    }

}