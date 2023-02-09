import { NgModule } from '@angular/core';
import { OntimizeWebModule } from 'ontimize-web-ngx';

import { ExampleComponent } from './example/example.component';
import { NavigationBarService } from './navigation-bar.service';
import { HighlightComponent } from './highlight/highlight.component';
import { HeaderButtonMenuComponent } from './header-button-menu/header-button-menu.component';
import { CollapsibleStateService } from './services/collapsible-state.service';
import { CollapsibleMenuComponent } from './collapsible-menu/collapsible-menu.component';
import { DataStructureComponent } from './data-structure/data-structure.component';
import { InputsCardComponent } from './inputs-card/inputs-card.component';
import { ConfigCollapsibleStateService } from './services/config-collapsible-state.service';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { HighlightModule } from 'ngx-highlightjs';

@NgModule({
  imports: [OntimizeWebModule, HighlightModule, ClipboardModule],
  declarations: [ExampleComponent, HighlightComponent, HeaderButtonMenuComponent, CollapsibleMenuComponent, DataStructureComponent, InputsCardComponent],
  providers: [NavigationBarService, CollapsibleStateService, ConfigCollapsibleStateService],
  exports: [ExampleComponent, HighlightComponent, HeaderButtonMenuComponent, CollapsibleMenuComponent, DataStructureComponent, InputsCardComponent]
})
export class SharedModule { }
