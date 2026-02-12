import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { GridConfig, TableConfig } from 'ontimize-web-ngx-extra-components';

const DATA_VIEW_HTML_DATA = `
<div fxLayout="row" fxLayoutAlign="end">
    <button mat-button (click)="dv.changeView('grid')">Show grid</button>
    <button mat-button (click)="dv.changeView('table')">Show tabla</button>
  </div>

  <o-data-view #dv attr="dataView" service-type="packs" entity="packs" keys="id" columns="id;name;location;price;duration;score" query-rows="8"
    [table-config]="tableCfg" [grid-config]="gridCfg" refresh-button="no" toggle-button="no" toggle-on-toolbar="no" show-buttons-text="no"
    title="Adventure Packs">

    <ng-template oDataViewTableColumns>
      <o-table-columns-filter columns="name;location;price;duration;score"></o-table-columns-filter>
      <o-table-column attr="name" title-align="start" editable="yes" width="400px"></o-table-column>
      <o-table-column attr="location" title-align="start" editable="yes" width="500px"></o-table-column>
      <o-table-column attr="price" type="currency" thousand-separator="." decimal-separator="," currency-symbol="€" currency-symbol-position="right"
        title-align="end"></o-table-column>
      <o-table-column attr="score" title-align="end" filterable="yes" sortable="yes">
        <o-table-cell-renderer-real></o-table-cell-renderer-real>
      </o-table-column>
      <o-table-column-aggregate attr="score" aggregate="avg" title="Avg Price"></o-table-column-aggregate>
      <o-table-paginator page-size-options="5;10;15"></o-table-paginator>
    </ng-template>

    <ng-template oDataViewGridItem let-item>
      <mat-card class="grid-card">
        <mat-card-header>
          <mat-card-title>{{ item.name }}</mat-card-title>
          <mat-card-subtitle>{{ item.location }}</mat-card-subtitle>
        </mat-card-header>
        <mat-card-content>
          <div fxLayout="column" fxLayoutAlign="center">Cost: {{item.price | currency}}</div>
        </mat-card-content>
      </mat-card>
    </ng-template>

  </o-data-view>
`;

const DATA_VIEW_TS_DATA = `
@Component({
  selector: 'data-view-custom-button',
  templateUrl: './data-view-custom-button.component.html',
  styleUrls: ['./data-view-custom-button.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.data-view-custom-button]': 'true'
  }
})
export class DataViewCustomButtonComponent {

  tableCfg: TableConfig = { visibleColumns: 'name;location;price;duration;score', editButtonInRow: 'yes', detailButtonInRow: 'yes', selectAllCheckbox: 'yes', showPaginatorFirstLastButtons: "yes", filterColumnActiveByDefault: "yes", showReportOnDemandOption: 'no', showChartsOnDemandOption: 'no', exportButton: 'no', showFilterOption: 'no', showConfigurationOption: 'no', editionMode: 'click', detailMode: 'none', multipleSort: 'no' };
  gridCfg: GridConfig = { cols: 4, gutterSize: '2px', gridItemHeight: '175px', quickFilterColumns: 'name;price', insertButtonFloatable: 'no' };

}
`;

@Component({
  selector: 'data-view-custom-button',
  templateUrl: './data-view-custom-button.component.html',
  styleUrls: ['./data-view-custom-button.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.data-view-custom-button]': 'true'
  }
})
export class DataViewCustomButtonComponent {

  files = {
    html: {
      data: DATA_VIEW_HTML_DATA
    },
    typescript: {
      data: DATA_VIEW_TS_DATA
    }
  };

  tableCfg: TableConfig = { visibleColumns: 'name;location;price;duration;score', editButtonInRow: 'yes', detailButtonInRow: 'yes', selectAllCheckbox: 'yes', showPaginatorFirstLastButtons: "yes", filterColumnActiveByDefault: "yes", showReportOnDemandOption: 'no', showChartsOnDemandOption: 'no', exportButton: 'no', showFilterOption: 'no', showConfigurationOption: 'no', editionMode: 'click', detailMode: 'none', multipleSort: 'no' };
  gridCfg: GridConfig = { cols: 4, gutterSize: '2px', gridItemHeight: '175px', quickFilterColumns: 'name;price', insertButtonFloatable: 'no' };

}
