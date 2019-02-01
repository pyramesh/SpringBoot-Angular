import { CreatemployeeComponent } from './createmployee/createmployee.component';
import { NgModule }      from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";

const appRoutes: Routes = [
  
                 {
                      path: 'home',
                      component: CreatemployeeComponent
                },
              
                {
                          path: '', 
                          redirectTo: '/login', pathMatch: 'full'
                },
                {
                  path: 'login',
                  component: LoginComponent
                }
];

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
