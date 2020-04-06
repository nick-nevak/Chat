import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { Router } from '@angular/router';


export const baseUrl = 'https://localhost:44335/Account'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  get isLoggedIn(): boolean { return !!this._username; }
  get username(): string { return this._username; }

  redirectUrl: string;
  private _username: string = 'User1';

  constructor(private httpClient: HttpClient,
              private router: Router) { }

  createAccount(user: User): Observable<any> {
    // const user2 = {
    //   Email: user.email,
    //   Password: user.password
    // };
    return this.httpClient.post(baseUrl + '/Create', user);
  }

  login(user: User): Observable<any> {
    return this.httpClient.post(baseUrl + '/Login', user);
  }

  logout(): Observable<any> {
    return this.httpClient.post(baseUrl + '/Logout', null);
  }

  loginMock(username: string): Observable<boolean> {
    this._username = username;
    const result = true
    if(this.redirectUrl && result === true) {
      this.router.navigateByUrl(this.redirectUrl);
    }
    return of(result);
  }

}
