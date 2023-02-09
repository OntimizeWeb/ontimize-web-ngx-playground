import { NgModule } from '@angular/core';
import { OntimizeWebModule } from 'ontimize-web-ngx';

import { ExampleComponent } from './example/example.component';
import { NavigationBarService } from './navigation-bar.service';
import { AngularHighlightJsModule } from 'angular2-highlight-js';
import { HighlightComponent } from './highlight/highlight.component';
import { HeaderButtonMenuComponent } from './header-button-menu/header-button-menu.component';
import { CollapsibleStateService } from './services/collapsible-state.service';
import { CollapsibleMenuComponent } from './collapsible-menu/collapsible-menu.component';
import { DataStructureComponent } from './data-structure/data-structure.component';
import { InputsCardComponent } from './inputs-card/inputs-card.component';
import { ConfigCollapsibleStateService } from './services/config-collapsible-state.service';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [OntimizeWebModule, AngularHighlightJsModule, MatButtonModule],
  declarations: [ExampleComponent, HighlightComponent, HeaderButtonMenuComponent, CollapsibleMenuComponent, DataStructureComponent, InputsCardComponent],
  providers: [NavigationBarService, CollapsibleStateService, ConfigCollapsibleStateService],
  exports: [OntimizeWebModule, ExampleComponent, HighlightComponent, HeaderButtonMenuComponent, CollapsibleMenuComponent, DataStructureComponent, InputsCardComponent]
})
export class SharedModule { }
