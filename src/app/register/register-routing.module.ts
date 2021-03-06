import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RegisterComponent} from './register.component';

const RegisterRoutes: Routes = [
  {
    path: '',
    component: RegisterComponent,
    children: []
  }
];

@NgModule({
  imports: [RouterModule.forChild(RegisterRoutes)],
  exports: [RouterModule]
})
export class RegisterRoutingModule { }
