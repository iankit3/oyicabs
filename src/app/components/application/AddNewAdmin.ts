import { Component, OnInit } from '@angular/core';

import { PostDataService } from '../../services/post-data.service';

@Component({
    //moduleId: module.id,
    selector: 'AddNewAdmin',
    templateUrl: './add_new_admin.html'
})
export class AddNewAdmin implements OnInit {
    constructor(
        public post: PostDataService
    ) { }

    model = {username:'ankit',password:'test2341'}
    onSubmit(){

    }
    newAdmin() { 
        let _M = this.model;
        console.log(_M);
        debugger;
        let url = 'https://oyicab.herokuapp.com/api/signup' ;
        
        let body = `name=${_M.username}&password=${_M.password}&userType=1`;
            
        this.post.postData(url,body).then( (res) => {
            console.log(res);
            if(res.statusText == "OK"){
                //this.newdriveradded = true;
                window.alert("New Admin named "+_M.username+" added");
            }
        })
    }
    ngOnInit() { }
}
