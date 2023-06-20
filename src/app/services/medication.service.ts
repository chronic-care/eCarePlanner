import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MessageService } from './message.service';
import { from, Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { getSummaryMedicationRequests } from 'e-care-common-data-services';
import { MccMedicationSummaryList } from 'e-care-common-data-services/build/main/types/mcc-types';


@Injectable({
  providedIn: 'root'
})
export class MedicationService {
  public httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient, private messageService: MessageService) { }

  /** GET medicationsummary by subject id and careplan Id.  Will 404 if id not found */
  getMedicationSummaryBySubjectAndCareplan(subjectId: string, careplanId: string): Observable<MccMedicationSummaryList> {
    return from(getSummaryMedicationRequests(careplanId)).pipe(
      tap((_) => { this.log(`fetched Medication Lists id=${subjectId}, careplan=${careplanId}`); console.log("Fetched Medications", _); }),
      catchError(this.handleError<MccMedicationSummaryList>(`getContacts id=${subjectId}, careplan=${careplanId}`))
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
    this.messageService.add(`contact-service: ${message}`);
  }

}
