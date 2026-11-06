import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { OCollectionEditorModule } from 'ontimize-web-ngx-extra-components';

import { SharedModule } from '../../../shared/shared.module';
import { CollectionEditorComponent } from './collection-editor.component';
import { CollectionEditorRoutingModule } from './collection-editor-routing.module';
import { CollectionEditorOFormComponent } from './01.oform/collection-editor-oform.component';
import { CollectionEditorReactiveComponent } from './02.reactive/collection-editor-reactive.component';
import { CollectionEditorNgModelComponent } from './03.ngmodel/collection-editor-ngmodel.component';
import { CollectionEditorTestComponent } from './04.test/collection-editor-test.component';
import { CollectionEditorNativeControlsComponent } from './05.native-controls/collection-editor-native-controls.component';

@NgModule({
  imports: [
    SharedModule,
    OntimizeWebModule,
    FormsModule,
    ReactiveFormsModule,
    CollectionEditorRoutingModule,
    OCollectionEditorModule,
    CollectionEditorComponent,
    MatButtonModule,
    MatCheckboxModule,
    MatDividerModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatSelectModule,
    MatSlideToggleModule
  ],
  declarations: [
    CollectionEditorOFormComponent,
    CollectionEditorReactiveComponent,
    CollectionEditorNgModelComponent,
    CollectionEditorTestComponent,
    CollectionEditorNativeControlsComponent
  ]
})
export class CollectionEditorModule { }
