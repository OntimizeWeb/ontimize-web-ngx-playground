import { Component, OnInit, ViewEncapsulation } from '@angular/core';
// import { MdRadioGroup } from '@angular/material';

import { NavigationBarService } from '../../shared/navigation-bar.service';;

const HTML_ROW_DATA = `
<o-row attr="row1" title="Row title" layout-align="start stretch"
  elevation="2">
  <div layout-padding style="background-color:#3498db;" > One </div>
  <div layout-padding style="background-color:#e74c3c;" > Two </div>
  <div layout-padding style="background-color:#f9c922;"> Three </div>
</o-row>
`;

const HTML_COL_DATA = `
<o-column attr="column1" title="Column title" layout-align="start stretch"
  elevation="2">
  <div layout-padding style="background-color:#3498db;" > One </div>
  <div layout-padding style="background-color:#e74c3c;" > Two </div>
  <div layout-padding style="background-color:#f9c922;"> Three </div>
</o-column>
`;

const TYPESCRIPT_DATA = ``;

@Component({
  selector: 'app-containers',
  templateUrl: './containers.component.html',
  styleUrls: ['./containers.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.app-containers]': 'true'
  }
})
export class ContainersComponent implements OnInit {

  layout = 'row';
  protected layoutHorizontal = 'start';
  protected layoutVertical = 'stretch';

  dataHorizontal: Array<any> = [
    { 'value': 'none', 'label': 'none', 'checked': false },
    { 'value': 'start', 'label': 'start (default)', 'checked': true },
    { 'value': 'center', 'label': 'center', 'checked': false },
    { 'value': 'end', 'label': 'end', 'checked': false },
    { 'value': 'space-around', 'label': 'space-around', 'checked': false },
    { 'value': 'space-between', 'label': 'space-between', 'checked': false },
    { 'value': 'space-evenly', 'label': 'space-evenly', 'checked': false }
  ];
  dataVertical: Array<any> = [
    { 'value': 'none', 'label': 'none', 'checked': false },
    { 'value': 'start', 'label': 'start', 'checked': false },
    { 'value': 'center', 'label': 'center', 'checked': false },
    { 'value': 'end', 'label': 'end', 'checked': false },
    { 'value': 'stretch', 'label': 'stretch (default)', 'checked': true }
  ];
  protected files: any = {};

  constructor(protected navigationService: NavigationBarService) {
  }

  ngOnInit() {
    this.files = this.retrieveFiles();
    this.navigationService.setTitle('Layout > Child alignment');
  }

  getLayoutAlign() {
    return this.layoutHorizontal + ' ' + this.layoutVertical;
  }

  onLayoutChange(evt) {
    this.layout = evt.value;
    this.files = this.retrieveFiles();
  }

  onLayoutHorizontalChange(evt) {
    this.layoutHorizontal = evt.value;
  }

  onLayoutVerticalChange(evt) {
    this.layoutVertical = evt.value;
  }

  getFiles() {
    return this.files;
  }

  retrieveFiles() {
    const html = this.layout === 'row' ? HTML_ROW_DATA : HTML_COL_DATA;
    return {
      'html': {
        'data': html
      },
      'scss': {
        'data': undefined
      },
      'typescript': {
        'data': TYPESCRIPT_DATA
      }
    };
  }

  getMainDirection() {
    return this.layout === 'row' ? 'horizontal' : 'vertical';
  }

  getSecondaryDirection() {
    return this.layout === 'column' ? 'horizontal' : 'vertical';
  }
}
