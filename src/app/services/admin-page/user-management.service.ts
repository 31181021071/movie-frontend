import { Injectable } from '@angular/core';
import { ApiService } from '../common/api.service';
import { Observable } from 'rxjs';
import { AppConstants } from 'src/app/constants/app.constants';

@Injectable({
  providedIn: 'root'
})
export class UserManagementService {

  constructor(
    private apiService: ApiService 
  ) {}

  searchUser(param: any): Observable<any> {
    return this.apiService.doPost(AppConstants.SEARCH_USER_API_URL, param, true);
  }

  changeEnableUser(param: any): Observable<any> {
    return this.apiService.doPost(AppConstants.CHANGE_ENABLE_USER_API_URL, param, true);
  }
}
