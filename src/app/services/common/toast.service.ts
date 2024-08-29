import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class SharedToastService {

  constructor(
    private translateService: TranslateService,
    private messageService: MessageService
  ) { }

  // Define a common function for translate
  translate(string: string) {
    return this.translateService.instant(string) || string;
  }

  showInfo(detail: string) {
    this.messageService.add({ severity: 'info', summary: '', detail: this.translate(detail), life: 100000 });
  }

  showWarn(detail: string) {
    this.messageService.add({ severity: 'warn', summary: '', detail: this.translate(detail), life: 100000 });
  }

  showError(detail: string) {
    this.messageService.add({ severity: 'error', summary: '', detail: this.translate(detail), life: 100000 });
  }

  showSuccess(detail: string) {
    this.messageService.add({ severity: 'success', summary: '', detail: this.translate(detail), life: 100000 });
  }
}
