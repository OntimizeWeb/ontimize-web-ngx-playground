import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, ViewEncapsulation } from '@angular/core';
import { InputConverter } from 'ontimize-web-ngx';
import { Console } from '@angular/core/src/console';

export interface IFiles {
  html?: any;
  scss?: any;
  typescript?: any;
  files?: any[];
}

@Component({
  selector: 'example-comp',
  styleUrls: ['example.component.scss'],
  templateUrl: 'example.component.html',
  inputs: [
    'compName: comp-name',
    'compDesc: comp-desc',
    'files',
    'collapsible',
    'collapsed',
    'tabHeight: tab-height'
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
export class ExampleComponent {

  aditionalTabs: any[];
  _showSource = false;
  compName = '';
  compDesc: string;
  files: IFiles = {};
  tabHeight: string = '350px';

  @InputConverter()
  collapsible: boolean = false;
  @InputConverter()
  collapsed: boolean = false;

  onShowSource: EventEmitter<any> = new EventEmitter<any>();

  private tplData: Object;

  constructor() {
    this.tplData = {};
  }

  toggleShowSource() {
    this.showSource = !this.showSource;
    if (this.showSource) {
      this.onShowSource.emit();
    }
  }

  ngAfterViewInit() {
    this.aditionalTabs = this.files.files;
  }

  get showSource(): boolean {
    return this._showSource;
  }

  set showSource(val: boolean) {
    this._showSource = val;
  }

}
