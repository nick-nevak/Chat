import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';


export const baseUrl = 'https://localhost:44335/Account'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }

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

}
