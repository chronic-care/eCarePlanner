import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError, finalize, tap} from 'rxjs/operators';
import {MessageService} from './message.service';

import {environment} from '../../environments/environment';
import {GoalLists, GoalTarget, MccGoal, MccObservation} from '../generated-data-api';

import {TargetValue} from '../datamodel/old/targetvalue';
import {formatGoalTargetValue} from '../../utility-functions';
import {VitalSigns, VitalSignsChartData, VitalSignsData, VitalSignsTableData} from '../datamodel/vitalSigns';

enum vitalSignCodes {
  Systolic = '8480-6',
  Diastolic = '8462-4'
}

@Injectable({
  providedIn: 'root'
})

export class GoalsDataService {
  private goalURL = '/goal';
  private observationURL = '/find/latest/observation';
  private observationsURL = '/observations';
  private goalSummaryURL = '/goalsummary';

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private http: HttpClient, private messageService: MessageService) {
  }

  // Get Goals by Subject Id
  getGoals(id: string): Observable<GoalLists> {
    const url = `${environment.mccapiUrl}${this.goalSummaryURL}?subject=${id}`;
    return this.http.get<GoalLists>(url, this.httpOptions).pipe(
      tap(_ => this.log('fetched Goal Summary')),
      catchError(this.handleError<GoalLists>('getGoals'))
    );
  }

  // Get Patient Goal Targets by Subject Id and coding
  // Create and return an observable object which emits from the multiple http requests
  // each http request returns a Recent Observation Data
  // associated with a Goal in the GoalTarget[] array passed in
  // The Goal Target and Observation data is merged into a TargetValue object which is emitted
  getPatientGoalTargets(patientId: string, targets: GoalTarget[]): Observable<TargetValue> {
    return new Observable(observer => {
      targets.map(gt => {
        this.getMostRecentObservationResult(patientId, gt.measure.coding[0].code)
          .subscribe(obs => {
            let mostRecentResultValue = '';
            let observationDate = '';
            let rowHighlighted = false;
            let formattedTargetValue = '';
            if (obs !== undefined) {
              if (obs.value !== undefined) {
                mostRecentResultValue = obs.value.quantityValue.value.toString();
              }
              if (obs.components !== undefined) {
                obs.components.map(c => {
                  if (c.code.coding[0].code === gt.measure.coding[0].code) {
                    if (c.value !== undefined) {
                      mostRecentResultValue = c.value.quantityValue.value.toString();
                    }
                  }
                });
              }

              if (obs.effective !== undefined) {
                if (obs.effective.type === 'DateTime') {
                  observationDate = obs.effective.dateTime.date;
                }
              }

              [formattedTargetValue, rowHighlighted] = formatGoalTargetValue(gt, mostRecentResultValue);
              const tv: TargetValue = {
                measure: gt.measure.text,
                date: observationDate, // todo: Get observation date when API is updated
                mostRecentResult: mostRecentResultValue.toString(),
                target: formattedTargetValue,
                highlighted: rowHighlighted,
                status: obs.status
              };
              observer.next(tv);
            }
          });
      });
    });
  }

  getPatientVitalSigns(patientId: string): Observable<VitalSignsTableData> {
    return new Observable(observer => {
      this.getObservations(patientId, vitalSignCodes.Systolic)
        .pipe(  finalize(() => {observer.complete(); }))
        .subscribe(observations => {
          observations.map(obs => {
            let systolic = 0;
            let diastolic = 0;
            obs.components.map(c => {
              switch (c.code.coding[0].code) {
                case vitalSignCodes.Diastolic:
                  diastolic = c.value.quantityValue.value;
                  break;
                case vitalSignCodes.Systolic:
                  systolic = c.value.quantityValue.value;
                  break;
                default:
              }
            });
            const vs: VitalSignsTableData = {
              date: obs.effective.dateTime.date,
              diastolic,
              systolic
            };
            observer.next(vs);
          });
        });
    });
  }

  /** GET Goal by Goal Fhrid. Will 404 if id not found */
  getGoal(id: string): Observable<MccGoal> {
    const url = `${environment.mccapiUrl}${this.goalURL}/${id}`;
    return this.http.get<MccGoal>(url, this.httpOptions).pipe(
      tap(_ => this.log(`fetched subject id=${id}`)),
      catchError(this.handleError<MccGoal>(`getGoal id=${id}`))
    );
  }

  getMostRecentObservationResult(patientId: string, code: string): Observable<MccObservation> {
    const url = `${environment.mccapiUrl}${this.observationURL}?subject=${patientId}&code=${code}`;
    return this.http.get<MccObservation>(url, this.httpOptions).pipe(
      tap(_ => this.log(`fetched MccObservation patientId=${patientId} code=${code}`)),
      catchError(this.handleError<MccObservation>(`getMostRecentObservationResult patientId=${patientId} code=${code}`))
    );
  }

  getObservations(patientId: string, code: string): Observable<MccObservation[]> {
    const url = `${environment.mccapiUrl}${this.observationsURL}?subject=${patientId}&code=${code}`;
    return this.http.get<MccObservation[]>(url, this.httpOptions).pipe(
      tap(_ => this.log(`fetched MccObservation patientId=${patientId} code=${code}`)),
      catchError(this.handleError<MccObservation[]>(`getObservations patientId=${patientId} code=${code}`))
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
    this.messageService.add(`goal-data-service: ${message}`);
  }

}