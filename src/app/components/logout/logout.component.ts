import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login/login.service';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user.model';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
  model: User = {
    id: 0,
    name: '',
    email: '',
    password: '',
    role: '',
    statusCd: '',
    statusMsg: '',
    authStatus: ''
  };
  
  constructor(private router : Router) { 

  }

  ngOnInit(): void {
    window.sessionStorage.setItem("userdetails","");
    window.sessionStorage.setItem("XSRF-TOKEN","");
    window.sessionStorage.setItem("Authorization","");
    this.router.navigate(['/login']);
  }


}
