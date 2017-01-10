import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { AuthenticationService } from './AuthenticationService';

@Injectable()
export class GetDataService {
    constructor(private http: Http,private auth:AuthenticationService) { }

     getData(url): Promise<any> {
         let headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded', 'Authorization': 'JWT ' + this.auth.getToken() });
        return this.http.get(url,{headers })
            .toPromise()
            // .then(response => response.json() as any)
            // .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('Error occurred', error);
        return Promise.reject(error.message || error);
    }
}