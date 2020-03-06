import { NgModule } from '@angular/core';
import { OntimizeWebModule } from 'ontimize-web-ngx';

import { ExampleComponent } from './example/example.component';
import { NavigationBarService } from './navigation-bar.service';
import { HighlightJsModule, HighlightJsService } from 'angular2-highlight-js';
import { HighlightComponent } from './highlight/highlight.component';

@NgModule({
  imports: [OntimizeWebModule, HighlightJsModule],
  declarations: [ExampleComponent, HighlightComponent],
  providers: [HighlightJsService, NavigationBarService],
  exports: [OntimizeWebModule, ExampleComponent, HighlightComponent]
})
export class SharedModule { }
