import { Component, Injector, TemplateRef, ViewChild } from '@angular/core';
import { OComboCustomRenderer } from 'ontimize-web-ngx';


@Component({
  selector: 'combo-custom-render',
  templateUrl: './combo-custom-render.component.html'
})

export class OComboRendererComponent extends OComboCustomRenderer {

  @ViewChild('templateref', { read: TemplateRef, static: false }) public templateref: TemplateRef<any>;

  constructor(protected injector: Injector) {
    super(injector);
  }

  getComboData(value: any) {
    return value.value+" "+value.key;
  }

}