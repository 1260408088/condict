import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {SharedComponent} from './shared.component';

@NgModule({
  declarations: [
    SharedComponent,
  ],
  imports: [
    CommonModule,
    NgZorroAntdModule,
    HttpClientModule,
    RouterModule
  ],
  exports: [
    CommonModule,
    NgZorroAntdModule,
    HttpClientModule,
    RouterModule
  ]
})
export class SharedModule { }
