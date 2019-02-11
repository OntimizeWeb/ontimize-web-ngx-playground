import { NgModule } from '@angular/core';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import { GridRoutingModule } from './grid-routing.module';
import { GridComponent } from './grid.component';
import { GridBasicComponent } from './grid-basic/grid-basic.component';
import { GridFixedComponent } from './grid-fixed/grid-fixed.component';
import { GridHybridComponent } from './grid-hybrid/grid-hybrid.component';

@NgModule({
  imports: [
    SharedModule,
    OntimizeWebModule,
    GridRoutingModule
  ],
  declarations: [
    GridComponent,
    GridBasicComponent,
    GridFixedComponent,
    GridHybridComponent
  ]
})
export class GridModule {}
