import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MessageService } from './message.service';
import { Observable, of, from } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import {
  getContacts
} from 'e-care-common-data-services';
import { MccPatientContact } from 'e-care-common-data-services/build/main/types/mcc-types';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient, private messageService: MessageService) { }

  /** GET Contact by id. Return `undefined` when id not found */
  getContactNo404(id: string): Observable<MccPatientContact> {
    return from(getContacts())
      .pipe(
        map(contacts => contacts[0]), // returns a {0|1} element array
        tap(h => {
          const outcome = h ? `fetched` : `did not find`;
          this.log(`${outcome} hero id=${id}`);
        }),
        catchError(this.handleError<MccPatientContact>(`Plan id=${id}`))
      );
  }

  /** GET contacts by subject id. Will 404 if id not found */
  getContactsBySubjectAndCareplan(subjectId: string, careplanId: string): Observable<MccPatientContact[]> {
    return from(getContacts(careplanId)).pipe(
      tap((_) => { this.log(`fetched Contacts id=${subjectId}, careplan=${careplanId}`); console.log("fetched contacts data", _); }),
      catchError(this.handleError<MccPatientContact[]>(`getContacts id=${subjectId}, careplan=${careplanId}`))
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
