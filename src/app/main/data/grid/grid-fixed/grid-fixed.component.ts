import { Component, ViewChild } from '@angular/core';
import { GridUtils } from '../grid.utils';
import { ExampleComponent } from '../../../../shared/example/example.component';

@Component({
  selector: 'grid-fixed',
  templateUrl: './grid-fixed.component.html',
  styleUrls: ['./grid-fixed.component.scss']
})

export class GridFixedComponent {

  html: string;

  @ViewChild('height', { static: false })
  gridHeight: any;

  @ViewChild('grid', { static: false })
  grid: any;

  constructor() { }

  getStaticData() {
    return GridUtils.getData('o-grid-fixed');
  }

  getFiles(type) {
    return GridUtils.getFiles(type);
  }

  onShowSource(grid?: any, exampleComp?: any) {
    this.html = this.replaceHtml(GridUtils.HTML_DATA_GRID_FIXED, grid);
  }

  updateCodeValue(key: string, value) {
    let htmlData: string = GridUtils.HTML_DATA_GRID_FIXED;
    htmlData = htmlData.replace("{" + key + "}", value);
    this.html = this.replaceHtml(htmlData, this.grid);
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
