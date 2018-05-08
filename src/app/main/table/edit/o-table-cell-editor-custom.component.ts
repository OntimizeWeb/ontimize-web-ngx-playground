import { Component, Injector, ViewChild, TemplateRef, OnInit, Inject, ElementRef, ViewEncapsulation } from '@angular/core';
import { OBaseTableCellEditor, OTableColumnComponent } from 'ontimize-web-ngx';


export const DEFAULT_INPUTS_O_TABLE_CELL_EDITOR_CUSTOM = [
  ...OBaseTableCellEditor.DEFAULT_INPUTS_O_TABLE_CELL_EDITOR
];

export const DEFAULT_OUTPUTS_O_TABLE_CELL_EDITOR_CUSTOM = [
  ...OBaseTableCellEditor.DEFAULT_OUTPUTS_O_TABLE_CELL_EDITOR
];

@Component({
  selector: 'o-table-cell-editor-custom',
  templateUrl: './o-table-cell-editor-custom.component.html',
  styleUrls: ['./o-table-cell-editor-custom.component.scss'],
  inputs: DEFAULT_INPUTS_O_TABLE_CELL_EDITOR_CUSTOM,
  outputs: DEFAULT_OUTPUTS_O_TABLE_CELL_EDITOR_CUSTOM,
  encapsulation: ViewEncapsulation.None
})

export class OTableCellEditorCustomComponent extends OBaseTableCellEditor implements OnInit {

  public static DEFAULT_INPUTS_O_TABLE_CELL_EDITOR_CUSTOM = DEFAULT_INPUTS_O_TABLE_CELL_EDITOR_CUSTOM;
  public static DEFAULT_OUTPUTS_O_TABLE_CELL_EDITOR_CUSTOM = DEFAULT_OUTPUTS_O_TABLE_CELL_EDITOR_CUSTOM;

  @ViewChild('templateref', { read: TemplateRef }) public templateref: TemplateRef<any>;
  @ViewChild('input') inputRef: ElementRef;

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
