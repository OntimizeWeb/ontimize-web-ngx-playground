import { Component, ElementRef, ViewEncapsulation, EventEmitter, OnInit } from '@angular/core';
import { InputConverter } from 'ontimize-web-ngx';
import { Console } from '@angular/core/src/console';



@Component({
  selector: 'example-comp',
  moduleId: module.id,
  styleUrls: ['example.component.scss'],
  templateUrl: 'example.component.html',
  inputs: [
    'compName: comp-name',
    'orderedFiles: files',
    'collapsible',
    'collapsed'
  ],
  outputs: [
    'onShowSource : showSource'
  ],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.example-comp]': 'true'
  }
})
export class ExampleComponent implements OnInit {

  public showSource = false;
  compName = '';
  orderedFiles: Array<any>;

  tabs: any[] = [];

  @InputConverter()
  collapsible: boolean = false;

  @InputConverter()
  collapsed: boolean = false;
  protected html: string = undefined;

  onShowSource: EventEmitter<any> = new EventEmitter<any>();

  private tplData: Object;

  constructor(protected elRef: ElementRef) {
    this.tplData = {};
  }

  toggleShowSource() {
    this.showSource = !this.showSource;
    if (this.showSource) {
      this.onShowSource.emit();
    }
  }

  ngOnInit() {
    this.initilizeData();

  }

  initilizeData() {
    if(this.orderedFiles){
      this.orderedFiles.map(x => {
        if (x.type !== '' && x.data !== '') {
          const item = {};
          item['type'] = x.type;
          item['data'] = x.data;

          this.tabs.push(item);
        }
      });
    }
  };
}

