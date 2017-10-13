import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main.component';

import { ButtonsModule } from './buttons/buttons.module';
import { CheckboxModule } from './checkbox/checkbox.module';
import { ComboModule } from './combo/combo.module';
import { ContainersModule } from './containers/containers.module';
import { DialogsModule } from './dialogs/dialogs.module';
import { HomeModule } from './home/home.module';
import { InputsModule } from './inputs/inputs.module';
import { ListsModule } from './lists/lists.module';

export function loadButtonsModule() { return ButtonsModule; }
export function loadCheckboxModule() { return CheckboxModule; }
export function loadComboModule() { return ComboModule; }
export function loadContainersModule() { return ContainersModule; }
export function loadDialogsModule() { return DialogsModule; }
export function loadHomeModule() { return HomeModule; }
export function loadInputsModule() { return InputsModule; }
export function loadListsModule() { return ListsModule; }

export const routes: Routes = [
  {
    path: 'main',
    component: MainComponent,
    children: [
      { path: 'buttons', loadChildren: loadButtonsModule },
      { path: 'checkbox', loadChildren: loadCheckboxModule },
      { path: 'combo', loadChildren: loadComboModule },
      { path: 'containers', loadChildren: loadContainersModule },
      { path: 'dialogs', loadChildren: loadDialogsModule },
      { path: 'home', loadChildren: loadHomeModule },
      { path: 'inputs', loadChildren: loadInputsModule },
      { path: 'lists', loadChildren: loadListsModule },
      { path: '', redirectTo: 'home', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
