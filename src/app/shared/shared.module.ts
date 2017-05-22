import { NgModule } from '@angular/core';

// import { NavigationBarService } from './navigation-bar.service';
import { SideMenuComponent } from './menu/side-menu.component';
import { ExampleComponent } from './example/example.component';
import { HighlightComponent } from './highlight/highlight.component';

import {
  OntimizeWebModule
} from 'ontimize-web-ng2';

@NgModule({
  imports: [
    OntimizeWebModule
  ],
  declarations: [
    SideMenuComponent,
    ExampleComponent,
    HighlightComponent
  ],
  exports: [
    OntimizeWebModule,
    SideMenuComponent,
    ExampleComponent,
    HighlightComponent
  ]
})
export class SharedModule { }
