import { Component, ViewChild } from '@angular/core';

import { OCheckboxComponent } from 'ontimize-web-ng2/ontimize';

@Component({
  selector: 'checkbox-home',
  moduleId: module.id,
  styleUrls: ['checkbox-home.component.css'],
  templateUrl: 'checkbox-home.component.html'
})
export class CheckboxHomeComponent {

  @ViewChild('checkbox') checkBox: OCheckboxComponent;

  constructor() {
  }

  ngAfterViewInit() {
    this.checkBox.isReadOnly = false;
  }

}
