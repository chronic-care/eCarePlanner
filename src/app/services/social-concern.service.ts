import { environment} from '../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import {MessageService} from './message.service';
import {Demographic} from './datamodel/demographics';
import {SocialConcerns} from './datamodel/socialconcerns';

@Injectable({
  providedIn: 'root'
})
export class SocialConcernService {

  private baseURL = '/socialconcern';


//  private baseURL = 'http://localhost:8081/socialconcern';
//  private queryURL = 'http://localhost:8081/socialconcern';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient,  private messageService: MessageService) { }



  /** GET Demographic by id. Return `undefined` when id not found */
  getSubjectNo404<Data>(id: string, subjectId: string): Observable<SocialConcerns> {

    const url = `${environment.mccapiUrl}${this.baseURL}/${id}?subject={subjectId}`;
	//  const url = `${environment.mccapiUrl}${this.baseURL}/${id}`;

    // const url = `${this.baseURL}/${id}?subject={subjectId}`;
    return this.http.get<SocialConcerns[]>(url)
      .pipe(
        map(socialConcerns => socialConcerns[0]), // returns a {0|1} element array
        tap(h => {
          const outcome = h ? `fetched` : `did not find`;
          this.log(`${outcome} hero id=${id}`);
        }),
        catchError(this.handleError<SocialConcerns>(`Subject id=${subjectId}`))
      );
  }

  /** GET Subject by id. Will 404 if id not found */
  getSubject(id: string): Observable<Demographic> {
	 const url = `${environment.mccapiUrl}${this.baseURL}/${id}?subject={subjectId}`;
    // const url = `${this.baseURL}/${id}?subject={subjectId}`;
    return this.http.get<Demographic>(url).pipe(
      tap(_ => this.log(`fetched subject id=${id}`)),
      catchError(this.handleError<Demographic>(`getSubject id=${id}`))
    );
  }


  getPateintsSortedByNamne()
  {
    /*
    https://api.logicahealth.org/MCCeCarePlanTest/open/Patient?_sort=family,given
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
    this.messageService.add(`HeroService: ${message}`);
  }


}
