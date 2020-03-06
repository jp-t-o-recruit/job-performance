import { Injectable } from "@angular/core";
import { Subject, Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';

export interface HttpParams {
  id: string;
  name: string;
}

@Injectable({ providedIn: "root" })
export class DataSourceService {

  private REST_API_SERVER = "https://script.google.com/macros/s/AKfycbzhogT8h2znlZA2ZiKFfMOQgds16soAgopF5l1l7lXDtkDInCLB/exec";

  readonly postOptions = {
    headers: new HttpHeaders({
      Accept: 'application/json',
      // 'Content-Type':  'application/json',
      'Content-Type': 'application/x-www-form-urlencoded'
    }),
  };

  constructor(private httpClient: HttpClient) {
    // this.postOptions.headers.append('Content-Type', 'application/x-www-form-urlencoded');
  }

  get(): Observable<any> {
    return this.httpClient.get(this.REST_API_SERVER,  { responseType: 'json' });

    // mineTypeがtext形式の方式例
    // return this.httpClient.get(this.REST_API_SERVER, {responseType: 'text'})
    // .pipe(
    //   tap( // Log the result or error
    //     data => console.log('正常', data),
    //     error => console.log('エラー', error)
    //   )
    // );
  }

  post(params: any){
    // return this.httpClient.post(this.REST_API_SERVER, params, { responseType: 'json' }).pipe(

    return this.httpClient.post(this.REST_API_SERVER, params, this.postOptions).pipe(
      catchError(this.handleError)
    );

    // return this.httpClient.jsonp(this.REST_API_SERVER, 'callback').pipe(
    //   // catchError(this.handleError('post', params))
    //   // catchError(this.handleError)
    //   tap(console.log)
    // );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };
}
