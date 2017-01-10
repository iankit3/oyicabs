import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable()
export class LimitAccess implements CanActivate {
  constructor() {}
  private t:boolean = false;
  
  canActivate() {
    if(localStorage.getItem('user_type') == '1' ) this.t = true ;   
    else this.t = false;
    return this.t;
  }

}