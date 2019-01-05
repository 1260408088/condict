import { NgModule } from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {SetingComponent} from './seting.component';
import {SetingRoutingModule} from './seting-routing.module';

@NgModule({
  declarations: [
    SetingComponent
  ],
  imports: [
    SharedModule,
    SetingRoutingModule
  ]
})
export class SettingModule { }
