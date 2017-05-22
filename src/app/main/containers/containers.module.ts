import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { ContainersComponent } from './containers.component';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    ContainersComponent
  ],
  exports: [
    ContainersComponent
  ]
})
export class ContainersModule { }
