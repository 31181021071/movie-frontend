import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ConfirmationService } from 'primeng/api';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedConfirmService {

  constructor(
    private confirmationService: ConfirmationService
  ) { }

  confirm(message: any): Observable<boolean> {
    return new Observable<boolean>((observer) => {
      this.confirmationService.confirm({
        message: message || "Are you sure?",
        header: "Confirmation",
        icon: "pi pi-question-circle",
        acceptLabel: "OK",
        rejectLabel: "Cancel",
        accept: () => {
          observer.next(true);
          observer.complete();
        },
        reject: () => {
          observer.next(false);
          observer.complete();
        },
      });
    });
  }

  info(data: any): Observable<boolean> {
    return new Observable<boolean>((observer) => {
      this.confirmationService.confirm({
        message: data?.message,
        header: "Information",
        icon: 'pi pi-info-circle',
        rejectVisible: false,
        acceptLabel: "OK",
        accept: () => {
          observer.next(true);
          observer.complete();
        }
      });
    });
  }
}

