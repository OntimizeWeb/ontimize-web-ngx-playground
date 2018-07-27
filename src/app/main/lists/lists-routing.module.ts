import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListsComponent } from './lists.component';

import { ListItemTextComponent } from './01.list-item-text/list-item-text.component';
import { ListItemAvatarComponent } from './02.list-item-avatar/list-item-avatar.component';
import { ListItemCardComponent } from './03.list-item-card/list-item-card.component';
import { ListItemCardImageComponent } from './04.list-item-card-image/list-item-card-image.component';
import { ListItemCustomComponent } from './05.list-item-custom/list-item-custom.component';

export const routes: Routes = [
  {
    path: '', component: ListsComponent, children: [
      { path: '', redirectTo: 'list-item-text', pathMatch: 'prefix' },
      { path: 'list-item-text', component: ListItemTextComponent },
      { path: 'list-item-avatar', component: ListItemAvatarComponent },
      { path: 'list-item-card', component: ListItemCardComponent },
      { path: 'list-item-card-image', component: ListItemCardImageComponent },
      { path: 'list-item-custom', component: ListItemCustomComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListsRoutingModule { }
