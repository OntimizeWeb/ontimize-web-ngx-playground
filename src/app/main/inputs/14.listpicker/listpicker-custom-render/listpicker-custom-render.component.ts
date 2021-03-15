import { Component, Injector, TemplateRef, ViewChild } from '@angular/core';
import * as moment from 'moment';
import { OListPickerCustomRenderer } from 'ontimize-web-ngx';

@Component({
  selector: 'listpicker-custom-render',
  templateUrl: './listpicker-custom-render.component.html'
})

export class OListPickerRendererComponent extends OListPickerCustomRenderer {

  @ViewChild('templateref', { read: TemplateRef, static: false }) public templateref: TemplateRef<any>;

  constructor(protected injector: Injector) {
    super(injector);
  }

  getListPickerValue(value: any) {
    let theDate = moment.unix(value).format("DD/MM/YYYY");
    return theDate;
  }
}