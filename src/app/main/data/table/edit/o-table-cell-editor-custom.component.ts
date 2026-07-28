import { Component, ElementRef, Injector, OnInit, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
import {
  OBaseTableCellEditor,
  OTableColumnComponent,
  Util,
} from 'ontimize-web-ngx';


@Component({
  selector: 'o-table-cell-editor-custom',
  templateUrl: './o-table-cell-editor-custom.component.html',
  styleUrls: ['./o-table-cell-editor-custom.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class OTableCellEditorCustomComponent extends OBaseTableCellEditor implements OnInit {


  @ViewChild('templateref', { read: TemplateRef }) public templateref: TemplateRef<any>;
  @ViewChild('input') inputRef: ElementRef;

  id = Util.randomNumber();
  constructor(protected injector: Injector) {
    super(injector);
    this.type = 'custom';
    OTableColumnComponent.addEditor(this.type, OTableCellEditorCustomComponent);
  }

  ngOnInit(): void {
    super.ngOnInit();
  }

  startEdition(data: any) {
    super.startEdition(data);
  }

}
