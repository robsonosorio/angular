import { JsonPipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { UserCrudComponent } from './views/user-crud/user-crud.component'

const routes: Routes = [{
  path: "",
  component: HomeComponent
},{
  path: "users",
  component: UserCrudComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
