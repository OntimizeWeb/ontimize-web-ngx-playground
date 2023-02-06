import { Component, Injector, TemplateRef, ViewChild } from '@angular/core';
import * as moment from 'moment';
import { OComboCustomRenderer } from 'ontimize-web-ngx';

@Component({
  selector: 'combo-custom-render',
  templateUrl: './combo-custom-render.component.html'
})

export class OComboRendererComponent extends OComboCustomRenderer {

  @ViewChild('templateref', { read: TemplateRef }) public templateref: TemplateRef<any>;

  constructor(protected injector: Injector) {
    super(injector);
  }

  getComboData(record: any) {
    let theDate = moment.unix(record['integerValue']).format("DD/MM/YYYY");
    return theDate;
  }

}
