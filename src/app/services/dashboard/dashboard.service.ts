import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConstants } from "../../constants/app.constants";
import { environment } from '../../../environments/environment';
import { User } from '../../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http:HttpClient) { }

  getLoansDetails(id: number){
    return this.http.get(environment.rooturl + AppConstants.LOANS_API_URL+ "?id="+id,{ observe: 'response',withCredentials: true });
  }
}
