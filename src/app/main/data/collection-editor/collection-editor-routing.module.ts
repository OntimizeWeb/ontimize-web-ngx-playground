import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CollectionEditorComponent } from './collection-editor.component';
import { CollectionEditorOFormComponent } from './01.oform/collection-editor-oform.component';
import { CollectionEditorReactiveComponent } from './02.reactive/collection-editor-reactive.component';
import { CollectionEditorNgModelComponent } from './03.ngmodel/collection-editor-ngmodel.component';
import { CollectionEditorTestComponent } from './04.test/collection-editor-test.component';
import { CollectionEditorNativeControlsComponent } from './05.native-controls/collection-editor-native-controls.component';

export const routes: Routes = [
  {
    path: '', component: CollectionEditorComponent,
    children: [
      { path: '', redirectTo: 'oform', pathMatch: 'prefix' },
      { path: 'oform', component: CollectionEditorOFormComponent },
      { path: 'reactive', component: CollectionEditorReactiveComponent },
      { path: 'ngmodel', component: CollectionEditorNgModelComponent },
      { path: 'test', component: CollectionEditorTestComponent },
      { path: 'native-controls', component: CollectionEditorNativeControlsComponent }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CollectionEditorRoutingModule { }
