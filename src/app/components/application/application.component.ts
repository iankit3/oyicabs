import { Component, OnInit } from '@angular/core';

@Component({
    //moduleId: module.id,
    selector: 'home',
    templateUrl: './home.html'
})
export class ApplicationComponent implements OnInit {
    constructor() { }
    selectedTab =  1;
    isAdmin = localStorage.getItem('user_type') == '1'?true:false;

    handleLogout(){
        window.location.href = window.location.origin;
    }
    ngOnInit() { }
}
