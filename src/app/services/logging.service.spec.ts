import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { LoggingService, LogRequest, LogResponse } from './logging.service';
import { environment } from 'src/environments/environment';

describe('LoggingService', () => {
  let service: LoggingService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [LoggingService]
    });

    service = TestBed.inject(LoggingService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify(); // Verifies that no unmatched requests are outstanding.
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should send a log request and return a successful response', () => {
    const logRequest: LogRequest = {
      level: 'info',
      event: 'TestEvent',
      page: 'TestPage',
      message: 'This is a test message'
    };

    const mockResponse: LogResponse = {
      url: '/log/do-log',
      ok: true,
      status: 200,
      statusText: 'OK',
      body: {}
    };

    service.log(logRequest).subscribe(response => {
      expect(response).toEqual(mockResponse);
    });

    const req = httpMock.expectOne(`${environment.logEndpointUri}/log/do-log`);
    expect(req.request.method).toBe('POST');
    expect(req.request.headers.get('Authorization')).toBe(`Bearer ${environment.logApiKey}`);
    req.flush(mockResponse); // Simulates a successful response from the server.
  });

  it('should handle an error response correctly', () => {
    const logRequest: LogRequest = {
      level: 'error',
      event: 'ErrorEvent',
      page: 'ErrorPage',
      message: 'This is a test error message'
    };

    service.log(logRequest).subscribe(response => {
      expect(response).toEqual({
        url: '/log/do-log',
        ok: false,
        status: 0,
        statusText: 'Error',
        body: 'Mock error'
      } as LogResponse);
    });

    const req = httpMock.expectOne(`${environment.logEndpointUri}/log/do-log`);
    expect(req.request.method).toBe('POST');
    req.flush('Mock error', { status: 500, statusText: 'Internal Server Error' });
  });
});
