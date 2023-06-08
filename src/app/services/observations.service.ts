import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { catchError, tap } from "rxjs/operators";
import { environment } from "src/environments/environment";
import { Constants } from "../common/constants";
import { MccObservation, SimpleQuestionnaireItem } from "../generated-data-api";
import { getDisplayValue, formatEffectiveDate, formatMccDate } from "../util/utility-functions";

interface FormattedResult {
    name: string;
    value: string;
    date: any;
}

interface PatientLabResultsMap {
    name: string;
    value: string;
    type: string;
}

@Injectable()
export class ObservationsService {
    public HTTP_OPTIONS = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    public OBSERVATIONS: Map<string, any> = new Map<string, any>();
    public QUESTIONNAIRES: Map<string, any> = new Map<string, any>();

    _defaultUrl = environment.mccapiUrl;
  log: any;
    constructor(
        protected http: HttpClient
    ) {
    }

    _observationUrl = "find/latest/observation";
    getObservation(patientId: string, code: string, keyToStore?: string): Promise<any> {
        const key = patientId + "-" + code;

        if (this.OBSERVATIONS.has(key)) {
            let returnVal = this.OBSERVATIONS.get(key);
            return Promise.resolve(returnVal);
        }
        else {
            return this.http.get(`${environment.mccapiUrl}/${this._observationUrl}?subject=${patientId}&code=${code}`, this.HTTP_OPTIONS).toPromise()
                .then((res: MccObservation) => {
                    this.OBSERVATIONS.set(key, res);
                    return res;
                }).catch((reason) => {
                    console.log("Error querying: " + this._observationUrl + "&code=" + code);
                });
        }
    };

    _observationsUrl = "observations";
    getObservations(patientId: string, code: string, keyToStore?: string): Promise<any> {
        const key = patientId + "-" + code + "-multiple";

        if (this.OBSERVATIONS.has(key)) {
            let returnVal = this.OBSERVATIONS.get(key);
            if (keyToStore) {
                returnVal[0].key = keyToStore;
            }
            return Promise.resolve(this.OBSERVATIONS.get(key));
        }
        else {
            return this.http.get(`${environment.mccapiUrl}/${this._observationsUrl}?subject=${patientId}&code=${code}&sort=descending`, this.HTTP_OPTIONS).toPromise()
                .then((res: MccObservation[]) => {
                    this.OBSERVATIONS.set(key, res);
                    return res;
                }).catch((reason) => {
                    console.log("Error querying: " + `${environment.mccapiUrl}/${this._observationsUrl}?subject=${patientId}&code=${code}&sort=descending`);
                });
        }
    };

    _observationByValueSetUrl = "observationsbyvalueset"
    getObservationsByValueSet = (patientId: string, valueSet: string, sort?: string, max?: string, keyToStore?: string): Promise<any> => {
        const key = patientId + "-" + valueSet + (sort ? "-" + sort : "") + (max ? "-" + max : "") + (keyToStore ? "-" + keyToStore : "");
        const url = `${environment.mccapiUrl}/${this._observationByValueSetUrl}?subject=${patientId}&valueset=${valueSet}` + (sort ? `&sort=${sort}` : ``) + (max ? `&max=${max}` : ``);

        if (this.OBSERVATIONS.has(key)) {
            let returnVal = this.OBSERVATIONS.get(key);
            if (returnVal.length > 0 && keyToStore) {
                returnVal[0].key = keyToStore;
            }
            return Promise.resolve(returnVal);
        }
        else {
            return this.http.get(url, this.HTTP_OPTIONS).toPromise()
                .then((res: MccObservation[]) => {
                    this.OBSERVATIONS.set(key, res);
                    return res;
                }).catch((reason) => {
                    console.log("Error querying: " + url);
                });
        }
    }

