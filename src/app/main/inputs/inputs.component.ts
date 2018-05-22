import { Component, OnInit, ViewChild, AfterViewInit, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';

import {
  OTextInputComponent,
  ODateInputComponent,
  OIntegerInputComponent,
  ORealInputComponent,
  OPercentInputComponent,
  OCurrencyInputComponent,
  ONIFInputComponent,
  OEmailInputComponent,
  OPasswordInputComponent,
  OTextareaInputComponent,
  OTranslateService,
  OFileInputComponent,
  OCheckboxComponent
} from 'ontimize-web-ngx';

import { NavigationBarService } from '../../shared/navigation-bar.service';;
import { InputUtils } from './inputs-utils';

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.inputs]': 'true'
  }
})
export class InputsComponent implements OnInit, AfterViewInit {

  protected dateValue: Date;

  constructor(
    protected navigationService: NavigationBarService,
    protected translateService: OTranslateService) {
  }

  ngOnInit() {
    let title = '';
    title += this.translateService.get('INPUTS');
    title = title + ' > ' + this.translateService.get('INPUTS');
    this.navigationService.setTitle(title);

    this.dateValue = new Date('October 13, 2016 11:13:00');
  }

  ngAfterViewInit() {

  }

  getInputValue() {
    return 'John Doe';
  }

  getDateValue() {
    return this.dateValue;
  }

  getIntegerValue() {
    return 1;
  }

  getRealValue() {
    return 33.45;
  }

  getPercentValue() {
    return 52.55;
  }

  getCurrencyValue() {
    return 2574.99;
  }

  getNIFValue() {
    return '00000000T';
  }

  getEmailValue() {
    return 'john.doe@ontimize.com';
  }

  getPasswordValue() {
    return 'password';
  }

  getTextareaValue() {
    return `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tempor porta arcu,
     ut ultricies magna sodales egestas. Mauris et tempus lacus. Nunc gravida sodales
     ipsum, a convallis arcu placerat rhoncus. Suspendisse in sollicitudin leo. Nam
     efficitur dolor vitae tortor commodo tincidunt. Suspendisse ornare scelerisque
     lectus, nec interdum turpis mattis ut. Morbi congue, diam quis varius tincidunt,
     ante quam vulputate arcu, sit amet faucibus tortor dui et erat. Cras eget erat
     at erat ultrices varius. Phasellus interdum enim sagittis tortor consequat lobortis.
     Fusce tortor risus, pharetra eget diam mollis, rutrum mollis sem. Nullam pellentesque
     risus id suscipit malesuada. Etiam non sem cursus libero faucibus congue.
     Sed arcu lorem, scelerisque sit amet porttitor sed, vehicula consectetur lacus.
     Vestibulum suscipit ante quis condimentum laoreet. Ut quis volutpat neque.
    `;
  }

  getCheckboxValue() {
    return true;
  }

  getFiles(key: string) {
    return InputUtils.getFiles(key);
  }

}
