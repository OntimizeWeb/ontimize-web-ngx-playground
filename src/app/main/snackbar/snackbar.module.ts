import { NgModule } from '@angular/core';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import { SnackBarComponent } from './snackbar.component';
import { SnackBarRoutingModule } from './snackbar-routing.module';

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
