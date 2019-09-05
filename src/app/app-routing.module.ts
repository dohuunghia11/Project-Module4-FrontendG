import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SingInComponent} from './sing-in/sing-in.component';
import {RegisterComponent} from './register/register.component';


const routes: Routes = [
  {
    path: 'signIn', component: SingInComponent
  },
  {
    path: 'register', component: RegisterComponent
  }
];
@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
