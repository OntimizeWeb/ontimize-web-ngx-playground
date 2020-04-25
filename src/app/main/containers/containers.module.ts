import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { OntimizeWebModule } from 'ontimize-web-ngx';

import { SharedModule } from '../../shared/shared.module';
import { ContainersBasicComponent } from './containers-basic/containers-basic.component';
import { ContainersCollapsibleComponent } from './containers-collapsible/containers-collapsible.component';
import { ContainersRoutingModule } from './containers-routing.module';
import { ContainersComponent } from './containers.component';

@NgModule({
  imports: [ContainersRoutingModule, OntimizeWebModule, SharedModule],
  declarations: [ContainersBasicComponent, ContainersCollapsibleComponent, ContainersComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ContainersModule { }
