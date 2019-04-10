import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ChooseGroupComponent } from './choose-group/choose-group.component';
import { AttendanceRegisterComponent } from './attendance-register/attendance-register.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ChooseGroupComponent,
    AttendanceRegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
