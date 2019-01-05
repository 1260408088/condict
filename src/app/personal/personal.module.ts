import { NgModule } from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {PsersonalRoutingModule} from './personal-routing.module';
import {PersonalComponent} from './personal.component';

@NgModule({
  declarations: [
    PersonalComponent,
  ],
  imports: [
    SharedModule,
    PsersonalRoutingModule
  ]
})
export class PersonalModule { }
