import { Component, OnInit } from '@angular/core';
import { KeysPipe } from '../../filters/KeysPipe';    

import { GetDataService } from '../../services/get-data.service';
import { PostDataService } from '../../services/post-data.service';

@Component({
   // moduleId: module.id,
    selector: 'ViewAllCustomers',
    templateUrl: './view_all_customers.html',
    providers: [GetDataService]
})
export class ViewAllCustomers implements OnInit {
    rows: any[];
    selectedCust = {};
    showpopup = false;
    showLoader = true;

    constructor(
        private dataservice: GetDataService,
        private psd:PostDataService
    ) { }
     

    getData(url): void {
        this.dataservice
            .getData(url)
            .then( (res) => {
                this.rows = res.json().result.results;
                 this.showLoader = false;
            })
    }

    delCust(uid){
        let url = 'https://oyicab.herokuapp.com/api/disable_user' ;    
        let body = `uid=${uid}&action=2`;
        this.psd.postData(url,body).then( (res) => {
             if(res.status == 200 ){
                 this.rows.filter( (e) => e.uid = uid )
                 this.showpopup = false;
                 alert('User Disabled')
             }
        })
    }

    ngOnInit() {
        this.getData('https://oyicab.herokuapp.com/api/get_users?user_type=1')
     }
}
