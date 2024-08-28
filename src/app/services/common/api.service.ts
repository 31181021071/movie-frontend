import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { LoadingService } from './loading.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient, private loadingService: LoadingService) { }

  // Phương thức GET
  doGet(endpoint: string, withCredentials: boolean = false): Observable<any> {
    const url = environment.rooturl + endpoint;
    this.loadingService.setLoading(true);
    return this.http.get(url, { observe: 'response', withCredentials }).pipe(
      finalize(() => this.loadingService.setLoading(false))
      // catchError(this.handleError)
    );
  }

  // Phương thức POST
  doPost(endpoint: string, body: any, withCredentials: boolean = false): Observable<any> {
    const url = environment.rooturl + endpoint;
    this.loadingService.setLoading(true)
    return this.http.post(url, body, { observe: 'response', withCredentials: withCredentials }).pipe(
      finalize(() => this.loadingService.setLoading(false))
      // catchError(this.handleError)
    );
  }

  // Hàm xử lý lỗi
  private handleError(error: HttpErrorResponse) {
    console.error('An error occurred:', error.message);
    return throwError(() => new Error('Something went wrong; please try again later.'));
  }
}
