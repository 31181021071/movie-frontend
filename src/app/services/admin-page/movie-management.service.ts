import { Injectable } from '@angular/core';
import { ApiService } from '../common/api.service';
import { Observable } from 'rxjs';
import { AppConstants } from 'src/app/constants/app.constants';

@Injectable({
  providedIn: 'root'
})
export class MovieManagementService {

  constructor(
    private apiService: ApiService
  ) { }

  getInit(): Observable<any> {
    return this.apiService.doGet(AppConstants.MOVIE_MANAGEMENT_GET_INIT_API_URL, true);
  }
}
