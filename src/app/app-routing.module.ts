import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SingInComponent} from './sing-in/sing-in.component';


const routes: Routes = [
  {
    path: 'signIn', component: SingInComponent
  }
];
@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
