import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { AppConstants } from 'src/app/constants/app.constants';
import { User } from 'src/app/model/user.model';
import { ProfileAdminService } from 'src/app/services/admin-page/profile-admin.service';
import { SharedToastService } from 'src/app/services/common/toast.service';

@Component({
  selector: 'app-profile-admin',
  templateUrl: './profile-admin.component.html',
  styleUrls: ['./profile-admin.component.css']
})
export class ProfileAdminComponent implements OnInit {
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

  constructor(private profileAdminService: ProfileAdminService, private toastService: SharedToastService) { }

  ngOnInit(): void {
    if(sessionStorage.getItem('userdetails')){
      this.user = JSON.parse(sessionStorage.getItem('userdetails')!);
    }
  }

  onUpdateProfile() {
    let param = {
      email: this.user.email,
      name: this.user.name
    }
    this.profileAdminService.updateProfileAdmin(param).subscribe(response => {
      if (response.body.code != AppConstants.I0002) {
        this.toastService.showError(AppConstants.MESSAGE_TRANSLATE.concat(response.body.code))
      } else {
        this.toastService.showSuccess(AppConstants.MESSAGE_TRANSLATE.concat(response.body.code))
        window.sessionStorage.setItem("userdetails",JSON.stringify(this.user));
      }
    })
  }

}
