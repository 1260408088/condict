import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SetingComponent} from './seting.component';
// @ts-ignore
const SettingRouter: Routes = [
  {
    path: '',
    component: SetingComponent,
    children: []
  },
  /*{
    path: 'article',
    component: ArticleComponent,
    children: []
  }*/
];

@NgModule({
  imports: [RouterModule.forChild(SettingRouter)],
  exports: [RouterModule]
})
export class SetingRoutingModule { }