    _observationsByPanelUrl = "observations"
    getObservationsByPanel(patientId: string, code: string, sort?: string, max?: string, keyToStore?: string): Promise<any> {
        const key = patientId + "-" + code + (sort ? "-" + sort : "") + (max ? "-" + max : "") + (keyToStore ? "-" + keyToStore : "");

        if (this.OBSERVATIONS.has(key)) {
            let returnVal = this.OBSERVATIONS.get(key);
            if (returnVal.length > 0 && keyToStore) {
                returnVal[0].key = keyToStore;
            }
            return Promise.resolve(returnVal);
        }
        else {
            return this.http.get(`${environment.mccapiUrl}/${this._observationsByPanelUrl}?subject=${patientId}&code=${code}` + (sort ? `&sort=${sort}` : ``) + (max ? `&max=${max}` : ``) + `&mode=panel`, this.HTTP_OPTIONS).toPromise()
                .then((res: MccObservation[]) => {
                    this.OBSERVATIONS.set(key, res);
                    return res;
                }).catch((reason) => {
                    console.log("Error querying: " + code);
                });
        }
    }

    _questionnaireLatestItemUrl = "find/latest/questionnaireresponseitem";
    getQuestionnaireItem(patientId: string, code: string): Promise<any> {
        const key = patientId + "-" + code;

        if (this.QUESTIONNAIRES.has(key)) {
            let returnVal = this.QUESTIONNAIRES.get(key);
            return Promise.resolve(returnVal);
        } else {
            return this.http.get(`${environment.mccapiUrl}/${this._questionnaireLatestItemUrl}?subject=${patientId}&code=${code}`, this.HTTP_OPTIONS).toPromise()
                .then((res: SimpleQuestionnaireItem) => {
                    this.QUESTIONNAIRES.set(key, res);
                    return res;
                }).catch((reason) => {
                    console.log("Error querying: " + code);
                });
        }
    }

    _questionnaireAllItemsUrl = "find/all/questionnaireresponseitems";
    getQuestionnaireItems(patientId: string, code: string): Promise<any> {
        const key = patientId + "-" + code + "-all";

        if (this.QUESTIONNAIRES.has(key)) {
            return Promise.resolve(this.QUESTIONNAIRES.get(key));
        } else {
            return this.http.get(`${environment.mccapiUrl}/${this._questionnaireAllItemsUrl}?subject=${patientId}&code=${code}`, this.HTTP_OPTIONS).toPromise()
                .then((res: SimpleQuestionnaireItem[]) => {
                    this.QUESTIONNAIRES.set(key, res);
                    return res;
                }).catch((reason) => {
                    console.log("Error querying: " + code);
                });
        }
    }

    getLabResults(patientId: string, longTermCondition: string): any {
        longTermCondition = "ckd";
        let results: FormattedResult[] = [];
        if (!Constants.labMappings[longTermCondition]) {
            return Promise.resolve([]);
        }
        let callsToMake: PatientLabResultsMap[] = Constants.labMappings[longTermCondition];
        let promiseArray = [];
        if (!callsToMake) return Promise.resolve([]);
        callsToMake.forEach((v, i) => {
            switch (v.type) {
                case "code":
                    promiseArray.push(this.getObservation(patientId, v.value, v.name));
                    break;
                case "valueset":
                  console.log("v.value"+v.name);
                  console.log("v.value"+v.name);
                  console.log("v.value"+v.name);
                  console.log("v.value"+v.name);
                  console.log("v.value"+v.value);
                    promiseArray.push(this.getObservationsByValueSet(patientId, v.value, "descending", "1", v.name));
                    break;
                case "panel":
                    promiseArray.push(this.getObservationsByPanel(patientId, v.value, "descending", "1", v.name));
                    break;
                case "question":
                    promiseArray.push(this.getQuestionnaireItem(patientId, v.value));
                    break;
            }
        })
        return Promise.all(promiseArray).then((resArr: any[]) => {
            resArr.forEach((res: any, index: number) => {
                let correspondingCall = callsToMake[index];
                if (!res || res.length < 1 || res.status === "notfound" || res.fhirid === "notfound") {
                    // results.push({ name: correspondingCall.name, value: "xxxNo Data Availablexxx", date: "" })
                }
                else {
                    switch (correspondingCall.type) {
                        case "code":
                            results.push({ name: correspondingCall.name, value: getDisplayValue((<MccObservation>res).value), date: formatEffectiveDate((<MccObservation>res).effective) });
                            break;
                        case "valueset":
                            results.push({ name: correspondingCall.name, value: getDisplayValue((<MccObservation>res[0]).value), date: formatEffectiveDate((<MccObservation>res[0]).effective) });
                            break;
                        case "panel":
                            results.push({ name: correspondingCall.name, value: getDisplayValue((<MccObservation>res[0]).value), date: formatEffectiveDate((<MccObservation>res[0]).effective) });
                            break;
                        case "question":
                            results.push({ name: correspondingCall.name, value: getDisplayValue((<SimpleQuestionnaireItem>res).item.answers[0].value), date: formatMccDate((<SimpleQuestionnaireItem>res).authored) })
                            break;
                    }
                }
            });
            return results;
        });
    }

