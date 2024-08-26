import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { User } from "src/app/model/user.model";
import { Observable, Subject } from 'rxjs';
import { AppConstants } from 'src/app/constants/app.constants';
import { environment } from '../../../environments/environment';
import { ApiService } from '../common/api.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient, private apiService: ApiService) {
    
  }

  validateLoginDetails(user: User): Observable<any> {
    window.sessionStorage.setItem("userdetails",JSON.stringify(user));
    return this.apiService.doGet(AppConstants.LOGIN_API_URL, true);
  }

  signUpNewAccount(param: any): Observable<any> {
    return this.apiService.doPost(AppConstants.SIGN_UP_API_URL, param, true);
  }

}
