import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
//import { UserService } from './user.service';

import { AuthenticationService } from './AuthenticationService';

@Injectable()
export class LoggedInGuard implements CanActivate {
  constructor(private auth:AuthenticationService) {}
  private t:boolean = false;
  
  canActivate() {
    if(localStorage.getItem('token') == this.auth.getToken()) this.t = true ;   
    else this.t = false;
    return this.t;
  }

}