    _observationByCategoryURL= "observationsbycategory"
    getObservationsByCategory(subjectId: string, category: string): Observable<MccObservation[]> {
      const url = `${environment.mccapiUrl}/${this._observationByCategoryURL}?subject=${subjectId}&category=${category}`;
      return this.http.get<MccObservation[]>(url,this.HTTP_OPTIONS).pipe(
        tap((_) => { console.log(`getObservationsByCategory id=${subjectId}, careplan=${category}`); console.log("getObservationsByCategory", _); }),
        catchError(this.handleError<MccObservation[]>(`getObservationsByCategory id=${subjectId}, careplan=${category}`))
      );
    }


    private handleError<T>(operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {
        console.error(error);
         return of(result as T);
      };
    }

    getVitalSignResults(patientId: string, longTermCondition: string): any {
        if (!longTermCondition || longTermCondition !== "general") longTermCondition = "ckd";
        let results: FormattedResult[] = [];
        if (!Constants.vitalMappings[longTermCondition]) {
            return Promise.resolve([]);
        }
        let callsToMake: PatientLabResultsMap[] = Constants.vitalMappings[longTermCondition];
        let promiseArray = [];
        if (!callsToMake) return Promise.resolve([]);
        callsToMake.forEach((v, i) => {
            switch (v.type) {
                case "code":
                    promiseArray.push(this.getObservation(patientId, v.value, v.name));
                    break;
                case "valueset":
                    promiseArray.push(this.getObservationsByValueSet(patientId, v.value, "descending", "1", v.name));
                    break;
                case "panel":
                    promiseArray.push(this.getObservationsByPanel(patientId, v.value, "descending", "1", v.name));
                    break;
                case "question":
                    promiseArray.push(this.getQuestionnaireItem(patientId, v.value));
                    break;
            }
        })
        return Promise.all(promiseArray).then((resArr: any[]) => {
            resArr.forEach((res: any, index: number) => {
                let correspondingCall = callsToMake[index];
                if (!res || res.length < 1 || res.status === "notfound" || res.fhirid === "notfound") {
                    // results.push({ name: correspondingCall.name, value: "No Data Available", date: "" })
                }
                else {
                    switch (correspondingCall.type) {
                        case "code":
                            results.push({ name: correspondingCall.name, value: getDisplayValue((<MccObservation>res).value), date: formatEffectiveDate((<MccObservation>res).effective) });
                            break;
                        case "valueset":
                            results.push({ name: correspondingCall.name, value: getDisplayValue((<MccObservation>res[0]).value), date: formatEffectiveDate((<MccObservation>res[0]).effective) });
                            break;
                        case "panel":
                            results.push({ name: correspondingCall.name, value: getDisplayValue((<MccObservation>res[0]).value), date: formatEffectiveDate((<MccObservation>res[0]).effective) });
                            break;
                        case "question":
                            results.push({ name: correspondingCall.name, value: getDisplayValue((<SimpleQuestionnaireItem>res).item.answers[0].value), date: formatMccDate((<SimpleQuestionnaireItem>res).authored) })
                            break;
                    }
                }
            });
            return results;
        });
    }
}
