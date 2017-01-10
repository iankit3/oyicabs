import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule }from '@angular/common';
import { HttpModule } from '@angular/http';

import { AppComponent } from './components/root/app.component';
import { ApplicationComponent } from './components/application/application.component';
import { LoginComponent } from './components/root/login.component';

import { AddNewDriver } from './components/application/AddNewDriver';
import { BookNewTaxi } from './components/application/BookNewTaxi';
import { ViewAllCustomers } from './components/application/ViewAllCustomers';
import { ViewAllDrivers } from './components/application/ViewAllDrivers';
import { DelDriver } from './components/application/DelDriver';
//import { TrackDrivers } from './TrackDrivers';
import { KeysPipe } from './filters/KeysPipe';
import {DisplayAllRides } from './components/application/DisplayAllRides';
import {AddNewAdmin} from './components/application/AddNewAdmin';
import { DelAdmin } from './components/application/DelAdmin';

import { GetDataService } from './services/get-data.service';
import { PostDataService } from './services/post-data.service';
import { AuthenticationService } from './services/AuthenticationService';
import { LimitAccess } from './services/limit-access.service';

import { ApplicationModule } from './components/application/application.module';
import { AppRoutingModule } from './app.routing';
import { ApplicationRoutingModule } from './components/application/application.routing';
import { LoggedInGuard } from './services/logged-in-guard';

import { Popup } from './resuable_components/popup';

@NgModule({
    imports: [
         CommonModule,
         BrowserModule ,
         FormsModule,
         HttpModule,
         AppRoutingModule,
         ApplicationModule,
         ApplicationRoutingModule,
          ],
    declarations: [ 
        AppComponent,
        //ApplicationComponent,
        LoginComponent,
        // AddNewDriver,
        // BookNewTaxi,
        // ViewAllCustomers,
        // ViewAllDrivers,
        // DelDriver,
        // DisplayAllRides,
        // AddNewAdmin ,
        // DelAdmin,
        KeysPipe,
         ],
    providers:[
       LoggedInGuard,AuthenticationService,PostDataService,GetDataService,LimitAccess
    ],  
    bootstrap: [ AppComponent ]
})

export class AppModule { 

}
