import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
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
  },
  {
    path: 'login',
    loadChildren: './login/login.module#LoginModule'
  },
  {
    path: 'register',
    loadChildren: './register/register.module#RegisterModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
