import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/shared/service/users.service';
import { User } from 'src/app/shared/modal/user';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(
    private userService: UsersService,
    private fb: FormBuilder,
    private route: Router,
    private message: NzMessageService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      userId: [null, [Validators.required]],
      password: [null, [Validators.required]],
    });
  }

  moveBack() {
    this.route.navigate(['']);
  }

  submitForm(): void {
    if (this.loginForm.valid) {
      this.userService.getUserList().subscribe(
        (resp) => {
          let loginData = resp['usersDB'].filter(
            (data) =>
              data.userid === this.loginForm.value.userId &&
              data.password === this.loginForm.value.password
          );
          if (loginData.length > 0) {
            this.message.create('success', `Successfully Login`);
            localStorage.setItem('currentUser', JSON.stringify(loginData));
            this.userService.getLoggedInData.emit(loginData);
            this.route.navigateByUrl('/galary');
          } else {
            this.message.create(
              'error',
              `Please enter correct USERNAME OR PASSWORD`
            );
          }
        },
        (error) => {}
      );
    } else {
      for (const i in this.loginForm.controls) {
        this.loginForm.controls[i].markAsDirty();
        this.loginForm.controls[i].updateValueAndValidity();
      }
    }
  }
}
