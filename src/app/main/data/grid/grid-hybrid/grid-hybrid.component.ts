import { Component } from '@angular/core';

import { GridUtils } from '../grid.utils';

@Component({
  selector: 'grid-hybrid',
  templateUrl: './grid-hybrid.component.html'
})

export class GridHybridComponent {

  getStaticData(key) {
    return GridUtils.getData(key);
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

  reloadGridData(grid) {
    setTimeout(() => {
      grid.reloadData();
    }, 0);
  }

}
