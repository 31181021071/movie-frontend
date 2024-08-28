import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { MenuItem } from 'primeng/api';
import { User } from 'src/app/model/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  menuBarItems: MenuItem[] = [];
  
  user: User = {
    id: 0,
    name: '',
    email: '',
    password: '',
    role: '',
    statusCd: '',
    statusMsg: '',
    authStatus: ''
  };

  constructor(private translate: TranslateService, private router: Router) {
    translate.setDefaultLang('en');
  }

  ngOnInit() {
    if(sessionStorage.getItem('userdetails')){
      this.user = JSON.parse(sessionStorage.getItem('userdetails')!);
    }
    this.menuBarItems = [
      {
          label: 'Home',
          icon: 'pi pi-home',
          url: "/home"
      }
  ]

  }

  handleLoginClick() {
    this.router.navigate(['login']);
  }

  handleProfileClick() {
    if (this.user.role == 'user') {
      this.router.navigate(['profile-user']);
    } else {
      this.router.navigate(['profile-admin']);
    }
  }

  handleLogoutClick() {
    this.router.navigate(['logout']);
  }

}
