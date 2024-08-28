import { Component } from '@angular/core';
import { LoadingService } from './services/common/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bank-app-ui';

  constructor(public loadingService: LoadingService){}
}
