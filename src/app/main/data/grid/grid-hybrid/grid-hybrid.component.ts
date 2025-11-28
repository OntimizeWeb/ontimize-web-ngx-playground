import { Component, OnInit, ViewChild } from '@angular/core';

import { GridUtils } from '../grid.utils';
import { OGridComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'grid-hybrid',
  templateUrl: './grid-hybrid.component.html'
})

export class GridHybridComponent {

  data: any;

  constructor() {
    this.data = GridUtils.getData('o-grid-hybrid');
  }

  getFiles(type) {
    return GridUtils.getFiles(type);
  }

  onShowSource(grid?: any, exampleComp?: any) {
    exampleComp.html = this.replaceHtml(GridUtils.HTML_DATA_GRID_HYBRID, grid);
  }

  public replaceHtml(html: string, grid?: any) {
    return html;
  }

}
