import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';

import { ApplicationComponent } from './application.component';

import { AddNewDriver } from './AddNewDriver';
import { ViewAllCustomers } from './ViewAllCustomers';
import { ViewAllDrivers } from './ViewAllDrivers';
import { DelDriver } from './DelDriver';
//import { TrackDrivers } from './TrackDrivers';
import { DisplayAllRides } from './DisplayAllRides';
import { AddNewAdmin } from './AddNewAdmin';
import { DelAdmin } from './DelAdmin';
import { BookNewTaxi } from './BookNewTaxi';

import { LoggedInGuard } from '../../services/logged-in-guard';
import { LimitAccess  } from '../../services/limit-access.service';

const route: Routes = [
  {
    path: '',
    component: ApplicationComponent,
    children: [
      {
        path: 'adddriver',
        component: AddNewDriver,canActivate: [LoggedInGuard] 
      },
      {
        path: 'booknewtaxi',
        component: BookNewTaxi,canActivate: [LoggedInGuard] 
      },
      {
        path: 'viewallcustomers',
        component: ViewAllCustomers, canActivate: [LoggedInGuard]
      },
      {
        path: 'viewalldrivers',
        component: ViewAllDrivers, canActivate: [LoggedInGuard]
      },
      {
        path: 'deldriver',
        component: DelDriver, canActivate: [LoggedInGuard,LimitAccess]
      },
      {
        path: 'displayallrides',
        component: DisplayAllRides
      },
      {
        path: 'addnewadmin',
        component: AddNewAdmin, canActivate: [LoggedInGuard,LimitAccess]
      },
      {
        path: 'deladmin',
        component: DelAdmin, canActivate: [LoggedInGuard,LimitAccess]
      },
      {
        path: '',
        component: BookNewTaxi,canActivate: [LoggedInGuard] 
      },
    ]
  },
  {
    path: 'application',
    component: ApplicationComponent,
  }

]

@NgModule({
  imports: [
    RouterModule.forChild(route)
  ],
  exports: [
    RouterModule
  ]
})
export class ApplicationRoutingModule { }
//export const home_routing: ModuleWithProviders = RouterModule.forChild(route);