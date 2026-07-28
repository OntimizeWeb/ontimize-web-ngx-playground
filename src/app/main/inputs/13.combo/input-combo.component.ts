import { Component } from '@angular/core';

import { MockData } from '../../../shared/mock-data/mockData';
import { ComboCodeExamples } from './code-examples';

@Component({
  selector: 'input-combo',
  templateUrl: './input-combo.component.html'
})
export class InputComboComponent {

  ComboCodeExamples = ComboCodeExamples;

	disabled: boolean = false;

  MockData = MockData;
}
