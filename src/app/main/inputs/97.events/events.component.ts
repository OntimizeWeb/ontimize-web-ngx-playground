import { Component, ViewChild } from '@angular/core';
import { MatLegacyCheckbox as MatCheckbox } from '@angular/material/legacy-checkbox';
import * as moment from 'moment';
import { OFormDataComponent, OValueChangeEvent } from 'ontimize-web-ngx';

const HTML_DATA = `
  <o-form editable-detail="no" show-header="no" layout-direction="column">
    <div fxFlex fxLayout="row" fxLayoutAlign="space-around center" style="padding:24px">
      <mat-checkbox #printOnChange [checked]="true">onChange</mat-checkbox>
      <mat-checkbox #printOnValueChange [checked]="true">onValueChange</mat-checkbox>
      <mat-checkbox #printOnFocus [checked]="true">onFocus</mat-checkbox>
      <mat-checkbox #printOnBlur [checked]="true">onBlur</mat-checkbox>
      <mat-checkbox #printClick [checked]="true">click</mat-checkbox>
    </div>

    <div fxLayout="row" fxLayoutAlign="space-around start">
      <div fxLayout="column" fxFlex="40" fxLayoutAlign="start stretch">

        <!-- INPUT-->
        <div fxLayout="row" fxLayoutAlign="space-between center" fxLayoutGap="16px">
          <o-text-input #input attr="input" label="INPUT.BUTTON.TEXT" [data]="getValue('input')" read-only="no" required="yes"
            (onValueChange)="onValueChange($event)" (onChange)="onChange(input)" clear-button="yes" fxFlex="70" (onFocus)="onFocus(input)"
            (onBlur)="onBlur(input)" (click)="onClick(input)">
          </o-text-input>
          <button fxFlex mat-raised-button (click)="setValue(input, 'James Alam')">setValue James Alam</button>
        </div>
        <!-- CURRENCY-->
        <div fxLayout="row" fxLayoutAlign="space-between center" fxLayoutGap="16px">
          <o-currency-input #currency attr="currency" label="INPUT.BUTTON.CURRENCY" [data]="getValue('currency')" read-only="no" required="yes"
            (onValueChange)="onValueChange($event)" (onChange)="onChange(currency)" clear-button="yes" fxFlex="70" (onFocus)="onFocus(currency)"
            (onBlur)="onBlur(currency)" (click)="onClick(currency)" (onChange)="onChange(currency)">
          </o-currency-input>
          <button fxFlex mat-raised-button (click)="setValue(currency, 50)">setValue 50</button>
        </div>
        <!-- INTEGER-->
        <div fxLayout="row" fxLayoutAlign="space-between center" fxLayoutGap="16px">
          <o-integer-input #integer attr="integer" label="INPUT.BUTTON.INTEGER" [data]="getValue('integer')" read-only="no" required="yes"
            (onValueChange)="onValueChange($event)" (onChange)="onChange(integer)" clear-button="yes" fxFlex="70" (onFocus)="onFocus(integer)"
            (onBlur)="onBlur(integer)" (click)="onClick(integer)">
          </o-integer-input>
          <button fxFlex mat-raised-button (click)="setValue(integer, 50)">setValue 50</button>
        </div>
        <!-- REAL-->
        <div fxLayout="row" fxLayoutAlign="space-between center" fxLayoutGap="16px">
          <o-real-input #real attr="real" label="INPUT.BUTTON.REAL" [data]="getValue('real')" read-only="no" required="yes"
            (onValueChange)="onValueChange($event)" (onChange)="onChange(real)" clear-button="yes" fxFlex="70" (onFocus)="onFocus(real)"
            (onBlur)="onBlur(real)" (click)="onClick(real)">
          </o-real-input>
          <button fxFlex mat-raised-button (click)="setValue(real, 50)">setValue 50</button>
        </div>
        <!-- PERCENT-->
        <div fxLayout="row" fxLayoutAlign="space-between center" fxLayoutGap="16px">
          <o-percent-input #percent attr="percent" label="INPUT.BUTTON.PERCENT" [data]="getValue('percent')" read-only="no" required="yes"
            (onValueChange)="onValueChange($event)" (onChange)="onChange(percent)" clear-button="yes" fxFlex="70" (onFocus)="onFocus(percent)"
            (onBlur)="onBlur(percent)" (click)="onClick(percent)">
          </o-percent-input>
          <button fxFlex mat-raised-button (click)="setValue(percent, 0.66)">setValue 0.66</button>
        </div>
        <!-- DATE-->
        <div fxLayout="row" fxLayoutAlign="space-between center" fxLayoutGap="16px">
          <o-date-input #date attr="date" label="INPUT.BUTTON.DATE" [data]="getValue('date')" read-only="no" format="LL" required="yes"
            min="01/01/1980" max="01/01/2020" (onValueChange)="onValueChange($event)" clear-button="yes" fxFlex="70" (onChange)="onChange(date)"
            (onFocus)="onFocus(date)" (onBlur)="onBlur(date)" (click)="onClick(date)">
          </o-date-input>
          <button fxFlex mat-raised-button (click)="setValue(date, 1538524800000)">setValue 2018-10-03</button>
        </div>
        <!-- HOUR-->
        <div fxLayout="row" fxLayoutAlign="space-between center" fxLayoutGap="16px">
          <o-hour-input #hour attr="hour" label="INPUT.BUTTON.HOUR" [data]="getValue('hour')" value-type="string" read-only="no" required="yes"
            clear-button="yes" format="24" (onChange)="onChange(hour)" (onValueChange)="onValueChange($event)" clear-button="yes" fxFlex="70"
            (onFocus)="onFocus(hour)" (onBlur)="onBlur(hour)" (click)="onClick(hour)">
          </o-hour-input>
          <button fxFlex mat-raised-button (click)="setValue(hour, '08:00 PM')">setValue 08:00 PM</button>
        </div>
        <!-- COMBO-->
        <div fxLayout="row" fxLayoutAlign="space-between center" fxLayoutGap="16px">
          <o-combo #combo attr="combo" label="INPUT.COMBO" [static-data]="getDataArray()" [data]="getValue('combo')" value-column="key"
            columns="key;value" visible-columns="value" required="yes" read-only="false" (onValueChange)="onValueChange($event)" fxFlex="70"
            (onChange)="onChange(combo)">
          </o-combo>
          <button fxFlex mat-raised-button (click)="setValue(combo,4)">setValue Germany</button>
        </div>
      </div>
      <div fxLayout="column" fxFlex="40" fxLayoutAlign="start stretch">
        <!-- LISKPICKER-->
        <div fxLayout="row" fxLayoutAlign="space-between center" fxLayoutGap="16px">
          <o-list-picker #listpicker attr="listpicker" label="INPUT.BUTTON.LISTPICKER" [static-data]="getDataArray()" [data]="getValue('listpicker')"
            filter="yes" value-column="key" columns="key;value" visible-columns="value" required="true" read-only="false"
            (onValueChange)="onValueChange($event)" fxFlex="70" (onChange)="onChange(listpicker)" (onFocus)="onFocus(listpicker)"
            (onBlur)="onBlur(listpicker)" (click)="onClick(listpicker)">
          </o-list-picker>
          <button fxFlex mat-raised-button (click)="setValue(listpicker, '4')">setValue Germany</button>
        </div>

        <!-- RADIO-->
        <div fxLayout="row" fxLayoutAlign="space-between center" fxLayoutGap="16px">
          <o-radio #radio attr="radio" label="Radio" [static-data]="getDataArray()" [data]="getValue('radio')" value-column="key" columns="key;value"
            visible-columns="value" fxFlex="70" (onChange)="onChange(radio)" (onValueChange)="onValueChange($event)" read-only="no" layout="row">
          </o-radio>
          <button fxFlex mat-raised-button (click)="setValue(radio, '4')">setValue Germany</button>
        </div>
        <!-- TIME-->
        <div fxLayout="row" fxLayoutAlign="space-between center" fxLayoutGap="16px">
          <o-time-input #time attr="time" label="INPUT.BUTTON.TIME" [data]="getValue('time')" read-only="no" required="yes" clear-button="yes"
            format="24" (onValueChange)="onValueChange($event)" clear-button="yes" fxFlex="70" (onChange)="onChange(time)" (onFocus)="onFocus(time)"
            (onBlur)="onBlur(time)" (click)="onClick(time)"></o-time-input>
          <button fxFlex mat-raised-button (click)="setValue(time,1535358788828)">setValue 1535358788828</button>
        </div>
        <!-- SLIDER-->
        <div fxLayout="row" fxLayoutAlign="space-between center" fxLayoutGap="16px">
          <o-slider #slider attr="slider" label="INPUT.SLIDER" [data]="getValue('slider')" read-only="no" read-only="no"
            (onValueChange)="onValueChange($event)" (onChange)="onChange(slider)" fxFlex="70"></o-slider>
          <button fxFlex mat-raised-button (click)="setValue(slider,85)">setValue 85</button>
        </div>
        <!-- FILE-->
        <div fxLayout="row" fxLayoutAlign="space-between center" fxLayoutGap="16px">
          <o-file-input fxFlex="70" #file attr="file" label="{{ 'INPUT.BUTTON.FILE' | oTranslate }} (edit mode)" read-only="no" required="yes"
            accept-file-type=".png;.jpg" max-file-size="10000" multiple="yes" layout-padding (onValueChange)="onValueChange($event)"
            (onChange)="onChange(file)" clear-button="yes"></o-file-input>
        </div>
        <!-- CHECKBOX-->
        <div fxLayout="row" fxLayoutAlign="space-between center" fxLayoutGap="16px">
          <o-checkbox #check attr="checkbox" label="INPUT.BUTTON.CHECKBOX" [data]="getValue('checkbox')" read-only="no"
            (onValueChange)="onValueChange($event)" (onChange)="onChange(check)" fxFlex="70"></o-checkbox>
          <button fxFlex mat-raised-button (click)="setValue(check,false)">setValue false</button>
        </div>
        <!-- DATERAGE-->
        <div fxLayout="row" fxLayoutAlign="space-between center" fxLayoutGap="16px">
          <o-daterange-input #daterange attr="daterange" label="INPUT.BUTTON.DATERANGE" read-only="no" required="yes" [data]="getValue('range')"
            clear-button="yes" format="LL" separator=" to " (onValueChange)="onValueChange($event)" (onChange)="onChange(daterange)"
            (onFocus)="onFocus(daterange)" (onBlur)="onBlur(daterange)" fxFlex="70" (click)="onClick(daterange)">
          </o-daterange-input>
          <button fxFlex mat-raised-button (click)="setValue(daterange, {
            startDate: moment('2019-05-15T00:00Z'),
            endDate: moment('2019-05-20T00:00Z')
          })">setValue </button>
        </div>
      </div>
    </div>

    <mat-toolbar class="playground-toolbar">
      <mat-toolbar-row>
        <span>{{ 'CONSOLE.LOG' | oTranslate }}</span>
        <span class="mat-toolbar-space"></span>
        <button mat-icon-button (click)="clearConsole()">
          <mat-icon>delete</mat-icon>
        </button>
      </mat-toolbar-row>
    </mat-toolbar>
    <mat-list dense class="console" style="min-height:200px">
      <mat-list-item *ngFor="let log of consoleLog">
        Event&nbsp;<b>{{log.eventName}}</b>&nbsp; in &nbsp;{{log.attr }}
        <ng-container *ngIf="showNewAndOldValue(log)">:: change old value: <b> {{ log.oldValue }}</b>&nbsp; by new
          value: <b>{{ log.newValue === undefined ? 'undefined' : log.newValue }}</b>,
        </ng-container>
        <ng-container *ngIf="showValue(log)">:: value: <b> {{ log.value === undefined ? 'undefined' : log.value }}</b>
        </ng-container>
        <ng-container *ngIf="showTypeEvent(log)"> this change is of type &nbsp;<b>{{ log.type }}</b></ng-container>
        <mat-divider></mat-divider>
      </mat-list-item>
    </mat-list>
  </o-form>

`;

