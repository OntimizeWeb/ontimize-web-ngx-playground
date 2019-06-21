import { Component, ViewChild } from '@angular/core';
import { MatCheckbox } from '@angular/material';
import * as moment from 'moment';
import { OValueChangeEvent } from 'ontimize-web-ngx';



const HTML_DATA = `
<!-- INPUT-->
  <div fxLayout="row" fxLayoutAlign="space-between center" fxLayoutGap="16px">
    <o-text-input #input attr="input" label="{{ 'INPUT.BUTTON.TEXT' | oTranslate }}" [data]="getValue('input')"
      read-only="no" required="yes" (onValueChange)="onValueChange($event)" (onChange)="onChange($event,input)"
      clear-button="yes" fxFlex="70" (onFocus)="onFocus($event,input)" (onBlur)="onBlur($event,input)">
    </o-text-input>
    <button fxFlex mat-raised-button (click)="setValue(input, 'James Alam')">setValue James Alam</button>
  </div>
  <!-- DATE-->
  <div fxLayout="row" fxLayoutAlign="space-between center" fxLayoutGap="16px">
    <o-date-input #date attr="date" label="{{ 'INPUT.BUTTON.DATE' | oTranslate }}" [data]="getValue('date')"
      read-only="no" format="LL" required="yes" min="01/01/1980" max="01/01/2020"
      (onValueChange)="onValueChange($event)" clear-button="yes" fxFlex="70" (onChange)="onChange($event,date)"
      (onFocus)="onFocus($event,date)" (onBlur)="onBlur($event,date)"></o-date-input>
    <button fxFlex mat-raised-button (click)="setValue(date, 1538524800000)">setValue 2018-10-03</button>
  </div>
  <!-- hour-->
  <div fxLayout="row" fxLayoutAlign="space-between center" fxLayoutGap="16px">
    <o-hour-input #hour attr="hour" label="{{ 'INPUT.BUTTON.HOUR' | oTranslate }}" [data]="getValue('hour')"
      value-type="string" read-only="no" required="yes" clear-button="yes" format="24"
      (onChange)="onChange($event,hour)" (onValueChange)="onValueChange($event)" clear-button="yes" fxFlex="70"
      (onFocus)="onFocus($event,hour)" (onBlur)="onBlur($event,hour)">
    </o-hour-input>
    <button fxFlex mat-raised-button (click)="setValue(hour, '08:00 PM')">setValue 08:00 PM</button>
  </div>
  <!-- COMBO-->
  <div fxLayout="row" fxLayoutAlign="space-between center" fxLayoutGap="16px">
    <o-combo #combo attr="combo" label="{{ 'INPUT.COMBO' | oTranslate }}" [static-data]="getDataArray()"
      [data]="getValue('combo')" value-column="key" columns="key;value" visible-columns="value" required="yes"
      read-only="false" (onValueChange)="onValueChange($event)" fxFlex="70" (onChange)="onChange($event,combo)">
    </o-combo>
    <button fxFlex mat-raised-button (click)="setValue(combo,4)">setValue Germany</button>
  </div>
  <!-- LISKPICKER-->
  <div fxLayout="row" fxLayoutAlign="space-between center" fxLayoutGap="16px">
    <o-list-picker #listpicker attr="listpicker" label="{{ 'INPUT.BUTTON.LISTPICKER' | oTranslate }}"
      [static-data]="getDataArray()" [data]="getValue('listpicker')" filter="yes" value-column="key"
      columns="key;value" visible-columns="value" required="true" read-only="false"
      (onValueChange)="onValueChange($event)" fxFlex="70" (onChange)="onChange($event,listpicker)"
      (onFocus)="onFocus($event,listpicker)" (onBlur)="onBlur($event,listpicker)">
    </o-list-picker>
    <button fxFlex mat-raised-button (click)="setValue(listpicker, '4')">setValue Germany</button>
  </div>

</div>
<div fxLayout="column" fxFlex="40" fxLayoutAlign="start stretch">
  <!-- RADIO-->
  <div fxLayout="row" fxLayoutAlign="space-between center" fxLayoutGap="16px">
    <o-radio #radio attr="radio" label="Radio" [static-data]="getDataArray()" [data]="getValue('radio')"
      value-column="key" columns="key;value" visible-columns="value" fxFlex="70"
      (onChange)="onChange($event,radio)" (onValueChange)="onValueChange($event)" read-only="no" layout="row">
    </o-radio>
    <button fxFlex mat-raised-button (click)="setValue(radio, '4')">setValue Germany</button>
  </div>
  <!-- TIME-->
  <div fxLayout="row" fxLayoutAlign="space-between center" fxLayoutGap="16px">
    <o-time-input #time attr="time" label="{{ 'INPUT.BUTTON.TIME' | oTranslate }}" [data]="getValue('time')"
      read-only="no" required="yes" clear-button="yes" format="24" (onValueChange)="onValueChange($event)"
      clear-button="yes" fxFlex="70" (onChange)="onChange($event,time)" (onFocus)="onFocus($event,time)"
      (onBlur)="onBlur($event,time)"></o-time-input>
    <button fxFlex mat-raised-button (click)="setValue(time,1535358788828)">setValue 1535358788828</button>
  </div>
  <!-- SLIDER-->
  <div fxLayout="row" fxLayoutAlign="space-between center" fxLayoutGap="16px">
    <o-slider #slider attr="slider" label="{{ 'INPUT.SLIDER' | oTranslate }}" [data]="getValue('slider')"
      read-only="no" read-only="no" (onValueChange)="onValueChange($event)" (onChange)="onChange($event,slider)"
      fxFlex="70"></o-slider>
    <button fxFlex mat-raised-button (click)="setValue(slider,85)">setValue 85</button>
  </div>
  <!-- FILE-->
  <div fxLayout="row" fxLayoutAlign="space-between center" fxLayoutGap="16px">
    <o-file-input fxFlex="70" #file attr="file" label="{{ 'INPUT.BUTTON.FILE' | oTranslate }} (edit mode)"
      read-only="no" required="yes" accept-file-type=".png;.jpg" max-file-size="10000" multiple="yes"
      layout-padding (onValueChange)="onValueChange($event)" (onChange)="onChange($event,file)"
      clear-button="yes"></o-file-input>
  </div>
  <!-- CHECKBOX-->
  <div fxLayout="row" fxLayoutAlign="space-between center" fxLayoutGap="16px">
    <o-checkbox #check attr="checkbox" label="{{ 'INPUT.BUTTON.CHECKBOX' | oTranslate }}"
      [data]="getValue('checkbox')" read-only="no" (onValueChange)="onValueChange($event)"
      (onChange)="onChange($event,check)" fxFlex="70"></o-checkbox>
    <button fxFlex mat-raised-button (click)="setValue(check,false)">setValue false</button>
  </div>

`;

