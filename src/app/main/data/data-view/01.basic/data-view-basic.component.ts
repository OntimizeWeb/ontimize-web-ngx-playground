import { Component, ViewEncapsulation } from '@angular/core';
import { GridConfig, TableConfig } from 'ontimize-web-ngx-extra-components';

const DATA_VIEW_HTML_DATA = `
  <o-data-view #dv attr="dataView" service-type="packs" entity="packs" keys="id" columns="id;name;location;price;duration;score"
    [table-config]="tableCfg" [grid-config]="gridCfg" refresh-button="no" query-rows="8" show-buttons-text="no" title="Adventure packs"
    quick-filter-placeholder="">

    <ng-template oDataViewTableColumns>
      <o-table-columns-filter columns="name;location;price;duration;score"></o-table-columns-filter>

      <o-table-column attr="name" title-align="start" editable="yes" width="400px"></o-table-column>
      <o-table-column attr="location" title-align="start" editable="yes" width="500px"></o-table-column>
      <o-table-column attr="price" type="currency" thousand-separator="." decimal-separator="," currency-symbol="€" currency-symbol-position="right"
        title-align="end"></o-table-column>
      <o-table-column attr="score" title-align="end" filterable="yes" sortable="yes">
        <o-table-cell-renderer-real></o-table-cell-renderer-real>
      </o-table-column>

      <o-table-column-aggregate attr="score" aggregate="avg" title="Avg Score"></o-table-column-aggregate>

      <o-table-context-menu [context-menu]="contextMenu" insert="no" edit="no" view-detail="no"></o-table-context-menu>

      <o-table-paginator page-size-options="5;10;15"></o-table-paginator>
    </ng-template>

    <o-context-menu #contextMenu>
      <o-context-menu-item icon="grade" label="Item 1" (execute)="onExecute('Item 1', $event)"></o-context-menu-item>
      <o-context-menu-item icon="grade" label="Item 2" enabled="no"></o-context-menu-item>
    </o-context-menu>

    <ng-template oDataViewGridItem let-item>
      <mat-card fxLayout="column" class="grid-card">
        <mat-card-header fxLayout="row">
          <mat-card-title>{{ item.name }}</mat-card-title>
          <mat-card-subtitle>{{ item.location }}</mat-card-subtitle>
        </mat-card-header>
        <mat-card-content fxLayout="row" fxLayoutAlign="end end" fxFlex="100">
          Cost: {{item.price | currency}}
        </mat-card-content>
      </mat-card>
    </ng-template>

  </o-data-view>
`;

const DATA_VIEW_TS_DATA = `
  @Component({
    selector: 'data-view-basic',
    templateUrl: './data-view-basic.component.html',
    styleUrls: ['./data-view-basic.component.scss'],
    encapsulation: ViewEncapsulation.None,
    host: {
      '[class.data-view-basic]': 'true'
    }
  })
  export class DataViewBasicComponent {

    tableCfg: TableConfig = { visibleColumns: 'name;location;price;duration;score', editButtonInRow: 'yes', detailButtonInRow: 'yes', virtualScroll: 'false', selectAllCheckbox: 'yes', showPaginatorFirstLastButtons: "yes", filterColumnActiveByDefault: "yes", showReportOnDemandOption: 'no', showChartsOnDemandOption: 'no', exportButton: 'no', showFilterOption: 'no', showConfigurationOption: 'no', editionMode: 'click', detailMode: 'none', multipleSort: 'no' };
    gridCfg: GridConfig = { cols: 4, gutterSize: '2px', gridItemHeight: '175px', quickFilterColumns: 'name;price', insertButtonFloatable: 'no' };

    onExecute(text: string, event: any): void {
      alert('Clicked menu element: ' + text + event.data.NAME);
    }

  }
`;

@Component({
  selector: 'data-view-basic',
  templateUrl: './data-view-basic.component.html',
  styleUrls: ['./data-view-basic.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.data-view-basic]': 'true'
  }
})
export class DataViewBasicComponent {

  files = {
    html: {
      data: DATA_VIEW_HTML_DATA
    },
    typescript: {
      data: DATA_VIEW_TS_DATA
    }
  };

  tableCfg: TableConfig = { visibleColumns: 'name;location;price;duration;score', editButtonInRow: 'yes', detailButtonInRow: 'yes', virtualScroll: 'false', selectAllCheckbox: 'yes', showPaginatorFirstLastButtons: "yes", filterColumnActiveByDefault: "yes", showReportOnDemandOption: 'no', showChartsOnDemandOption: 'no', exportButton: 'no', showFilterOption: 'no', showConfigurationOption: 'no', editionMode: 'click', detailMode: 'none', multipleSort: 'no' };
  gridCfg: GridConfig = { cols: 4, gutterSize: '2px', gridItemHeight: '175px', quickFilterColumns: 'name;price', insertButtonFloatable: 'no' };

  onExecute(text: string, event: any): void {
    alert('Clicked menu element: ' + text + '\n' + event.data.NAME);
  }

}
