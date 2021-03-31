import { EventEmitter, Injectable, Output } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { User } from 'src/app/shared/modal/user';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class UsersService {
  url: string;
  public isLoggedIn = new BehaviorSubject(false);
  @Output() getLoggedInData: EventEmitter<any> = new EventEmitter();

  constructor(private http: HttpClient) {
    this.url = 'assets/user.json';
  }

  authUser() {
    return !!localStorage.getItem('currentUser');
  }

  getUserList(): Observable<User[]> {
    return this.http.get<HttpResponse<User[]>>(this.url).pipe(
      map((data: any) => {
        return data;
      })
    );
  }
}
