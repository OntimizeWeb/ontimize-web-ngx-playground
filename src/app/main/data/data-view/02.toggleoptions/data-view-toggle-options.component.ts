import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { GridConfig, TableConfig } from 'ontimize-web-ngx-extra-components';

const DATA_VIEW_HTML_DATA = `
  <o-data-view #dv attr="dataView" [static-data]="staticData" keys="id" columns="id;name;sector;employees;annualRevenue;rating;foundedYear"
    query-rows="8" [table-config]="tableCfg" [grid-config]="gridCfg" query-on-init="false" toggle-button="true" toggle-on-toolbar="{toggleOnToolbar}" toggle-floatable="{toggleFloatable}">
     <ng-template oDataViewTableColumns>
        <o-table-columns-filter columns="name;location;price;duration;score"></o-table-columns-filter>

        <o-table-column attr="name" title-align="start" editable="yes" width="400px"></o-table-column>
        <o-table-column attr="location" title-align="start" editable="yes" width="500px"></o-table-column>
        <o-table-column attr="price" type="currency" thousand-separator="." decimal-separator="," currency-symbol="€" currency-symbol-position="right"
          title-align="end"></o-table-column>
        <o-table-column attr="score" title-align="end" filterable="yes" sortable="yes">
          <o-table-cell-renderer-real></o-table-cell-renderer-real>
        </o-table-column>

        <o-table-paginator page-size-options="5;10;15"></o-table-paginator>
      </ng-template>


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
  selector: 'data-view-toggle-options',
  templateUrl: './data-view-toggle-options.component.html',
  styleUrls: ['./data-view-toggle-options.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.data-view-toggle-options]': 'true'
  }
})
export class DataViewToggleOptionsComponent {

  tableCfg: TableConfig = { visibleColumns: 'name;location;price;duration;score', editButtonInRow: 'yes', detailButtonInRow: 'yes', virtualScroll: 'false', selectAllCheckbox: 'yes', showPaginatorFirstLastButtons: "yes", filterColumnActiveByDefault: "yes", showReportOnDemandOption: 'no', showChartsOnDemandOption: 'no', exportButton: 'no', showFilterOption: 'no', showConfigurationOption: 'no', editionMode: 'click', detailMode: 'none', multipleSort: 'no' };
  gridCfg: GridConfig = { cols: 4, gutterSize: '2px', gridItemHeight: '175px', quickFilterColumns: 'name;price', insertButtonFloatable: 'no' };

}
`;

type ToggleMode = 'toggleButton' | 'toggleOnToolbar' | 'toggleFloatable';

@Component({
  selector: 'data-view-toggle-options',
  templateUrl: './data-view-toggle-options.component.html',
  styleUrls: ['./data-view-toggle-options.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.data-view-toggle-options]': 'true'
  }
})

export class DataViewToggleOptionsComponent {

  html: string;

  files = {
    typescript: {
      data: DATA_VIEW_TS_DATA
    }
  }

  toggleMode: ToggleMode = 'toggleButton';

  tableCfg: TableConfig = { visibleColumns: 'name;location;price;duration;score', editButtonInRow: 'yes', detailButtonInRow: 'yes', virtualScroll: 'false', selectAllCheckbox: 'yes', showPaginatorFirstLastButtons: "yes", filterColumnActiveByDefault: "yes", showReportOnDemandOption: 'no', showChartsOnDemandOption: 'no', exportButton: 'no', showFilterOption: 'no', showConfigurationOption: 'no', editionMode: 'click', detailMode: 'none', multipleSort: 'no' };
  gridCfg: GridConfig = { cols: 4, gutterSize: '2px', gridItemHeight: '175px', quickFilterColumns: 'name;price', insertButtonFloatable: 'no' };

  onShowSource(): void {
    this.refreshHtml();
  }

  onToggleModeChange(mode: ToggleMode): void {
    this.toggleMode = mode;
    this.refreshHtml();
  }

  private refreshHtml(): void {
    const data = this.getToggleData();
    this.html = this.getHtml(data);
  }

  private getToggleData(): { toggleOnToolbar: boolean; toggleFloatable: boolean } {
    return {
      toggleOnToolbar: this.toggleMode === 'toggleOnToolbar',
      toggleFloatable: this.toggleMode === 'toggleFloatable'
    };
  }

  getHtml(data: { toggleOnToolbar: boolean; toggleFloatable: boolean }): string {
    return DATA_VIEW_HTML_DATA
      .replace('{toggleOnToolbar}', String(data.toggleOnToolbar))
      .replace('{toggleFloatable}', String(data.toggleFloatable));
  }

}
