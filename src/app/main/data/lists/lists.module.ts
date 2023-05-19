import { NgModule } from '@angular/core';
import { OntimizeWebModule } from 'ontimize-web-ngx';

import { SharedModule } from '../../../shared/shared.module';
import { ListItemTextComponent } from './01.list-item-text/list-item-text.component';
import { ListItemAvatarComponent } from './02.list-item-avatar/list-item-avatar.component';
import { ListItemCardComponent } from './03.list-item-card/list-item-card.component';
import { ListItemCardImageComponent } from './04.list-item-card-image/list-item-card-image.component';
import { ListItemCustomComponent } from './05.list-item-custom/list-item-custom.component';
import { ListsRoutingModule } from './lists-routing.module';
import { ListsComponent } from './lists.component';

@NgModule({
  imports: [
    SharedModule,
    OntimizeWebModule,
    ListsRoutingModule
  ],
  declarations: [
    ListsComponent,
    ListItemTextComponent,
    ListItemAvatarComponent,
    ListItemCardComponent,
    ListItemCardImageComponent,
    ListItemCustomComponent
  ]
})
export class ListsModule { }
