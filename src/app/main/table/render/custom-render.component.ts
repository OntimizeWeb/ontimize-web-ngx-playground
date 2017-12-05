import { Component,Injector, ViewChild, TemplateRef} from '@angular/core';

import { OBaseTableCellRenderer } from 'ontimize-web-ngx';



@Component({
    selector: 'custom-render',
    templateUrl: './custom-render.component.html'
})

export class CustomRenderComponent extends OBaseTableCellRenderer {


    @ViewChild('templateref', { read: TemplateRef }) public templateref: TemplateRef<any>;

    constructor(protected injector: Injector) {

        super(injector);
        this.initialize();
        
    }
    generateArray(obj) {
        return Object.keys(obj).map((key) => { return { key: key, value: obj[key] } });
    }
 

}
