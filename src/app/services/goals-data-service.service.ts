import { Observation, GoalTarget } from 'fhir/r4';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { from, Observable, of } from 'rxjs';
import { catchError, finalize, tap } from 'rxjs/operators';
import { MessageService } from './message.service';

import { TargetValue } from '../datamodel/targetvalue';
import { formatGoalTargetValue, getDisplayValueNew } from '../util/utility-functions';
import { VitalSignsTableData } from '../datamodel/vitalSigns';
import { EgfrTableData } from '../datamodel/egfr';
import { UacrTableData } from '../datamodel/uacr';
import { WotTableData } from '../datamodel/weight-over-time';
import { ObservationCollection } from '../generated-data-api/models/ObservationCollection';
import {
  getObservations as EccGetObservations,
  getObservationsByValueSet as EccGetObservationsByValueSet,
  getLatestObservation as EccGetLatestObservation,
  getObservationsSegmented,
  getSummaryGoals
} from 'e-care-common-data-services';
import { MccCoding } from "../generated-data-api/models/MccCoding";
import { Constants } from '../common/constants';
import { MccGoalList } from 'e-care-common-data-services/build/main/types/mcc-types';

enum observationCodes {
  Systolic = '8480-6',
  Diastolic = '8462-4',
  Egfr = '69405-9',
  Uacr = '9318-7',
  Wot = '29463-7',
  Blood_pressure = '85354-9'
}

enum observationValuesets {
  // Egfr = '2.16.840.1.113883.3.6929.3.1000',
  Egfr = '2.16.840.1.113762.1.4.1222.179',
  Uacr = '2.16.840.1.113883.3.6929.2.1002'
}

@Injectable({
  providedIn: 'root'
})

