import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main.component';

import { ButtonsModule } from './buttons/buttons.module';
import { ContainersModule } from './containers/containers.module';
import { DialogsModule } from './dialogs/dialogs.module';
import { SnackBarModule } from './snackbar/snackbar.module';
import { ContextMenuModule } from './contextmenu/context-menu.module';
import { HomeModule } from './home/home.module';
import { InputsModule } from './inputs/inputs.module';
import { InputsServiceModule } from './inputs-service/inputs-service.module';
import { ListsModule } from './lists/lists.module';
import { TableModule } from './table/table.module';
import { TreeModule } from './tree/tree.module';

export function loadButtonsModule() { return ButtonsModule; }
export function loadContainersModule() { return ContainersModule; }
export function loadDialogsModule() { return DialogsModule; }
export function loadSnackBarModule() { return SnackBarModule; }
export function loadContextMenuModule() { return ContextMenuModule; }
export function loadHomeModule() { return HomeModule; }
export function loadInputsModule() { return InputsModule; }
export function loadInputsServiceModule() { return InputsServiceModule; }
export function loadListsModule() { return ListsModule; }
export function loadTableModule() { return TableModule; }
export function loadTreeModule() { return TreeModule; }

export const routes: Routes = [
  {
    path: 'main',
    component: MainComponent,
    children: [
      { path: 'buttons', loadChildren: loadButtonsModule },
      { path: 'containers', loadChildren: loadContainersModule },
      { path: 'dialogs', loadChildren: loadDialogsModule },
      { path: 'snackbar', loadChildren: loadSnackBarModule },
      { path: 'contextmenu', loadChildren: loadContextMenuModule },
      { path: 'home', loadChildren: loadHomeModule },
      { path: 'inputs', loadChildren: loadInputsModule },
      { path: 'inputs-service', loadChildren: loadInputsServiceModule },
      { path: 'lists', loadChildren: loadListsModule },
      { path: 'table', loadChildren: loadTableModule },
      { path: 'tree', loadChildren: loadTreeModule },
      { path: '', redirectTo: 'home', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
