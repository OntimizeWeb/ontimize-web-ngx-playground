import { Component, ViewChild } from '@angular/core';

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
  OListPickerComponent,
  OTranslateService
} from 'ontimize-web-ng2/ontimize';

import { NavigationBarService } from '../../../shared';
import { InputUtils } from './inputs-utils';

@Component({
  selector: 'inputs-home',
  moduleId: module.id,
  styleUrls: ['inputs-home.component.css'],
  templateUrl: 'inputs-home.component.html'
})
export class InputsHomeComponent {

  @ViewChild('input') input: OTextInputComponent;
  @ViewChild('date') date: ODateInputComponent;
  @ViewChild('integer') integer: OIntegerInputComponent;
  @ViewChild('real') real: ORealInputComponent;
  @ViewChild('percent') percent: OPercentInputComponent;
  @ViewChild('currency') currency: OCurrencyInputComponent;
  @ViewChild('nif') nif: ONIFInputComponent;
  @ViewChild('email') email: OEmailInputComponent;
  @ViewChild('password') password: OPasswordInputComponent;
  @ViewChild('textarea') textarea: OTextareaInputComponent;
  @ViewChild('listpicker') listpicker: OListPickerComponent;

  protected dateValue: Date;

  constructor(
    protected navigationService: NavigationBarService,
    protected translateService: OTranslateService ) {
  }

  ngOnInit() {
    let title = '';
    title += this.translateService.get('FIELDS');
    title = title + ' > ' + this.translateService.get('INPUTS');
    this.navigationService.setTitle(title);

    this.dateValue = new Date("October 13, 2016 11:13:00");
  }

  ngAfterViewInit() {
    this.input.isReadOnly = false;
    this.date.isReadOnly = false;
    this.integer.isReadOnly = false;
    this.real.isReadOnly = false;
    this.percent.isReadOnly = false;
    this.currency.isReadOnly = false;
    this.nif.isReadOnly = false;
    this.email.isReadOnly = false;
    this.password.isReadOnly = false;
    this.textarea.isReadOnly = false;
    this.listpicker.isReadOnly = false;

    var self = this;
    window.setTimeout(() => {
      self.input.data = 'Pepito';
    }, 1000)

  }

  getInputValue() {
    return 'John Doe';
  }

  getDateValue() {
    return this.dateValue.getTime();
    // return '';
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
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tempor porta arcu, ut ultricies magna sodales egestas. Mauris et tempus lacus. Nunc gravida sodales ipsum, a convallis arcu placerat rhoncus. Suspendisse in sollicitudin leo. Nam efficitur dolor vitae tortor commodo tincidunt. Suspendisse ornare scelerisque lectus, nec interdum turpis mattis ut. Morbi congue, diam quis varius tincidunt, ante quam vulputate arcu, sit amet faucibus tortor dui et erat. Cras eget erat at erat ultrices varius. Phasellus interdum enim sagittis tortor consequat lobortis. Fusce tortor risus, pharetra eget diam mollis, rutrum mollis sem. Nullam pellentesque risus id suscipit malesuada. Etiam non sem cursus libero faucibus congue. Sed arcu lorem, scelerisque sit amet porttitor sed, vehicula consectetur lacus. Vestibulum suscipit ante quis condimentum laoreet. Ut quis volutpat neque.
    `;
  }

  getListPickerData() {
    let array: Array<Object> = [];
    array.push({
      'CUSTOMERTYPEID': 1,
      'DESCRIPTION': 'VIP'
    });
    array.push({
      'CUSTOMERTYPEID': 2,
      'DESCRIPTION': 'Normal'
    });
    array.push({
      'CUSTOMERTYPEID': 3,
      'DESCRIPTION': 'Other'
    });
    return array;
  }

  getListPickerValue() {
    return 2;
  }

  getComponentId(key: string) {
    return InputUtils.getComponentId(key);
  }

  getFiles(key: string) {
    return InputUtils.getFiles(key);
  }

}

