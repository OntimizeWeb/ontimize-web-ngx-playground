import { Component, Injector } from '@angular/core';
import { OntimizeMatIconRegistry } from 'ontimize-web-ngx';

@Component({
  selector: 'o-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  ontimizeMatIconRegistry: OntimizeMatIconRegistry;

  constructor(protected injector: Injector) {
    this.ontimizeMatIconRegistry = this.injector.get(OntimizeMatIconRegistry);
    this.ontimizeMatIconRegistry.addOntimizeSvgIcon('double-check', 'assets/images/double-check.svg');
  }

}
