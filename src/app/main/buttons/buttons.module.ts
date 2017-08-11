import { NgModule } from '@angular/core';
import { OntimizeWebModule } from 'ontimize-web-ng2';
import { ButtonsComponent } from './buttons.component';
import { SharedModule } from '../../shared/shared.module';
import { ButtonsRoutingModule } from './buttons-routing.module';

@NgModule({
  imports: [
    SharedModule,
    OntimizeWebModule,
    ButtonsRoutingModule
  ],
  declarations: [
    ButtonsComponent
  ]
})
export class ButtonsModule { }
