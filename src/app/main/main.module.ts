import { NgModule } from '@angular/core';
import { MainComponent } from './main.component';
import { MainRoutingModule } from './main-routing.module';

import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    MainRoutingModule
  ],
  exports: [
    MainComponent
  ],
  declarations: [
    MainComponent
  ]
})
export class MainModule { }
