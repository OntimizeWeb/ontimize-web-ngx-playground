import { NgModule } from '@angular/core';
import { OntimizeWebModule } from 'ontimize-web-ngx';

import { ExampleComponent } from './example/example.component';
import { NavigationBarService } from './navigation-bar.service';
import { AngularHighlightJsModule } from 'angular2-highlight-js';
import { HighlightComponent } from './highlight/highlight.component';

@NgModule({
  imports: [OntimizeWebModule, AngularHighlightJsModule],
  declarations: [ExampleComponent, HighlightComponent],
  providers: [NavigationBarService],
  exports: [ExampleComponent, HighlightComponent]
})
export class SharedModule { }
