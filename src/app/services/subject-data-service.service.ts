import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { from, Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { MessageService } from './message.service';
import { getPatient, getPatientsByName, getSummaryConditions, getSummarySocialConcerns } from 'e-care-common-data-services';
import { MccCondition, MccConditionList, MccPatient, MccPatientSummary } from 'e-care-common-data-services/build/main/types/mcc-types';
import { SocialConcern } from '../generated-data-api';
import { environment } from '../../environments/environment';


@Injectable({ providedIn: 'root' })
export class SubjectDataService {

  baseServer = environment.mccapiUrl;

  private patientURL = '/patient';
  private conditionSummaryURL = '/conditionsummary';
  private concernURL = '/socialconcerns';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient, private messageService: MessageService) { }

  /** GET Demographic by id. Return `undefined` when id not found */
  getSubjectNo404<Data>(id: string): Observable<MccPatientSummary> {
    return from(getPatientsByName(id))
      .pipe(
        map(demographics => demographics[0]), // returns a {0|1} element array
        tap(h => {
          const outcome = h ? `fetched` : `did not find`;
          this.log(`${outcome} hero id=${id}`);
        }),
        catchError(this.handleError<MccPatientSummary>(`Subject id=${id}`))
      );
  }

  /** GET Subject by id. Will 404 if id not found */
  getSubject(id: string): Observable<MccPatientSummary> {
    return from(getPatient(id)).pipe(
      tap(_ => this.log(`fetched subject id=${id}`)),
      catchError(this.handleError<MccPatientSummary>(`getSubject id=${id}`))
    );
  }

  /** GET Subjects by searchString. Will 404 if id not found */
  getSubjects(searchFor: string): Observable<MccPatientSummary> {
    return from(getPatientsByName(searchFor)).pipe(
      map(patient => patient[0]),
      tap(_ => this.log(`fetched subject id=${_.id}`)),
      catchError(this.handleError<MccPatientSummary>(`getSubjects searchFor=${searchFor}`))
    );
  }


  getConditions(id: string): Observable<MccConditionList> {
    const url = `${environment.mccapiUrl}${this.conditionSummaryURL}?subject=${id}`;

    return from(getSummaryConditions()).pipe(
      tap((_) => { this.log; console.log("Fetched Conditions", _); }),
      catchError(this.handleError<MccConditionList>('getConditions'))
    );

  }
  getSocialConcerns(id: string, careplan: string): Observable<SocialConcern[]> {
    return from(getSummarySocialConcerns()).pipe(
      tap(_ => {
        this.log('fetched Concern')
      }),
      catchError(this.handleError<SocialConcern[]>('getSocialConcerns', []))
    );

  }
  getPateintsSortedByName() {
    /*
    https://api.logicahealth.org/MCCeCarePlanTest/open/Patient?_sort=family,given
     */

  }

  getTotalPatients() {

    /*
    https://api.logicahealth.org/MCCeCarePlanTest/open/Patient?_count=0
    body.total
     */
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a message with the MessageService */
  private log(message: string) {
    this.messageService.add(`subject-data-service: ${message}`);
  }


}
