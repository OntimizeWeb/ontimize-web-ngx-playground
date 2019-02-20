import { Component, ViewChild } from '@angular/core';
import { GridUtils } from '../grid.utils';


@Component({
  selector: 'grid-hybrid',
  templateUrl: './grid-hybrid.component.html'
})

export class GridHybridComponent {

  getStaticData() {
    return GridUtils.getData('o-grid-hybrid');
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
