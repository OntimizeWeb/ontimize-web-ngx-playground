import { Component, ViewChild } from '@angular/core';
import { MatCheckbox } from '@angular/material';
import { OValueChangeEvent } from 'ontimize-web-ngx';


const HTML_DATA = `
<!-- CHECKBOX-->
<div fxFlexDirection="row">
  <o-checkbox #check attr="checkbox" label="{{ 'INPUT.BUTTON.CHECKBOX' | oTranslate }}" [data]="getValue('checkbox')"
    read-only="no" tooltip="This is an awesome tooltip!" (onValueChange)="onValueChange($event)" fxFlex="70"></o-checkbox>
  <button mat-button (click)="setValue(check,false)">setValue false</button>
</div>
<!-- COMBO-->
<div fxFlexDirection="row">
  <o-combo #combo attr="combo" label="{{ 'INPUT.COMBO' | oTranslate }}" [static-data]="getDataArray()" [data]="getValue('combo')"
    value-column="key" columns="key;value" visible-columns="value" required="yes" read-only="false" (onValueChange)="onValueChange($event)"
    fxFlex="70"></o-combo>
  <button mat-button (click)="setValue(combo,4)">setValue Germany</button>
</div>
<!-- DATE-->
<div fxFlexDirection="row">
  <o-date-input #date attr="date" label="{{ 'INPUT.BUTTON.DATE' | oTranslate }}" [data]="getValue('date')"
    read-only="no" format="LL" required="yes" min="01/01/1980" max="01/01/2020" tooltip="This is an awesome tooltip!"
    (onValueChange)="onValueChange($event)" clear-button="yes" fxFlex="70"></o-date-input>
  <button mat-button (click)="setValue(date,'2010-01-01')">setValue 01/01/1980</button>
</div>

<!-- LISKPICKER-->
<div fxFlexDirection="row">
  <o-list-picker #listpicker attr="listpicker" label="{{ 'INPUT.BUTTON.LISTPICKER' | oTranslate }}" [static-data]="getDataArray()"
    [data]="getValue('listpicker')" filter="yes" value-column="key" columns="key;value" visible-columns="value"
    required="true" read-only="false" (onValueChange)="onValueChange($event)" fxFlex="70"></o-list-picker>
  <button mat-button (click)="setValue(listpicker, '4')">setValue Germany</button>
</div>

<!-- INPUT-->
<div fxFlexDirection="row">
  <o-text-input #input attr="input" label="{{ 'INPUT.BUTTON.TEXT' | oTranslate }}" [data]="getValue('input')"
    read-only="no" required="yes" tooltip="This is an awesome tooltip!" (onValueChange)="onValueChange($event)"
    clear-button="yes" fxFlex="70"></o-text-input>
  <button mat-button (click)="setValue(input, 'James Alam')">setValue James Alam</button>
</div>
<!-- hour-->
<div fxFlexDirection="row">
  <o-hour-input #hour attr="hour" label="{{ 'INPUT.BUTTON.HOUR' | oTranslate }}" [data]="getValue('hour')"
    read-only="no" required="yes" tooltip="This is an awesome tooltip!" clear-button="yes" format="24"
    (onValueChange)="onValueChange($event)" clear-button="yes" fxFlex="70"></o-hour-input>
  <button mat-button (click)="setValue(hour, '08:00 PM')">setValue 08:00 PM</button>
</div>
<!-- TIME-->
<div fxFlexDirection="row">
  <o-time-input #time attr="time" label="{{ 'INPUT.BUTTON.TIME' | oTranslate }}" [data]="getValue('time')"
    read-only="no" required="yes" tooltip="This is an awesome tooltip!" clear-button="yes" format="24"
    (onValueChange)="onValueChange($event)" clear-button="yes" fxFlex="70"></o-time-input>
  <button mat-button (click)="setValue(time,1535358788828)">setValue 08/27/2018 10:33am</button>
</div>

`;

const TS_DATA = `
consoleLog = [];
onValueChange(event) {
  console.log( 'Event onValueChange in' + event.target.oattr +' change old value: '+ event.oldValue + ' by new value: '+ event.newValue +
  ' this change is of type '+ event.type );

  getValue(attr: string) {
    var value;
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
        return 1535358788828;
      case 'date':
        return '01/01/1980';
    }
    return value;
  }


  getDataArray() {
    const array: Array<Object> = [];
    array.push({
      'key': 1,
      'value': 'Spain'
    });
    array.push({
      'key': 2,
      'value': 'United States'
    });
    array.push({
      'key': 3,
      'value': 'United Kingdom'
    });
    array.push({
      'key': 4,
      'value': 'Germany'
    });
    return array;
  }

  setValue(input: any, value: any) {
    input.setValue(value);
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
        return 1505358700000;
      case 'date':
        return '2018-12-28';
      case 'radio':
      case 'slider':
        return 2;
    }
    return value;
  }


  getDataArray() {
    const array: Array<Object> = [];
    array.push({
      'key': 1,
      'value': 'Spain'
    });
    array.push({
      'key': 2,
      'value': 'United States'
    });
    array.push({
      'key': 3,
      'value': 'United Kingdom'
    });
    array.push({
      'key': 4,
      'value': 'Germany'
    });
    return array;
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
