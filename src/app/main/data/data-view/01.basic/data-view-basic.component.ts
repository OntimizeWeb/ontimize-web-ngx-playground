import { Component, ViewEncapsulation } from '@angular/core';
import { DataViewUtils } from '../data-view.utils';

@Component({
  selector: 'data-view-basic',
  templateUrl: './data-view-basic.component.html',
  styleUrls: ['./data-view-basic.component.scss']
})
export class DataViewBasicComponent {

  public staticData = DataViewUtils.getData();

  tableCfg = { visibleColumns: 'name;location;price;duration;score', editButtonInRow: 'yes', detailButtonInRow: 'yes', selectAllCheckbox: 'yes', showPaginatorFirstLastButtons: "yes", filterColumnActiveByDefault: "yes", showReportOnDemandOption: 'no', showChartsOnDemandOption: 'no', exportButton: 'no', showFilterOption: 'no', showConfigurationOption: 'no', editionMode: 'click', detailMode: 'none', multipleSort: 'no' };
  gridCfg = { cols: 4, gutterSize: '2px', gridItemHeight: '175px', quickFilterColumns: 'name;price', insertButtonFloatable: 'no' };

  onExecute(text: string, event: any): void {
    alert('Clicked menu element: ' + text + '\n' + event.data.NAME);
  }

}
