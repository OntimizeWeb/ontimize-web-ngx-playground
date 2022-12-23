import { NgModule } from '@angular/core';
import { OntimizeWebModule } from 'ontimize-web-ngx';

import { SharedModule } from './../../../shared/shared.module';
import { SnackBarRoutingModule } from './snackbar-routing.module';
import { SnackBarComponent } from './snackbar.component';

@NgModule({
  imports: [
    SharedModule,
    OntimizeWebModule,
    SnackBarRoutingModule
  ],
  declarations: [
    SnackBarComponent
  ]
})
export class SnackBarModule { }
