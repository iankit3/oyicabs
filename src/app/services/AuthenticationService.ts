import { Injectable } from '@angular/core';
import { Http, Headers} from '@angular/http';
//import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'

@Injectable()
export class AuthenticationService {
  private loggedIn = false;
  private URL = 'https://oyicab.herokuapp.com/api/login';
  private _token = "";

  constructor(private http: Http) {
    this.loggedIn = !!localStorage.getItem('token');
  }
  getToken(){
    let __token = "";
      //if(this.loggedIn){
        __token = this._token;
     // } 

    return __token;
  }


  login(user) {
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded'});
    let body = `username=${user.username}&password=${user.password}`;

    return this.http.post(this.URL,body, { headers })
      .map(res => res.json())
      .map((res) => {
        if (res.status == 'OK') {
          this._token = res.token;
          localStorage.setItem('token', res.token);
          localStorage.setItem('user_type', res.userType);
          this.loggedIn = true;
        }
        return res;
      });
  }

  logout() {
    localStorage.removeItem('token');
    this.loggedIn = false;
  }

  isLoggedIn() {
    return this.loggedIn;
  }
}