import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {

  activeTab: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onTabChange(event: any) {
    this.activeTab = event.index;
  }

}
