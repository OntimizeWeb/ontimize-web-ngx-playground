import { Component, ViewChild, ElementRef } from '@angular/core';
import { MatInput } from "@angular/material/input";

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
  oldValue

}
@Component({
  selector: 'input-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss'],
})
export class InputEventsComponent {


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
      case 'date':
        return 1505358700000;
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

  onValueChange(event) {
    let eventChange = new ConsoleLogEvent();
    eventChange.eventName = 'onValueChange';
    eventChange.newValue = event.newValue;
    eventChange.oldValue = event.oldValue;
    eventChange.type = event.type;
    eventChange.attr = event.target.oattr;
    this.consoleLog.unshift(eventChange);
  }
  onChange(event, input) {
    let eventChange = new ConsoleLogEvent();
    eventChange.eventName = 'onChange';
    eventChange.attr = input.oattr;
    this.consoleLog.unshift(eventChange);

  }

  showNewAndOldValue(event: any): boolean {
    var show = false;
    if (event.hasOwnProperty('newValue') && typeof event.newValue !== undefined &&
      event.hasOwnProperty('oldValue') && typeof event.oldValue !== undefined) {
      show = true;
    }
    return show;
  }
  showTypeEvent(event: any): boolean {
    var show = false;
    if (event.hasOwnProperty('type') && typeof event.type !== undefined ) {
      show = true;
    }
    return show;
  }

  clearConsole() {
    this.consoleLog = [];
  }

  print(e){
    console.log(e);
  }



}