const TS_DATA = `
export class InputEventsComponent {

  @ViewChild('printOnChange') printOnChange: MatCheckbox;
  @ViewChild('printOnValueChange') printOnValueChange: MatCheckbox;
  @ViewChild('printOnFocus') printOnFocus: MatCheckbox;
  @ViewChild('printOnBlur') printOnBlur: MatCheckbox;

  public array: Array<Object> = [{
    'key': 1,
    'value': 'Spain'
  }, {
    'key': 2,
    'value': 'United States'
  }, {
    'key': 3,
    'value': 'United Kingdom'
  }, {
    'key': 4,
    'value': 'Germany'
  }];


  consoleLog = [];

  files = {
    'html': {
      'data': HTML_DATA
    },
    'scss': {
      'data': undefined
    },
    'typescript': {
      'data': TS_DATA
    }
  };

  getValue(attr: string) {
    let value;
    switch (attr) {
      case 'input':
        value = 'John Doe';
        break;
      case 'checkbox':
        value = true;
        break;
      case 'hour':
        return '05:00 AM';
      case 'listpicker':
      case 'combo':
        return 2;
      case 'time':
      case 'date':
        return 1505358700000;
      case 'radio':
      case 'slider':
        return 2;
    }
    return value;
  }


  getDataArray() {
    return this.array;
  }

  setValue(input: any, value: any) {
    input.setValue(value);
  }

  onValueChange(event: OValueChangeEvent) {
    if (!this.printOnValueChange.checked) {
      return;
    }
    const eventChange = new ConsoleLogEvent();
    eventChange.eventName = 'onValueChange';
    eventChange.newValue = event.newValue;
    eventChange.oldValue = event.oldValue;
    eventChange.type = event.isProgrammaticChange() ? 'PROGRAMMATIC' : 'USER';
    eventChange.attr = event.target.oattr;

    this.consoleLog.unshift(eventChange);
  }

  onChange(event, input) {
    if (!this.printOnChange.checked) {
      return;
    }
    const eventChange = new ConsoleLogEvent();
    eventChange.eventName = 'onChange';
    eventChange.attr = input.oattr;
    this.consoleLog.unshift(eventChange);
  }

  onFocus(event, input) {
    if (!this.printOnFocus.checked) {
      return;
    }
    const eventChange = new ConsoleLogEvent();
    eventChange.eventName = 'onFocus';
    eventChange.attr = input.oattr;
    this.consoleLog.unshift(eventChange);
  }

  onBlur(event, input) {
    if (!this.printOnBlur.checked) {
      return;
    }
    const eventChange = new ConsoleLogEvent();
    eventChange.eventName = 'onBlur';
    eventChange.attr = input.oattr;
    this.consoleLog.unshift(eventChange);
  }

  showValue(event: any): boolean {
    return event.hasOwnProperty('value') && typeof event.value !== 'undefined';
  }

  showNewAndOldValue(event: any): boolean {
    return event.hasOwnProperty('newValue') && typeof event.newValue !== 'undefined' &&
      event.hasOwnProperty('oldValue') && typeof event.oldValue !== 'undefined';
  }

  showTypeEvent(event: any): boolean {
    return event.hasOwnProperty('type') && typeof event.type !== 'undefined';
  }

  clearConsole() {
    this.consoleLog = [];
  }

  print(e) {
    console.log(e);
  }

}
`;
export class ConsoleLogEvent {
  eventName: string;
  attr: string;
  type: string;
  newValue: any;
  oldValue: any;
  value: any;
}
@Component({
  selector: 'input-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss'],
})
export class InputEventsComponent {

