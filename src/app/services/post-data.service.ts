import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { AuthenticationService } from '../services/AuthenticationService';
import { contentHeaders } from '../models/Header';

@Injectable()
export class PostDataService {

    constructor(private http: Http ,private auth:AuthenticationService) { }

     postData(url,body): Promise<any> {
    let headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded', 'Authorization': 'JWT ' + this.auth.getToken() });
        return this.http.post(url,body, { headers })
            .toPromise()
            
    }

    private handleError(error: any): Promise<any> {
        console.error('Error occurred', error);
        return Promise.reject(error.message || error);
    }
}