import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  // Phương thức GET
  doGet(endpoint: string, withCredentials: boolean = false): Observable<any> {
    const url = environment.rooturl + endpoint;
    return this.http.get(url, { observe: 'response', withCredentials }).pipe(
      // catchError(this.handleError)
    );
  }

  // Phương thức POST
  doPost(endpoint: string, body: any, withCredentials: boolean = false): Observable<any> {
    const url = environment.rooturl + endpoint;
    return this.http.post(url, body, { observe: 'response', withCredentials }).pipe(
      // catchError(this.handleError)
    );
  }

  // Hàm xử lý lỗi
  private handleError(error: HttpErrorResponse) {
    console.error('An error occurred:', error.message);
    return throwError(() => new Error('Something went wrong; please try again later.'));
  }
}
