import { Component, Injector, ViewChild, TemplateRef } from '@angular/core';

import { OBaseTableCellRenderer, OCurrencyPipe } from 'ontimize-web-ngx';


@Component({
    selector: 'o-table-column-renderer-balance',
    templateUrl: './o-table-column-renderer-balance.component.html',
    host: { 'o-mat-column-currency': 'true' }
})

export class OTableColumnRendererBalanceComponent extends OBaseTableCellRenderer {


    @ViewChild('templateref', { read: TemplateRef }) public templateref: TemplateRef<any>;


    constructor(protected injector: Injector) {

        super(injector);
        this.initialize();
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

    generateArray(obj) {
        return Object.keys(obj).map((key) => { return { key: key, value: obj[key] } });
    }

    getCellData(value: any) {
        let parsedValue: string;
        if (this.componentPipe && typeof this.pipeArguments !== 'undefined' && value !== undefined) {

            parsedValue = this.componentPipe.transform(value, this.pipeArguments);
        }
        return parsedValue;
    }

}
