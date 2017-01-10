import { Component, OnInit } from '@angular/core';

import { GetDataService } from '../../services/get-data.service';
import { PostDataService } from '../../services/post-data.service';

@Component({
    //moduleId: module.id,
    selector: 'DelAdmin',
    templateUrl: './del_admin.html'
})
export class DelAdmin implements OnInit {
    rows: any[];
    constructor(
         private dataservice: GetDataService,
         private psd:PostDataService
    ) { }
    model = {selected_admin_uid:'defaultUID'};
    
     getData(url): void {
        this.dataservice
            .getData(url)
            .then( (res) => {
                 this.rows = res.json().result.results;
                 console.log(this.rows);
            })
    }

    delAdmin(){
        let _M = this.model;

        let url = 'https://oyicab.herokuapp.com/api/disable_user' ;
        
        let body = `uid=${_M.selected_admin_uid}&action=2`;
        this.psd.postData(url,body).then( (res) => {
             if(res.status == "OK"){
                 alert(res.message)
             }
        })
    }
    
    ngOnInit() {
        this.getData('https://oyicab.herokuapp.com/api/get_users?user_type=1')
        //this.dataservice.postData('/api/get_drivers');
    }
}
