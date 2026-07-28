import { Component } from '@angular/core';

import { MockData } from '../../../shared/mock-data/mockData';
import { ListPickerCodeExamples } from './code-examples';

@Component({
  selector: 'input-listpicker',
  templateUrl: './input-listpicker.component.html'
})
export class InputListpickerComponent {

  ListPickerCodeExamples = ListPickerCodeExamples;

  MockData = MockData;
}
