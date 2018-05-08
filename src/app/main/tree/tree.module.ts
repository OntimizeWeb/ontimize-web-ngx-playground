import { NgModule, Injector, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import { TreeExample1Component } from './example1/example1.component';
import { TreeRoutingModule } from './tree-routing.module';

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
    TreeExample1Component
  ],
  providers: [{
    provide: 'DummyService',
    useFactory: getDummyServiceProvider,
    deps: [Injector]
  }],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TreeModule { }
