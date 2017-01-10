import { Component, OnInit } from '@angular/core';
import { KeysPipe } from '../../filters/KeysPipe';

import { GetDataService } from '../../services/get-data.service';

@Component({
    //moduleId: module.id,
    selector: 'DisplayAllRides',
    templateUrl: './display_all_rides.html',
})
export class DisplayAllRides implements OnInit {
      
    rows: any[];
    showLoader = true;

    constructor(
        private dataservice: GetDataService
    ) { }
     
    getData(url): void {
        this.dataservice
            .getData(url)
            .then( (res) =>{
                 this.rows = res.json().result.results;
                 this.showLoader = false
            })
    }

    ngOnInit() {
        this.getData('https://oyicab.herokuapp.com/api/get_rides')
     }
}
