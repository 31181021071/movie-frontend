import { Component, OnInit } from '@angular/core';
import { AppConstants } from 'src/app/constants/app.constants';
import { User } from 'src/app/model/user.model';
import { UserManagementService } from 'src/app/services/admin-page/user-management.service';
import { SharedConfirmService } from 'src/app/services/common/confirm.service';
import { SharedToastService } from 'src/app/services/common/toast.service';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements OnInit {

  searchCondition = {
    name: "",
    email: ""
  }

  userList = []

  totalUserSearch = 0;
  size = 30;

  constructor(
    private userManagementService: UserManagementService, 
    private confirmService: SharedConfirmService,
    private toastService: SharedToastService
  ) { }

  ngOnInit(): void {
    this.onSearch();
  }

  onSearch() {
    let param = {
      name: this.searchCondition.name,
      email: this.searchCondition.email,
      page: 0,
      size: this.size
    }
    this.search(param);
  }

  search(param: any) {
    this.userManagementService.searchUser(param).subscribe(
      response => {
        this.totalUserSearch = response.body.totalElements
        // for (let user of response.body.content) {
        //   user.isEnable = user.isEnable == 1 ? true : false;
        // }
        this.userList = response.body.content
        console.log(this.userList);
      }
    )
  }

  onClear() {
    this.searchCondition = {
      name: "",
      email: ""
    };
  }

  onChangePage(event: any) {
    let param = {
      name: this.searchCondition.name,
      email: this.searchCondition.email,
      page: event.page,
      size: event.rows
    }
    this.search(param);
  }

  onChangeEnable(user: any) {
    let message = "";
    if (user.enable) {
      message = "Are you sure want to enable " + user.email + "?"
    } else {
      message = "Are you sure want to disable " + user.email + "?"
    }
    this.confirmService.confirm(message).subscribe(
      result => {
        if (result) {
          let param = {
            email: user.email,
            enable: user.enable
          }
          this.userManagementService.changeEnableUser(param).subscribe(
            response => {
              if (response.body.code != AppConstants.I0002) {
                this.toastService.showError(AppConstants.MESSAGE_TRANSLATE.concat(response.body.code))
              } else {
                this.toastService.showSuccess(AppConstants.MESSAGE_TRANSLATE.concat(response.body.code))
              }
            }
          )
        } else {
          user.enable = !user.enable;
        }
      }
    )
  }

}
