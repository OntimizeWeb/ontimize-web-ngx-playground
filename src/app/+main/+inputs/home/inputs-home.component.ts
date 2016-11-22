import { Component, ViewChild } from '@angular/core';

import { OTextInputComponent } from 'ontimize-web-ng2/ontimize';

@Component({
  selector: 'inputs-home',
  moduleId: module.id,
  styleUrls: ['inputs-home.component.css'],
  templateUrl: 'inputs-home.component.html'
})
export class InputsHomeComponent {

  @ViewChild('input') input: OTextInputComponent;

  constructor() {
  }

  ngAfterViewInit() {
    if (this.input) {
      this.input.isReadOnly = false;
    }
  }

  getInputValue() {
    return 'John Doe';
  }

}
