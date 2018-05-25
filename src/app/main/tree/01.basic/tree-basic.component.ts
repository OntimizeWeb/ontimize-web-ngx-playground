import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { OTranslateService, SnackBarService, OSnackBarConfig } from 'ontimize-web-ngx';
import { NavigationBarService } from '../../../shared/navigation-bar.service';

const TREE_HTML_DATA = `
`;

const TREE_TS_DATA = `

`;

@Component({
  selector: 'tree-basic',
  templateUrl: './tree-basic.component.html',
  styleUrls: ['./tree-basic.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.tree-basic]': 'true'
  }
})
export class TreeBasicComponent implements OnInit {

  treeEvents: Array<any> = [];

  files = {
    'html': {
      'data': TREE_HTML_DATA
    },
    'scss': {
      'data': undefined
    },
    'typescript': {
      'data': undefined
    }
  };

  constructor(
    protected navigationService: NavigationBarService,
    protected translateService: OTranslateService,
    protected snackBarService: SnackBarService) {
  }

  ngOnInit() {
    const title = this.translateService.get('TREE');
    this.navigationService.setTitle(title);
  }

  onShowSource(tree?: any, exampleComp?: any) {

  }

  nodeSelected(arg: any) {
    this.treeEvents.push({
      event: 'onNodeSelected',
      data: arg
    });
  }

  nodeExpanded(arg: any) {
    this.treeEvents.push({
      event: 'onNodeExpanded',
      data: arg
    });
  }

  nodeCollapsed(arg: any) {
    this.treeEvents.push({
      event: 'onNodeCollapsed',
      data: arg
    });
  }

  nextLevelLoaded(arg: any) {
    this.treeEvents.push({
      event: 'onLoadNextLevel',
      data: arg
    });
  }

}
