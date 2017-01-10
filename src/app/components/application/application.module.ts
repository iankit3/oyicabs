import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { ApplicationRoutingModule } from './application.routing';
import { ApplicationComponent } from './application.component';
import { AddNewDriver } from './AddNewDriver';
import { ViewAllCustomers } from './ViewAllCustomers';

import { ViewAllDrivers } from './ViewAllDrivers';
import { DelDriver } from './DelDriver';
//import { TrackDrivers } from './TrackDrivers';
import {DisplayAllRides} from './DisplayAllRides';
import {AddNewAdmin} from './AddNewAdmin';
import { DelAdmin } from './DelAdmin';
import { BookNewTaxi } from './BookNewTaxi';


import { Popup } from '../../resuable_components/popup';
import { LoggedInGuard } from '../../services/logged-in-guard';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ApplicationRoutingModule,
  ],
  declarations: [
    AddNewDriver,ViewAllCustomers,ViewAllDrivers,DelDriver,DisplayAllRides,
    AddNewAdmin,DelAdmin,BookNewTaxi,ApplicationComponent,
    Popup
  ]
})
export class ApplicationModule {}
