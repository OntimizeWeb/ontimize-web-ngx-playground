import { NgModule } from '@angular/core';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import { ContextMenuComponent } from './context-menu.component';
import { ContextMenuRoutingModule } from './context-menu-routing.module';

@NgModule({
  imports: [
    SharedModule,
    OntimizeWebModule,
    ContextMenuRoutingModule
  ],
  declarations: [
    ContextMenuComponent
  ]
})
export class ContextMenuModule { }
