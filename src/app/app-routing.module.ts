import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PersonalModule} from './personal/personal.module';
const routes: Routes = [
  /*{
    path: '',
    component: HomeComponent
    // loadChildren: './home/home.module#HomeModule'
  },*/
  {
    path: 'home',
    loadChildren: './home/home.module#HomeModule'
  },
  {
    path: 'setting',
    loadChildren: './seting/setting.module#SettingModule'
  },
  {
    path: 'personal',
    loadChildren: './personal/personal.module#PersonalModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
