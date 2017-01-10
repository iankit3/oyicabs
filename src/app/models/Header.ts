import { Headers } from '@angular/http';
import { AuthenticationService } from '../services/AuthenticationService';

let AUTH = "";
class Head{
  constructor(auth:AuthenticationService){
	  AUTH = auth.getToken();
	  debugger;
  }
}

export const contentHeaders = new Headers();
//contentHeaders.append('Accept', 'application/json');
contentHeaders.append('Content-Type', 'application/x-www-form-urlencoded');

contentHeaders.append('Authorization', 'JWT'+AUTH);
//headers:
	//Authorization: “JWT ” + token