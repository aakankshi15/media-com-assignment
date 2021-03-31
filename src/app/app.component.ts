import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from './shared/service/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Media-App';
  isLoggedIn: boolean = false;
  userInfo: any;

  constructor(private userService: UsersService, private router: Router) {
    this.getLoginInfo();
    userService.getLoggedInData.subscribe((data) => this.getLoginInfo());
  }

  public getLoginInfo(): void {
    if (localStorage.getItem('currentUser')) {
      let userData = JSON.parse(localStorage.getItem('currentUser'));
      this.userInfo = userData[0];
      this.isLoggedIn = true;
    }
  }

  openDrawer() {
    var x = document.getElementById('myTopnav');
    if (x.className === 'topnav') {
      x.className += ' responsive';
    } else {
      x.className = 'topnav';
    }
  }

  moveLogin() {
    this.router.navigateByUrl('/login');
  }

  logout() {
    this.isLoggedIn = false;
    localStorage.removeItem('currentUser');
    this.router.navigateByUrl('/');
  }
}
