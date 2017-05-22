import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { ListsComponent } from './lists.component';

@NgModule({
  imports: [
    SharedModule
  ],
  exports: [
    ListsComponent
  ],
  declarations: [
    ListsComponent
  ]
})
export class ListsModule { }
