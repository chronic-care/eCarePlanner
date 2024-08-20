import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

export type LogRequest = {
  level?: 'error' | 'warn' | 'info' | 'debug';
  event?: string;
  page?: string;
  message: string;
  resourceCount?: number;
}

export type LogResponse = {
  readonly url: string;
  readonly ok: boolean;
  readonly status: number;
  readonly statusText: string;
  readonly body: any;
}

@Injectable({
  providedIn: 'root'
})
export class LoggingService {

  private apiUrl = environment.logEndpointUri;
  private apiKey = environment.logApiKey;

  constructor(private http: HttpClient) { }

  log(request: LogRequest): Observable<LogResponse | null> {
    const url = `${this.apiUrl}/log/do-log`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.apiKey}`
    });

    return this.http.post<LogResponse>(url, request, { headers })
      .pipe(
        catchError(error => {
          console.error('Error logging event:', error);
          return of({
            url: '/log/do-log',
            ok: false,
            status: 0,
            statusText: 'Error',
            body: error
          } as LogResponse);
        })
      );
  }
}
