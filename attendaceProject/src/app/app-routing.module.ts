import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ChooseGroupComponent } from './choose-group/choose-group.component';
import { AttendanceRegisterComponent } from './attendance-register/attendance-register.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'user/login', component: LoginComponent},
  { path: 'user/id', component: ChooseGroupComponent},
  { path: 'groups/list', component: AttendanceRegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponent = [LoginComponent, ChooseGroupComponent, AttendanceRegisterComponent];