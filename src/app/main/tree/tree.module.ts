import { NgModule, Injector, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import { TreeRoutingModule } from './tree-routing.module';

import { TreeComponent } from './tree.component';

import { TreeBasicComponent } from './01.basic/tree-basic.component';

import { DummyService } from './services/dummy.service';
export function getDummyServiceProvider(injector: Injector) {
  return new DummyService(injector);
}

@NgModule({
  imports: [
    SharedModule,
    OntimizeWebModule,
    TreeRoutingModule
  ],
  declarations: [
    TreeComponent,
    TreeBasicComponent
  ],
  providers: [{
    provide: 'DummyService',
    useFactory: getDummyServiceProvider,
    deps: [Injector]
  }],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TreeModule { }
