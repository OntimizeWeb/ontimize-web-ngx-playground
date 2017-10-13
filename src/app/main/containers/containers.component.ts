import { Component, OnInit } from '@angular/core';
import { MdRadioGroup } from '@angular/material';

import { NavigationBarService } from '../../shared/navigation-bar.service';;

const HTML_ROW_DATA = `
<o-row attr="row1" title-label="Row title" layout-align="start stretch"
  elevation="2">
  <div layout-padding style="background-color:#3498db;" > One </div>
  <div layout-padding style="background-color:#e74c3c;" > Two </div>
  <div layout-padding style="background-color:#f9c922;"> Three </div>
</o-row>
`;

const HTML_COL_DATA = `
<o-column attr="column1" title-label="Column title" layout-align="start stretch"
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
  styleUrls: ['./containers.component.scss']
})
export class ContainersComponent implements OnInit {

  layout = 'row';
  protected layoutHorizontal = 'start';
  protected layoutVertical = 'stretch';

  dataHorizontal: Array<Object> = [];
  dataVertical: Array<Object> = [];
  protected files: Array<Object> = [];

  constructor(protected navigationService: NavigationBarService) {
  }

  ngOnInit() {
    this.dataHorizontal = [
      { 'value': 'none', 'label': 'none', 'checked': false },
      { 'value': 'start', 'label': 'start (default)', 'checked': true },
      { 'value': 'center', 'label': 'center', 'checked': false },
      { 'value': 'end', 'label': 'end', 'checked': false },
      { 'value': 'space-around', 'label': 'space-around', 'checked': false },
      { 'value': 'space-between', 'label': 'space-between', 'checked': false }
    ];
    this.dataVertical = [
      { 'value': 'none', 'label': 'none', 'checked': false },
      { 'value': 'start', 'label': 'start', 'checked': false },
      { 'value': 'center', 'label': 'center', 'checked': false },
      { 'value': 'end', 'label': 'end', 'checked': false },
      { 'value': 'stretch', 'label': 'stretch (default)', 'checked': true }
    ];

    this.files = this.retrieveFiles();
    this.navigationService.setTitle('Layout > Child alignment');
  }

  getLayoutAlign() {
    return this.layoutHorizontal + ' ' + this.layoutVertical;
  }

  onLayoutChange(evt) {
    const self = this;
    window.setTimeout(() => {
      self.layout = evt.value;
      self.files = self.retrieveFiles();
    }, 0);
  }

  onLayoutHorizontalChange(evt) {
    const self = this;
    window.setTimeout(() => {
      self.layoutHorizontal = evt.value;
    }, 0);
  }

  onLayoutVerticalChange(evt) {
    const self = this;
    window.setTimeout(() => {
      self.layoutVertical = evt.value;
    }, 0);
  }

  getComponentId() {
    return this.layout === 'row' ? 'Rows' : 'Columns';
  }

  getFiles() {
    return this.files;
  }

  retrieveFiles() {
    const html = this.layout === 'row' ? HTML_ROW_DATA : HTML_COL_DATA;
    return [
      {
        'type': 'html',
        'data': html
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

}
