import { NgModule } from '@angular/core';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import { GridRoutingModule } from './grid-routing.module';
import { GridComponent } from './grid.component';

@NgModule({
  imports: [
    SharedModule,
    OntimizeWebModule,
    GridRoutingModule
  ],
  declarations: [
    GridComponent
  ]
})
export class GridModule {}
