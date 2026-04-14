import { NgModule } from '@angular/core';
import { OntimizeWebModule } from 'ontimize-web-ngx';

import { SharedModule } from '../../../shared/shared.module';
import { DataViewComponent } from './data-view.component';
import { DataViewRoutingModule } from './data-view-routing.module';
import { ODataViewModule } from 'ontimize-web-ngx-extra-components';
import { DataViewBasicComponent } from './01.basic/data-view-basic.component';
import { DataViewCustomButtonComponent } from './03.custombutton/data-view-custom-button.component';
import { DataViewToggleOptionsComponent } from './02.toggleoptions/data-view-toggle-options.component';
import { PacksService } from '../../../shared/services/packs.service';

@NgModule({
  imports: [
    SharedModule,
    OntimizeWebModule,
    DataViewRoutingModule,
    ODataViewModule,
    DataViewComponent
  ],
  declarations: [
    DataViewBasicComponent,
    DataViewToggleOptionsComponent,
    DataViewCustomButtonComponent
  ],
  providers: [
    { provide: 'packs', useValue: PacksService }
  ]
})
export class DataViewModule { }