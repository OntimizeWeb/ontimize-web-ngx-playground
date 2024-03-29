import { Component, ViewChild, ViewEncapsulation } from '@angular/core';

const TREE_HTML_DATA = `
  <o-tree #treeview fxFlex service-type="DummyService" service="customers" entity="customer" keys="CUSTOMERID"
      columns="CUSTOMERID;SURNAME;NAME" visible-columns="SURNAME;NAME" separator=", " recursive="no"
       select-all-checkbox="yes" root-title="CUSTOMERS"
      [title]="{title}" [controls]="{controls}" [quick-filter]="{quickFilter}" [refresh-button]="{refreshButton}"(onNodeSelected)="nodeSelected($event)"
      (onNodeExpanded)="nodeExpanded($event)"
      (onNodeCollapsed)="nodeCollapsed($event)"
      (onLoadNextLevel)="nextLevelLoaded($event)"
      (onDataLoaded)="onDataLoaded($event)">
  </o-tree>
`;

const TREE_TS_DATA = `
  @Component({
    selector: 'tree-basic',
    templateUrl: './tree-basic.component.html',
    styleUrls: ['./tree-basic.component.scss'],
    encapsulation: ViewEncapsulation.None,
    host: {
      '[class.tree-basic]': 'true'
    }
  })
  export class TreeBasicComponent {

    treeEvents: Array<any> = [];

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

    onDataLoaded(arg: any) {
      this.treeEvents.push({
        event: 'onDataLoaded',
        data: arg
      });
    }

  }

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
export class TreeBasicComponent {

  @ViewChild('treeview', { static: false })
  tree: any;

  @ViewChild('controlsToggle', { static: false })
  controlsToggle: any;

  @ViewChild('quickFilterToggle', { static: false })
  quickFilterToggle: any;

  @ViewChild('refreshButtonToggle', { static: false })
  refreshButtonToggle: any;

  @ViewChild('treeTitle', { static: false })
  treeTitle: any;

  treeEvents: Array<any> = [];

  files = {

    scss: {
      data: undefined
    },
    typescript: {
      data: TREE_TS_DATA
    }
  };

  onShowSource(exampleComp?: any) {
    const itemData: any = {
      title: this.treeTitle.nativeElement.value,
      controls: this.controlsToggle.checked,
      quickFilter: this.quickFilterToggle.checked,
      refreshButton: this.refreshButtonToggle.checked
    };
    exampleComp.html = this.getHtml(itemData);
  }

  public getHtml(data: any) {
    const tpl = TREE_HTML_DATA.replace('{title}', data.title)
      .replace('{controls}', data.controls)
      .replace('{quickFilter}', data.quickFilter)
      .replace('{refreshButton}', data.refreshButton);
    return tpl;
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

  onDataLoaded(arg: any) {
    this.treeEvents.push({
      event: 'onDataLoaded',
      data: arg
    });
  }

}
