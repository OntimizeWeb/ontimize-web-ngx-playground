import { NgModule } from '@angular/core';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import { ListsComponent } from './lists.component';
import { ListsRoutingModule } from './lists-routing.module';
@NgModule({
  imports: [
    SharedModule,
    OntimizeWebModule,
    ListsRoutingModule
  ],
  declarations: [
    ListsComponent
  ]
})
export class ListsModule { }
