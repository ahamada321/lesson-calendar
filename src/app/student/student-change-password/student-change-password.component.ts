import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MyOriginAuthService } from 'src/app/auth/shared/auth.service';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-student-change-password',
  templateUrl: './student-change-password.component.html',
  styleUrls: ['./student-change-password.component.scss'],
})
export class StudentChangePasswordComponent implements OnInit {
  userData: any;
  state_info = true;
  state_info1 = true;
  coupon_switch = true;

  data: Date = new Date();

  constructor(private auth: MyOriginAuthService, private router: Router) {}

  ngOnInit() {
    let navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.add('navbar-transparent');
    let body = document.getElementsByTagName('body')[0];
    body.classList.add('settings-page');
    this.getUser();
  }
  ngOnDestroy() {
    let navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.remove('navbar-transparent');
    if (navbar.classList.contains('nav-up')) {
      navbar.classList.remove('nav-up');
    }
    let body = document.getElementsByTagName('body')[0];
    body.classList.remove('settings-page');
  }

  getUser() {
    const userId = this.auth.getUserId();
    this.auth.getUserById(userId).subscribe(
      (foundUser) => {
        this.userData = foundUser;
      },
      (err) => {}
    );
  }

  updateUser(userForm: NgForm) {
    this.auth.updateUser(this.userData._id, userForm.value).subscribe(
      (UserUpdated) => {
        userForm.reset(userForm.value);
        this.showSwalSuccess();
      },
      (err) => {}
    );
  }

  private showSwalSuccess() {
    Swal.fire({
      // title: 'User infomation has been updated!',
      icon: 'success',
      text: 'ユーザー情報が更新されました！',
      customClass: {
        confirmButton: 'btn btn-primary btn-lg',
      },
      buttonsStyling: false,
      timer: 5000,
    }).then(() => {
      this.router.navigate(['/rentals', { registered: 'success' }]);
    });
  }
}
