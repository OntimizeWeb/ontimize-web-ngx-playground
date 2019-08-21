import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ButtonsModule } from './buttons/buttons.module';
import { ContainersModule } from './containers/containers.module';
import { ContextMenuModule } from './contextmenu/context-menu.module';
import { DialogsModule } from './dialogs/dialogs.module';
import { GalleryModule } from './gallery/gallery.module';
import { GridModule } from './grid/grid.module';
import { HomeModule } from './home/home.module';
import { InputsModule } from './inputs/inputs.module';
import { ListsModule } from './lists/lists.module';
import { MainComponent } from './main.component';
import { MediaModule } from './media/media.module';
import { SnackBarModule } from './snackbar/snackbar.module';
import { TableModule } from './table/table.module';
import { TooltipModule } from './tooltip/tooltip.module';


export function loadButtonsModule() { return ButtonsModule; }
export function loadContainersModule() { return ContainersModule; }
export function loadDialogsModule() { return DialogsModule; }
export function loadSnackBarModule() { return SnackBarModule; }
export function loadContextMenuModule() { return ContextMenuModule; }
export function loadHomeModule() { return HomeModule; }
export function loadInputsModule() { return InputsModule; }
export function loadListsModule() { return ListsModule; }
export function loadTableModule() { return TableModule; }
export function loadMediaModule() { return MediaModule; }
export function loadGridModule() { return GridModule; }
export function loadTooltipModule() { return TooltipModule; }
export function loadGalleryModule() { return GalleryModule; }


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
      { path: 'lists', loadChildren: loadListsModule },
      { path: 'grid', loadChildren: loadGridModule },
      { path: 'table', loadChildren: loadTableModule },
      { path: 'media', loadChildren: loadMediaModule },
      { path: 'tooltip', loadChildren: loadTooltipModule },
      { path: 'gallery', loadChildren: loadGalleryModule },
      { path: '', redirectTo: 'home', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