  @ViewChild('printOnChange') printOnChange: MatCheckbox;
  @ViewChild('printOnValueChange') printOnValueChange: MatCheckbox;
  @ViewChild('printOnFocus') printOnFocus: MatCheckbox;
  @ViewChild('printOnBlur') printOnBlur: MatCheckbox;
  public moment = moment;
  public array: Array<Object> = [{
    'key': 1,
    'value': 'Spain'
  }, {
    'key': 2,
    'value': 'United States'
  }, {
    'key': 3,
    'value': 'United Kingdom'
  }, {
    'key': 4,
    'value': 'Germany'
  }];


  consoleLog = [];

  files = {
    'html': {
      'data': HTML_DATA
    },
    'scss': {
      'data': undefined
    },
    'typescript': {
      'data': TS_DATA
    }
  };

  getValue(attr: string) {
    let value;
    switch (attr) {
      case 'input':
        value = 'John Doe';
        break;
      case 'checkbox':
        value = true;
        break;
      case 'hour':
        return '05:00 AM';
      case 'listpicker':
      case 'combo':
        return 2;
      case 'time':
      case 'date':
        return 1505358700000;
      case 'radio':
      case 'slider':
        return 2;
        break;
      case 'daterange':
        return  {startDate: moment('2019-05-15T00:00Z'),  endDate: moment('2019-05-20T00:00Z')}
    }
    return value;
  }


  getDataArray() {
    return this.array;
  }

  setValue(input: any, value: any) {
    input.setValue(value);
  }

  onValueChange(event: OValueChangeEvent) {
    console.log(event);
    if (!this.printOnValueChange.checked) {
      return;
    }
    const eventChange = new ConsoleLogEvent();
    eventChange.eventName = 'onValueChange';
    eventChange.newValue = event.newValue;
    eventChange.oldValue = event.oldValue;
    eventChange.type = event.isProgrammaticChange() ? 'PROGRAMMATIC' : 'USER';
    eventChange.attr = event.target.oattr;
    this.consoleLog.unshift(eventChange);
  }

  onChange(event, input) {
    if (!this.printOnChange.checked) {
      return;
    }
    const eventChange = new ConsoleLogEvent();
    eventChange.eventName = 'onChange';
    eventChange.attr = input.oattr;
    this.consoleLog.unshift(eventChange);
  }

  onFocus(event, input) {
    if (!this.printOnFocus.checked) {
      return;
    }
    const eventChange = new ConsoleLogEvent();
    eventChange.eventName = 'onFocus';
    eventChange.attr = input.oattr;
    this.consoleLog.unshift(eventChange);
  }

  onBlur(event, input) {
    if (!this.printOnBlur.checked) {
      return;
    }
    const eventChange = new ConsoleLogEvent();
    eventChange.eventName = 'onBlur';
    eventChange.attr = input.oattr;
    this.consoleLog.unshift(eventChange);
  }

  showValue(event: any): boolean {
    return event.hasOwnProperty('value') && typeof event.value !== 'undefined';
  }

  showNewAndOldValue(event: any): boolean {
    return (event.hasOwnProperty('newValue') && typeof event.newValue !== 'undefined') ||
      (event.hasOwnProperty('oldValue') && typeof event.oldValue !== 'undefined');
  }

  showTypeEvent(event: any): boolean {
    return event.hasOwnProperty('type') && typeof event.type !== 'undefined';
  }

  clearConsole() {
    this.consoleLog = [];
  }

  print(e) {
    console.log(e);
  }
}
