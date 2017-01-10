import { Component ,Directive } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../../services/AuthenticationService';
// import { HomeComponent } from './components/home.component';
// import { LoginComponent } from './components/login.component';


@Component({
   //moduleId: module.id,
    selector:'app-root',
   // templateUrl:'template/index.html'
    template: `
     <div class="container-fluid col-md-12">
       <router-outlet></router-outlet>
     </div>
   `
})
export class AppComponent{
 

}
