import { Component } from '@angular/core';
import { GridUtils } from '../grid.utils';
import { ExampleComponent } from 'app/shared/example/example.component';

@Component({
  selector: 'grid-basic',
  templateUrl: './grid-basic.component.html',
  styleUrls: ['./grid-basic.component.scss']
})
export class GridBasicComponent {

  public columns = 4;
  public pagesize = 8;
  public sortColumn;
  public gutterSize = 1;

  getStaticData() {
    return GridUtils.getData('o-grid-basic');
  }

  getFiles(type) {
    return GridUtils.getFiles(type);
  }

  onShowSource(grid?: any, exampleComp?: ExampleComponent) {
    exampleComp.html = this.replaceHtml(GridUtils.HTML_DATA_GRID, grid);
  }


  public replaceHtml(html: string, grid?: any) {
    if (grid) {
      html = html.replace('{title}', grid.title || '')
        .replace('{columns}', grid.cols)
        .replace('{orderable}', grid.showSort)
        .replace('{quickfilter}', grid.quickFilter)
        .replace('{queryRows}', grid.queryRows)
        .replace('{controls}', grid.controls)
        .replace('{showPageSize}', grid.showPageSize)
        .replace('{sortColumn}', grid.sortColumn ? grid.sortColumn : '')
        .replace('{refreshButton}', grid.refreshButton)
        .replace('{insertButton}', grid.insertButton)
        .replace('{paginationControls}', grid.paginationControls)
        .replace('{fixedHeader}', grid.fixedHeader)
        .replace('{gutterSize}', grid.gutterSize);
    }

    return html;
  }

  reloadGridData(grid) {
    setTimeout(() => {
      grid.reloadData();
    }, 0);
  }

}
