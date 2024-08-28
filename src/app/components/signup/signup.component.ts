import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { AppConstants } from 'src/app/constants/app.constants';
import { User } from 'src/app/model/user.model';
import { ApiService } from 'src/app/services/common/api.service';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
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

  errorMessage = ""

  constructor(
    private loginService: LoginService,
    private translateService: TranslateService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  signUp(signUpForm: NgForm) {
    let param = {
      email: this.user.email,
      pwd: this.user.password
    }
    this.loginService.signUpNewAccount(param).subscribe(
      result => {
        if (result.body.code != AppConstants.I0001) {
          this.errorMessage = AppConstants.MESSAGE_TRANSLATE.concat(result.body.code);
        } else {
          this.router.navigate(['login']);
        }
      }
    )
  }

}
