import { Component, Injector, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { OBaseTableCellRenderer, OCurrencyPipe } from 'ontimize-web-ngx';

@Component({
  selector: 'o-table-column-renderer-totalready',
  templateUrl: './o-table-column-renderer-totalready.component.html'
})
export class OTableColumnRendererTotalReadyComponent extends OBaseTableCellRenderer implements OnInit {

  @ViewChild('templateref', { read: TemplateRef }) public templateref: TemplateRef<any>;

  constructor(protected injector: Injector) {
    super(injector);
    this.setComponentPipe();
  }

  setComponentPipe() {
    this.componentPipe = new OCurrencyPipe(this.injector);
  }

  ngOnInit() {
    this.pipeArguments = {
      currencySimbol: '€',
      currencySymbolPosition: 'right',
      decimalDigits: 2,
      decimalSeparator: ',',
      grouping: true,
      thousandSeparator: '.'
    };
  }

  getCellData(value: any) {
    let parsedValue: string;
    if (this.componentPipe && typeof this.pipeArguments !== 'undefined' && value !== undefined) {
      parsedValue = this.componentPipe.transform(value, this.pipeArguments);
    }
    return parsedValue;
  }

}
