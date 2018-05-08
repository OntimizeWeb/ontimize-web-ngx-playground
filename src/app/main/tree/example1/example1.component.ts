import { Component, OnInit } from '@angular/core';
import { OTranslateService, SnackBarService, OSnackBarConfig } from 'ontimize-web-ngx';
import { NavigationBarService } from '../../../shared/navigation-bar.service';

const HTML_DATA = `
`;

const TYPESCRIPT_DATA = `

`;

@Component({
  selector: 'example1',
  templateUrl: './example1.component.html',
  styleUrls: ['./example1.component.scss']
})
export class TreeExample1Component implements OnInit {

  treeEvents: Array<any> = [];

  constructor(
    protected navigationService: NavigationBarService,
    protected translateService: OTranslateService,
    protected snackBarService: SnackBarService) {
  }

  ngOnInit() {
    const title = this.translateService.get('TREE');
    this.navigationService.setTitle(title);
  }

  getComponentId() {
    return 'Tree';
  }

  getFiles() {
    return [
      {
        'type': 'html',
        'data': HTML_DATA
      },
      {
        'type': 'scss',
        'data': ''
      },
      {
        'type': 'typescript',
        'data': TYPESCRIPT_DATA
      }
    ];
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