export class GoalsDataService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient, private messageService: MessageService) {
  }

  // Get Goals by Subject Id
  getGoals(id: string): Observable<MccGoalList> {
    return from(getSummaryGoals()).pipe(
      tap(_ => this.log('fetched Goal Summary')),
      catchError(this.handleError<MccGoalList>('getGoals'))
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
        var foo;
if (gt && gt.measure && gt.measure.coding && gt.measure.coding.length > 0) {
foo = gt.measure.coding[0].code;
} else {
  foo = 'xxxx';
}

        this.getMostRecentObservationResult(patientId, foo, true)
          .subscribe(obs => {
            let mostRecentResultValue = '';
            let observationDate = '';
            let rowHighlighted = false;
            let formattedTargetValue = '';
            if (obs !== undefined) {
              if (obs.status !== 'unknown') {
                if (getDisplayValueNew(obs)) {
                  //  TODO:  Fix to handle as any value type
                  mostRecentResultValue = getDisplayValueNew(obs);
                }


                if (obs.effectiveDateTime !== undefined) {
                  observationDate = obs.effectiveDateTime.toString();
                }

                [formattedTargetValue, rowHighlighted] = formatGoalTargetValue(gt, mostRecentResultValue);

                console.log({ mostRecentResultValue })
                console.log({ gt })


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
            }
          });
      });
    });
  }

  getPatientVitalSigns(patientId: string): Observable<VitalSignsTableData> {
    return new Observable(observer => {
      this.getObservationsByPanel(patientId, observationCodes.Blood_pressure)
        .pipe(finalize(() => {
          observer.complete();
        }))
        .subscribe(observations => {
          let i: number = 0;
          observations.map(obs => {
            let systolic = 0;
            let diastolic = 0;
            obs.component.map(c => {
              // This works now, may not with different data sets
              switch (c.code.coding[0].code) {
                case observationCodes.Diastolic:
                  diastolic = c.valueQuantity.value;
                  break;
                case observationCodes.Systolic:
                  systolic = c.valueQuantity.value;
                  break;
                default:
              }
            });
            const vs: VitalSignsTableData = {
              date: new Date((obs.effectiveDateTime)),
              diastolic,
              systolic
            };
            observer.next(vs);
          });
        });
    });
  }

  getPatientEgfr(patientId: string): Observable<EgfrTableData> {
    return new Observable(observer => {
      this.getSegementedObservationsByValueSet(patientId, observationValuesets.Egfr, "mL/min/1.73m2,mL/min")
        .pipe(finalize(() => {
          observer.complete();
        }))
        .subscribe(obsCollection => {
          obsCollection.observations.map(observations => {
            const display = this.formatEGFRCode(observations.primaryCode);
            observations.observations.forEach(obs => {
              const egfr: EgfrTableData = {
                date: new Date(obs.effectiveDateTime),
                test: display
              };
              egfr.egfr = obs.valueString ?? obs.valueQuantity
              egfr.unit = obs.valueQuantity.unit ?? "";
              egfr.isNumber = !obs.valueString
              observer.next(egfr);
            });
          })
        });
    });
  }

  formatEGFRCode(primaryCode: MccCoding): string {
    //"Glomerular filtration rate/1.73 sq M.predicted [Volume Rate/Area] in Serum, Plasma or Blood"
    if (primaryCode.display && primaryCode.display.indexOf("1.73 sq M.") > -1) {
      let formattedString = "";
      formattedString = primaryCode.display.substr(primaryCode.display.indexOf("sq M.") + 5);
      formattedString = formattedString.substr(0, formattedString.indexOf("["));
      formattedString = formattedString + "[" + primaryCode.code + "]";
      formattedString = formattedString.charAt(0).toUpperCase() + formattedString.slice(1);
      return "EGFR " + formattedString;
    }
    else return primaryCode.display;
  }

  getPatientUacr(patientId: string): Observable<UacrTableData> {
    return new Observable(observer => {
      this.getObservationsByValueset(patientId, observationValuesets.Uacr)
        .pipe(finalize(() => {
          observer.complete();
        }))
        .subscribe(observations => {
          observations.map(obs => {
            const uacr: UacrTableData = {
              date: new Date(obs.effectiveDateTime),
              uacr: obs.valueQuantity.value,
              unit: obs.valueQuantity.unit,
              test: obs.code.text
            };
            observer.next(uacr);
          });
        });
    });
  }

  getPatientWot(patientId: string): Observable<WotTableData> {
    return new Observable(observer => {
      this.getObservations(patientId, observationCodes.Wot)
        .pipe(finalize(() => {
          observer.complete();
        }))
        .subscribe(observations => {
          observations.map(obs => {
            switch (Constants.featureToggling.preferredUnits.wot) {
              case "kg":
                if (obs.valueQuantity.unit === "lb") {
                  obs.valueQuantity.value = +(obs.valueQuantity.value * 0.453592).toFixed(1);
                  obs.valueQuantity.unit = "kg";
                }
                break;
              case "lb":
                if (obs.valueQuantity.unit === "kg") {
                  obs.valueQuantity.value = +(obs.valueQuantity.value * 2.20462).toFixed(0);
                  obs.valueQuantity.unit = "lb";
                }
                break;
            };
            const wot: WotTableData = {
              date: new Date(obs.effectiveDateTime),
              value: obs.valueQuantity.value,
              unit: obs.valueQuantity.unit,
              test: obs.code.text
            };
            observer.next(wot);
          });
        });
    });
  }

  getMostRecentObservationResult(patientId: string, code: string, translate?: boolean): Observable<Observation> {

    return from(EccGetLatestObservation(code, translate)).pipe(
      tap(_ => this.log(`fetched Observation patientId=${patientId} code=${code}`)),
      catchError(this.handleError<Observation>(`getMostRecentObservationResult patientId=${patientId} code=${code}`))
    );
  }

  getObservations(patientId: string, code: string): Observable<Observation[]> {

    return from(EccGetObservations(code)).pipe(
      tap(_ => this.log(`fetched Observation patientId=${patientId} code=${code}`)),
      catchError(this.handleError<Observation[]>(`getObservations patientId=${patientId} code=${code}`))
    );
  }

  getObservationsByPanel(patientId: string, code: string): Observable<Observation[]> {
    return from(EccGetObservations(code, 'panel')).pipe(
      tap(_ => this.log(`fetched Observation patientId=${patientId} code=${code}`)),
      catchError(this.handleError<Observation[]>(`getObservations patientId=${patientId} code=${code}`))
    );
  }

  getObservationsByValueset(patientId: string, valueSet: string): Observable<Observation[]> {
    return from(EccGetObservationsByValueSet(valueSet)).pipe(
      tap(_ => this.log(`fetched Observation patientId=${patientId} valueSet=${valueSet}`)),
      catchError(this.handleError<Observation[]>(`getObservationsByValueset patientId=${patientId} valueSet=${valueSet}`))
    );
  }

  getSegementedObservationsByValueSet(patientId: string, valueSet: string, unitTypes?: string): Observable<ObservationCollection> {
    return from(getObservationsSegmented(valueSet, undefined, undefined, undefined, unitTypes)).pipe(catchError(this.handleError(`getSegementedObservationsByValueSet patientId=${patientId} valueSet=${valueSet}`)));
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
