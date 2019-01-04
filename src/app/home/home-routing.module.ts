import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent } from './home.component';
import {ArticleComponent} from './article/article.component';
// @ts-ignore
const homebodies: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: []
  },
  {
    path: 'article',
    component: ArticleComponent,
    children: []
  }
];

@NgModule({
  imports: [RouterModule.forChild(homebodies)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
