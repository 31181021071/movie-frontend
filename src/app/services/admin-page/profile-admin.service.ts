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
export class ProfileAdminService {

  constructor(private http: HttpClient, private apiService: ApiService) {
    
  }

  updateProfileAdmin(param: any): Observable<any> {
    return this.apiService.doPost(AppConstants.UPDATE_PROFILE_API_URL, param, true);
  }

}