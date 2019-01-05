import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PersonalComponent} from './personal.component';
// @ts-ignore
const PersonalRouter: Routes = [
  {
    path: '',
    component: PersonalComponent,
    children: []
  },
  /*{
    path: 'article',
    component: ArticleComponent,
    children: []
  }*/
];

@NgModule({
  imports: [RouterModule.forChild(PersonalRouter)],
  exports: [RouterModule]
})
export class PsersonalRoutingModule { }
