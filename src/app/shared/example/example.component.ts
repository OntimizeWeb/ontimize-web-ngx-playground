import { Component, ElementRef, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'example-comp',
  moduleId: module.id,
  styleUrls: ['example.component.css'],
  templateUrl: 'example.component.html',
  inputs: [
    'compName: comp-name',
    'orderedFiles: files'
  ],
  encapsulation: ViewEncapsulation.None
})
export class ExampleComponent {

  public showSource: boolean = false;
  protected compName: string = '';
  protected orderedFiles: Array<string>;


  private tplData: Object;

  constructor(protected elRef: ElementRef) {
    this.tplData = {};
  }

  ngOnInit() {
    this.tplData['html'] = this.initializeData('html');
    this.tplData['scss'] = this.initializeData('scss');
    this.tplData['typescript'] = this.initializeData('typescript');
  }

  initializeData(type:string) {
    let tpl = '';
    if (this.orderedFiles && this.orderedFiles.length > -1) {
      this.orderedFiles.forEach((item) => {
        if (item['type'] === type) {
          tpl = item['data'];
        }
      });
    }
    return tpl;
  }

  getTplData(type:string) {
    let tpl = this.tplData[type];
    return tpl ? tpl : '';
  }

}
