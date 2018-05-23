import { Component, ElementRef, ViewEncapsulation, EventEmitter, OnInit, ChangeDetectionStrategy } from '@angular/core';
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
export class ExampleComponent {
  aditionalTabs: any[];

  showSource = false;
  compName = '';
  files: IFiles = {};

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

  ngAfterViewInit() {
    this.aditionalTabs = this.files.files;
  }
}

