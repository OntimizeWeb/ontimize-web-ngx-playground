import { Component } from '@angular/core';
import { OntimizeMatIconRegistry } from 'ontimize-web-ngx';


const svgIcons = ['checkbox', 'combo', 'currency', 'date', 'daterange', 'email', 'file', 'hour', 'html', 'integer', 'listpicker', 'nif', 'overview', 'password',
  'percentage', 'phone', 'radio', 'real', 'slider', 'slidetoggle', 'text', 'textarea', 'time', 'table', 'list', 'grid', 'image', 'gallery', 'containers',
  'dialog', 'snackbar', 'contextmenu', 'tooltip', 'flm-dialog', 'flm-tab', 'flm-split-pane'];


@Component({
  selector: 'o-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  themeClass: string;

  constructor(
    private ontimizeMatIconRegistry: OntimizeMatIconRegistry
  ) {  }


  ngOnInit() {
    if (this.ontimizeMatIconRegistry) {
      svgIcons.forEach(current => {
        this.ontimizeMatIconRegistry.addOntimizeSvgIcon(current, 'assets/images/menu/' + current + '.svg');
        this.ontimizeMatIconRegistry.addOntimizeSvgIcon(current + '_dark', 'assets/images/menu/dark/' + current + '_dark.svg');
      })
      this.ontimizeMatIconRegistry.addOntimizeSvgIcon('home_dark', 'assets/images/home_dark.svg');
      this.ontimizeMatIconRegistry.addOntimizeSvgIcon('home_light', 'assets/images/home_light.svg');
    }
  }

}
