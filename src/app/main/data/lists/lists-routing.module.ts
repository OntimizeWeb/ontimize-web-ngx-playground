import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListItemTextComponent } from './01.list-item-text/list-item-text.component';
import { ListItemAvatarComponent } from './02.list-item-avatar/list-item-avatar.component';
import { ListItemCardComponent } from './03.list-item-card/list-item-card.component';
import { ListItemCardImageComponent } from './04.list-item-card-image/list-item-card-image.component';
import { ListItemCustomComponent } from './05.list-item-custom/list-item-custom.component';
import { ListsComponent } from './lists.component';

export const routes: Routes = [
  {
    path: '', component: ListsComponent, children: [
      { path: '', redirectTo: 'list-item-text', pathMatch: 'prefix' },
      { path: 'list-item-text', data: { oAppHeaderTitle: 'List' }, component: ListItemTextComponent },
      { path: 'list-item-avatar', data: { oAppHeaderTitle: 'List' }, component: ListItemAvatarComponent },
      { path: 'list-item-card', data: { oAppHeaderTitle: 'List' }, component: ListItemCardComponent },
      { path: 'list-item-card-image', data: { oAppHeaderTitle: 'List' }, component: ListItemCardImageComponent },
      { path: 'list-item-custom', data: { oAppHeaderTitle: 'List' }, component: ListItemCustomComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListsRoutingModule { }
