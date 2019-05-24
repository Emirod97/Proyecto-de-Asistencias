import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ChooseGroupComponent } from './choose-group/choose-group.component';
import { AttendanceRegisterComponent } from './attendance-register/attendance-register.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', redirectTo: 'user/login', pathMatch: 'full'},
  { path: 'user/login', component: LoginComponent},
  { path: 'user/:id', component: ChooseGroupComponent},
  { path: 'group/:id', component: AttendanceRegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponent = [LoginComponent, ChooseGroupComponent, AttendanceRegisterComponent];