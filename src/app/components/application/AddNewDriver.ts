import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';

import { PostDataService } from '../../services/post-data.service';

import { Driver } from '../../models/Driver';
import { contentHeaders } from '../../models/Header';

@Component({
    //moduleId: module.id,
    selector: 'AddNewDriver',
    templateUrl: './add_new_driver.html'
})
export class AddNewDriver implements OnInit {
    constructor(public router: Router,
                public http: Http,
                public post: PostDataService
                ) { }
    
    model = new Driver(18, 'Dr Dre',1020,'M','email@aXY.com','BMW','cab',3,'123m','ka31123',1213,'password');
    submitted = false;
    newdriveradded = false;
    onSubmit(){
        this.submitted = true;
    }

  newDriver() { 
    let _M = this.model;

    let url = 'https://oyicab.herokuapp.com/api/register_new_driver' ;
    
    let body = `allowed_passenger=${_M.allowed_passenger}&email=${_M.email}&gender=${_M.gender}&name=${_M.name}&phone=${_M.phone}&vehicle_info=${_M.vehicle_info}&vehicle_license=${_M.vehicle_license}&vehicle_registration=${_M.vehicle_registration}&vehicle_type=${_M.vehicle_type}&password=${_M.password}`;
           
    this.post.postData(url,body).then( (res) => {
        console.log(res);
        if(res.statusText == "OK"){
            this.newdriveradded = true;
            window.alert("new driver named "+_M.name+" added");
        }
    })
  }
    ngOnInit() { }
}
