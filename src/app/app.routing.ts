import { ModuleWithProviders , NgModule }  from '@angular/core';
import { Routes, RouterModule ,CanActivate} from '@angular/router';

import { AppComponent } from './components/root/app.component';
import { ApplicationComponent } from './components/application/application.component';
import { LoginComponent } from './components/root/login.component';

import { LoggedInGuard } from './services/logged-in-guard';

const appRoutes: Routes = [
   {
     path: 'signin',
     component:LoginComponent 
   },
   {
     path: 'application',
     loadChildren: 'app/components/application/application.module#ApplicationModule',
    // component:HomeComponent 
   },
  {
     path: '',
     component:LoginComponent 
   },

];


@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes
    )
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {}

//export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
