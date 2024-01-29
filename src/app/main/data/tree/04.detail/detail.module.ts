import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { OTreeModule, OntimizeWebModule } from 'ontimize-web-ngx';
import { CustomersTreeRoutingModule, DETAIL_MODULE_DECLARATIONS } from './detail-routing.module';
import { SharedModule } from '../../../../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    OntimizeWebModule,
    OTreeModule,
    CustomersTreeRoutingModule
  ],
  declarations: DETAIL_MODULE_DECLARATIONS,
  exports: DETAIL_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DetailModule { }
