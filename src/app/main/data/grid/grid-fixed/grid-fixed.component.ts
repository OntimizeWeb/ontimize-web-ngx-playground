import { Component, HostListener, ViewChild } from '@angular/core';
import { ConfigMenu } from '../../config-menu.class';

import { GridUtils } from '../grid.utils';

@Component({
  selector: 'grid-fixed',
  templateUrl: './grid-fixed.component.html',
  styleUrls: ['./grid-fixed.component.scss']
})

export class GridFixedComponent extends ConfigMenu {

  @ViewChild('height', { static: false })
  gridHeight: any;

  ngAfterViewInit(): void {
    this.styleChangeOnResize("grid-conf-btn-id", "80", "0");
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.styleChangeOnResize("grid-conf-btn-id", "80", "0");
  }

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
