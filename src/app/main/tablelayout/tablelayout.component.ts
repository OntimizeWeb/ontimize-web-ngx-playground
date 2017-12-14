import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { TableLayoutUtils } from './tablelayout-utils';
import { OTranslateService } from 'ontimize-web-ngx';

@Component({
    selector: 'app-tablelayout',
    templateUrl: './tablelayout.component.html',
    //styleUrls: ['./tablelayout.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class TableLayoutComponent implements OnInit {

    @ViewChild('fixedHeaderToggle')
    fixedHeaderToggle: any = true;

    @ViewChild('title')
    tableTitle: any;

    @ViewChild('height')
    tableHeight: any;


    constructor(
        protected translateService: OTranslateService) {

    }

    ngOnInit() {

    }

    getTableData(): Array<any> {
        const data: Array<any> = TableLayoutUtils.getAccounts();
        return this.getData(data);
    }

    private getData(data: any[]) {
        const result = [];
        for (let i = 0; i < data.length; i++) {
            result.push(data[i]);
        }
        return result;
    }

    getComponentId() {
        return this.translateService.get('TABLE');;
    }


    getFiles() {
        return TableLayoutUtils.getFiles();
    }

    onShowSource(exampleComp?: any) {
        const itemData: any = {
            fixedHeader: this.fixedHeaderToggle.checked,
            height: this.tableHeight.nativeElement.value,
            title: this.tableTitle.nativeElement.value
        };
        exampleComp.html = TableLayoutUtils.getHtml(itemData);

    }

}
