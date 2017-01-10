import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../../services/AuthenticationService';

@Component({
    selector: 'login',
    //templateUrl:'template/signin.html' ,
    //templateUrl:'/template/signin.html'
    template: `
        <div class="col-md-4 col-md-offset-3" style="padding:1em">
      <form (ngSubmit)="onSubmit()" #loginform="ngForm">
             <div class="input-group mb15">
                <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
                <input type="text" name="username" [(ngModel)]="model.username" class="form-control" placeholder="Username">
             </div>
             <br>
              <div class="input-group mb15">
                  <span class="input-group-addon"><i class="glyphicon glyphicon-lock"></i></span>
                  <input type="password" name="password" [(ngModel)]="model.password" class="form-control" placeholder="Password">
             </div>
               <br>         
              <div class="clearfix">
                 <div class="pull-left">
                     <div class="ckbox ckbox-primary mt10">
                         <input type="checkbox" id="rememberMe" value="1">
                         <label for="rememberMe">Remember Me</label>
                     </div>
                 </div>

                 <div class="pull-right">
                       <button (click)="newLogin(); false" type="submit" class="btn btn-success">Sign In <i class="fa fa-angle-right ml5"></i></button>
                  </div>
             </div>                      
        </form>
    </div>
  `
})
export class LoginComponent {
    //constructor(private authenticationService: AuthenticationService, private router: Router) { }
    public isLoggedIn = false;
    public model = { username: "", password: "" };
    constructor(private authenticationService: AuthenticationService, private router: Router) {
        this.isLoggedIn = authenticationService.isLoggedIn();
    }

    onSubmit(event) {
        debugger;
        event.preventDefault();
    }

    newLogin() {
        let user = this.model;
        this.authenticationService.login(user).toPromise().then((res) => {
            debugger;
            if (res.status == 'OK') {
                this.router.navigate(['application']);
            }
        });
    }
}