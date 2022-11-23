import { NgModule } from '@angular/core';
import { OntimizeWebModule } from 'ontimize-web-ngx';

import { ExampleComponent } from './example/example.component';
import { NavigationBarService } from './navigation-bar.service';
import { AngularHighlightJsModule } from 'angular2-highlight-js';
import { HighlightComponent } from './highlight/highlight.component';
import { HeaderButtonMenuComponent } from './header-button-menu/header-button-menu.component';
import { CollapsibleStateService } from './services/collapsible-state.service';
import { CollapsibleMenuComponent } from './collapsible-menu/collapsible-menu.component';
import { ConfigurationHeaderComponent } from './configuration-header/configuration-header.component';

@NgModule({
  imports: [OntimizeWebModule, AngularHighlightJsModule],
  declarations: [ExampleComponent, HighlightComponent, HeaderButtonMenuComponent, CollapsibleMenuComponent, ConfigurationHeaderComponent],
  providers: [NavigationBarService, CollapsibleStateService],
  exports: [OntimizeWebModule, ExampleComponent, HighlightComponent, HeaderButtonMenuComponent, CollapsibleMenuComponent, ConfigurationHeaderComponent]
})
export class SharedModule { }