const TS_DATA = `
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

  @ViewChild('printOnChange', { static: false }) printOnChange: MatCheckbox;
  @ViewChild('printOnValueChange', { static: false }) printOnValueChange: MatCheckbox;
  @ViewChild('printOnFocus', { static: false }) printOnFocus: MatCheckbox;
  @ViewChild('printOnBlur', { static: false }) printOnBlur: MatCheckbox;
  @ViewChild('printClick', { static: false }) printClick: MatCheckbox;
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
        return { startDate: moment('2019-05-15T00:00Z'), endDate: moment('2019-05-20T00:00Z') }
      case 'currency':
      case 'real':
        return 23.3;
      case 'integer':
        return 10000;
      case 'percent':
        return .76;
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
    if (this.printOnValueChange && !this.printOnValueChange.checked) {
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

  onChange(input: OFormDataComponent) {
    if (this.printOnChange && !this.printOnChange.checked) {
      return;
    }
    const eventChange = new ConsoleLogEvent();
    eventChange.eventName = 'onChange';
    eventChange.attr = input.getAttribute();
    this.consoleLog.unshift(eventChange);
  }

  onFocus(input: OFormDataComponent) {
    if (this.printOnFocus && !this.printOnFocus.checked) {
      return;
    }

    const eventChange = new ConsoleLogEvent();
    eventChange.eventName = 'onFocus';
    eventChange.attr = input.getAttribute();
    this.consoleLog.unshift(eventChange);
  }

  onBlur(input: OFormDataComponent) {
    if (this.printOnBlur && !this.printOnBlur.checked) {
      return;
    }
    const eventChange = new ConsoleLogEvent();
    eventChange.eventName = 'onBlur';
    eventChange.attr = input.getAttribute();
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

  onClick(input: OFormDataComponent) {
    if (this.printClick && !this.printClick.checked) {
      return;
    }
    const eventChange = new ConsoleLogEvent();
    eventChange.eventName = 'click';
    eventChange.attr = input.getAttribute();
    this.consoleLog.unshift(eventChange);
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
  @ViewChild('printClick') printClick: MatCheckbox;
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
        return { startDate: moment('2019-05-15T00:00Z'), endDate: moment('2019-05-20T00:00Z') }
      case 'currency':
      case 'real':
        return 23.3;
      case 'integer':
        return 10000;
      case 'percent':
        return .76;
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
    if (this.printOnValueChange && !this.printOnValueChange.checked) {
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

  onChange(input: OFormDataComponent) {
    if (this.printOnChange && !this.printOnChange.checked) {
      return;
    }
    const eventChange = new ConsoleLogEvent();
    eventChange.eventName = 'onChange';
    eventChange.attr = input.getAttribute();
    this.consoleLog.unshift(eventChange);
  }

  onFocus(input: OFormDataComponent) {
    if (this.printOnFocus && !this.printOnFocus.checked) {
      return;
    }

    const eventChange = new ConsoleLogEvent();
    eventChange.eventName = 'onFocus';
    eventChange.attr = input.getAttribute();
    this.consoleLog.unshift(eventChange);
  }

  onBlur(input: OFormDataComponent) {
    if (this.printOnBlur && !this.printOnBlur.checked) {
      return;
    }
    const eventChange = new ConsoleLogEvent();
    eventChange.eventName = 'onBlur';
    eventChange.attr = input.getAttribute();
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

  onClick(input: OFormDataComponent) {
    if (this.printClick && !this.printClick.checked) {
      return;
    }
    const eventChange = new ConsoleLogEvent();
    eventChange.eventName = 'click';
    eventChange.attr = input.getAttribute();
    this.consoleLog.unshift(eventChange);
  }
}
