import { Component, OnInit } from '@angular/core';
import { MyOriginAuthService } from 'src/app/auth/shared/auth.service';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/services/user.model';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-teacher-notification',
  templateUrl: './teacher-notification.component.html',
  styleUrls: ['./teacher-notification.component.scss'],
})
export class TeacherNotificationComponent implements OnInit {
  userData!: User;

  constructor(
    private auth: MyOriginAuthService,
    private router: Router,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.getMe();
  }
  ngOnDestroy() {}

  getMe() {
    const userId = this.auth.getUserId();
    this.userService.getUserById(userId).subscribe(
      (foundUser) => {
        this.userData = foundUser;
      },
      (err) => {}
    );
  }
}
