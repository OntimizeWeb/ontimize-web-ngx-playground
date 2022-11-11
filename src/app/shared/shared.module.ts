import { NgModule } from '@angular/core';
import { OntimizeWebModule } from 'ontimize-web-ngx';

import { ExampleComponent } from './example/example.component';
import { NavigationBarService } from './navigation-bar.service';
import { AngularHighlightJsModule } from 'angular2-highlight-js';
import { HighlightComponent } from './highlight/highlight.component';
import { HeaderButtonMenuComponent } from './header-button-menu/header-button-menu.component';
import { ExpandedStateService } from './services/expanded-state.service';
import { CollapsibleMenuComponent } from './collapsible-menu/collapsible-menu.component';

@NgModule({
  imports: [OntimizeWebModule, AngularHighlightJsModule],
  declarations: [ExampleComponent, HighlightComponent, HeaderButtonMenuComponent, CollapsibleMenuComponent],
  providers: [NavigationBarService, ExpandedStateService],
  exports: [OntimizeWebModule, ExampleComponent, HighlightComponent, HeaderButtonMenuComponent, CollapsibleMenuComponent]
})
export class SharedModule { }
