import { NgModule } from '@angular/core';
import { OntimizeWebModule } from 'ontimize-web-ngx';

import { SharedModule } from '../../../shared/shared.module';
import { DataViewComponent } from './data-view.component';
import { DataViewRoutingModule } from './data-view-routing.module';
import { ODataViewModule } from 'ontimize-web-ngx-extra-components';
import { DataViewBasicComponent } from './01.basic/data-view-basic.component';
import { DataViewCustomButtonComponent } from './02.custombutton/data-view-custom-button.component';

@NgModule({
  imports: [
    SharedModule,
    OntimizeWebModule,
    DataViewRoutingModule,
    ODataViewModule
  ],
  declarations: [
    DataViewComponent,
    DataViewBasicComponent,
    DataViewCustomButtonComponent
  ]
})
export class DataViewModule {}