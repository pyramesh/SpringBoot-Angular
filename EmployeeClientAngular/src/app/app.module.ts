import { AppRoutingModule } from './app-routing-module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CreatemployeeComponent } from './createmployee/createmployee.component';
import { EmployeeService } from './services/employee.service';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Ng2FilterPipeModule } from 'ng2-filter-pipe';
import { CustomfilterPipe } from './customfilter.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    CreatemployeeComponent,
    CustomfilterPipe,
    LoginComponent
  ],
  imports: [
      BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule
     
    
    
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
