import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TeacherComponent } from '../teacher/teacher.component';
import { TeacherChangePasswordComponent } from './teacher-change-password/teacher-change-password.component';
import { TeacherEditComponent } from './teacher-edit/teacher-edit.component';
import { TeacherMypageComponent } from './teacher-mypage/teacher-mypage.component';

const routes: Routes = [
  {
    path: 'teacher',
    component: TeacherComponent,
    children: [
      {
        path: '',
        component: TeacherMypageComponent,
        // canActivate: [AuthGuard],
      },
      {
        path: 'edit',
        component: TeacherEditComponent,
        // canActivate: [AuthGuard],
      },
      // {
      //   path: "revenues/:monthId",
      //   component: TeacherReportListMonthlyComponent,
      //   canActivate: [AuthGuard],
      // },
      {
        path: 'password',
        component: TeacherChangePasswordComponent,
        // canActivate: [AuthGuard],
      },
      // {
      //   path: "report/create",
      //   component: TeacherReportCreateComponent,
      //   canActivate: [AuthGuard],
      // },
    ],
  },
];

@NgModule({
  declarations: [
    TeacherComponent,
    TeacherChangePasswordComponent,
    TeacherEditComponent,
    TeacherMypageComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [],
  providers: [],
})
export class TeacherModule {}