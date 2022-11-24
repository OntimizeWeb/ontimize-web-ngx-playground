import { Component, ViewChild } from '@angular/core';

import { GridUtils } from '../grid.utils';

@Component({
  selector: 'grid-fixed',
  templateUrl: './grid-fixed.component.html',
  styleUrls: ['./grid-fixed.component.scss']
})

export class GridFixedComponent {

  @ViewChild('height', { static: false })
  gridHeight: any;


  getStaticData() {
    return GridUtils.getData('o-grid-fixed');
  }

  getFiles(type) {
    return GridUtils.getFiles(type);
  }

  onShowSource(grid?: any, exampleComp?: any) {
    exampleComp.html = this.replaceHtml(GridUtils.HTML_DATA_GRID_FIXED, grid);
  }

  public replaceHtml(html: string, grid?: any) {
    if (grid) {
      html = html.replace('{title}', grid.title || '')
        .replace('{height}', this.gridHeight.nativeElement.value)
        .replace('{fixedHeader}', grid.fixedHeader);
    }
    return html;
  }

  reloadGridData(grid) {
    setTimeout(() => {
      grid.reloadData();
    }, 0);
  }

}
