import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { OntimizeWebModule } from 'ontimize-web-ngx';

import { ExampleComponent } from './example/example.component';
import { HighlightComponent } from './highlight/highlight.component';
import { HeaderButtonMenuComponent } from './header-button-menu/header-button-menu.component';
import { CollapsibleMenuComponent } from './collapsible-menu/collapsible-menu.component';
import { ScreenConfigurationComponent } from './screen-configuration/screen-configuration.component';
import { InputsCardComponent } from './inputs-card/inputs-card.component';

@NgModule({
  imports: [
    CommonModule,
    OntimizeWebModule,
    ExampleComponent,
    HighlightComponent,
    HeaderButtonMenuComponent,
    CollapsibleMenuComponent,
    ScreenConfigurationComponent,
    InputsCardComponent
  ],
  exports: [
    CommonModule,
    OntimizeWebModule,
    ExampleComponent,
    HighlightComponent,
    HeaderButtonMenuComponent,
    CollapsibleMenuComponent,
    ScreenConfigurationComponent,
    InputsCardComponent
  ]
})
export class SharedModule { }
