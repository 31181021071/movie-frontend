import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { DialogService } from 'primeng/dynamicdialog';

@Injectable({
  providedIn: 'root',
})
export class SharedDialogService {

  constructor(
    public dialogService: DialogService
  ) { }

  openDialog(component: any, params: any) {
    const ref = this.dialogService.open(component, {
      header: params.title,
      width: params.width || '600px',
      dismissableMask: false,
      maximizable: true,
      modal: true,
      data: params.data
    });
    return ref;
  }

}
