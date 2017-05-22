import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './main.component';

import { ButtonsComponent } from './buttons/buttons.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { ComboComponent } from './combo/combo.component';
import { ContainersComponent } from './containers/containers.component';
import { DialogsComponent } from './dialogs/dialogs.component';
import { HomeComponent } from './home/home.component';
import { InputsComponent } from './inputs/inputs.component';
import { ListsComponent } from './lists/lists.component';

const routes: Routes = [
  {
    path: 'main',
    component: MainComponent,
    children: [
      { path: 'buttons', component: ButtonsComponent },
      { path: 'checkbox', component: CheckboxComponent },
      { path: 'combo', component: ComboComponent },
      { path: 'containers', component: ContainersComponent },
      { path: 'dialogs', component: DialogsComponent },
      { path: 'home', component: HomeComponent },
      { path: 'inputs', component: InputsComponent },
      { path: 'lists', component: ListsComponent },
      { path: '', redirectTo: 'home', pathMatch: 'prefix' }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
