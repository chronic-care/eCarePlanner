import { CarePlan } from 'fhir/r4';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, from } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import {
  getCareplan as EccGetCareplan,
  getBestCareplan as EccGetBestCareplan
} from 'e-care-common-data-services';
import { environment} from '../../environments/environment';
import { MessageService } from './message.service';

@Injectable({providedIn: 'root'})
/* cc-careplan-betsy-ckd */

@Injectable({
  providedIn: 'root'
})
export class CareplanService {

  private baseURL = '/find/best/careplan';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient,  private messageService: MessageService) { }

  /** GET careplan by id. Will 404 if id not found */
  getCarePlan(id: string): Observable<CarePlan> {
    const url = `${environment.mccapiUrl}${this.baseURL}/${id}`;

    return from(EccGetCareplan(id)).pipe(
      tap(_ => this.log(`fetched careplan id=${id}`)),
      catchError(this.handleError<CarePlan>(`getCarePlan id=${id}`))
    );
  }

  /** GET careplans by subject id. Will 404 if id not found */
  getCarePlansBySubject(subjectId: string): Observable<CarePlan[]> {
    const url = `${environment.mccapiUrl}${this.baseURL}?subject=${subjectId}`;

    return from(EccGetBestCareplan(subjectId)).pipe(
      tap(_ => this.log(`fetched careplan subjectId=${subjectId}`)),
      catchError(this.handleError<CarePlan[]>(`getCarePlansBySubject subjectId=${subjectId}`))
    );
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
    this.messageService.add(`careplan-service: ${message}`);
  }
}
