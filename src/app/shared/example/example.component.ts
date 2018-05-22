import { Component, ElementRef, ViewEncapsulation, EventEmitter, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { InputConverter } from 'ontimize-web-ngx';
import { Console } from '@angular/core/src/console';

@Component({
  selector: 'example-comp',
  styleUrls: ['example.component.scss'],
  templateUrl: 'example.component.html',
  inputs: [
    'compName: comp-name',
    'files',
    'collapsible',
    'collapsed'
  ],
  outputs: [
    'onShowSource : showSource'
  ],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.example-comp]': 'true'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExampleComponent implements OnInit {

  showSource = false;
  compName = '';
  files: any = {};
  exampleFiles: any[] = [];

  @InputConverter()
  collapsible: boolean = false;

  @InputConverter()
  collapsed: boolean = false;
  // protected html: string = undefined;

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
    this.exampleFiles = this.files.files || [];
    // this.initilizeData();
  }

  // initilizeData() {
  //   if (this.orderedFiles) {
  //     this.orderedFiles.map(x => {
  //       if (x.type !== '' && x.data !== '') {
  //         const item = {};
  //         item['type'] = x.type;
  //         item['data'] = x.data;
  //         this.tabs.push(item);
  //       }
  //     });
  //   }
  // };

  set html(value: string) {
    for (const tab of this.exampleFiles) {
      if (tab.type === 'html') {
        tab.data = value;
      }
    }
  }
}

