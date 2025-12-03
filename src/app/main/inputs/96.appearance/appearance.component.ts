import { Component, ElementRef, ViewChild } from '@angular/core';
import { MatCheckbox } from '@angular/material/checkbox';

const CUSTOM_INPUT_HTML_DATA = `
<o-text-input attr="attr" float-label="{floatLabel}" appearance="{appearanceValue}" label="{labelValue}"
  placeholder="{placeholderValue}" read-only="no" clear-button="yes"
  hide-required-marker="{hideRequiredMarker}" required="yes">
</o-text-input>
`;

const FLOAT_LABEL_HTML_DATA = `
  <o-form editable-detail="no" show-header="no" layout-direction="column">

   <o-text-input attr="text" float-label="always" label="{{ 'INPUT.FLOAT_LABEL.ALWAYS' | oTranslate }}" read-only="no"
      clear-button="yes"></o-text-input>

    <o-text-input attr="text2" float-label="auto" label="{{ 'INPUT.FLOAT_LABEL.AUTO' | oTranslate }}" read-only="no"
      clear-button="yes"></o-text-input>

  </o-form>
`;

const PLACEHOLDER_HTML_DATA = `
<o-form editable-detail="no" show-header="no" layout-direction="column">
  <o-text-input attr="text_placeholder" float-label="always" label="{{ 'INPUT.PLACEHOLDER.LABEL' | oTranslate }}"
    read-only="no" clear-button="yes"></o-text-input>

  <o-text-input attr="text_placeholder2" float-label="always" label="{{ 'INPUT.PLACEHOLDER.LABEL' | oTranslate }}"
    placeholder="{{ 'INPUT.PLACEHOLDER.FLOAT_ALWAYS' | oTranslate }}" read-only="no" clear-button="yes"></o-text-input>

  <o-text-input attr="text_placeholder3" float-label="never" label="{{ 'INPUT.PLACEHOLDER.NEVER_LABEL' | oTranslate }}"
    read-only="no" clear-button="yes"></o-text-input>

  <o-text-input attr="text_placeholder4" float-label="never" appearance="outline" placeholder="{{ 'INPUT.PLACEHOLDER.NEVER_OUTLINE' | oTranslate }}"
    read-only="no" clear-button="yes" hi></o-text-input>
</o-form>
`;

const APPEARANCE_HTML_DATA = `
<o-form editable-detail="no" show-header="no" layout-direction="column">

    <o-text-input appearance="legacy" attr="text_" label="{{ 'INPUT.APPEARANCE.LEGACY' | oTranslate }}"
      [data]="valueText" read-only="no" clear-button="yes" layout-padding></o-text-input>

    <o-text-input appearance="fill" attr="text_2" label="{{ 'INPUT.APPEARANCE.FILL' | oTranslate }}"
      [data]="valueText" read-only="no" clear-button="yes" layout-padding></o-text-input>

    <o-text-input appearance="outline" attr="text_3" label="{{ 'INPUT.APPEARANCE.OUTLINE' | oTranslate }}"
      [data]="valueText" read-only="no" clear-button="yes" layout-padding></o-text-input>

    <o-currency-input appearance="fill" attr="currency3" clear-button="yes"
      label="{{ 'INPUT.APPEARANCE.FILL' | oTranslate }}" read-only="no" [data]="valueCurrency" required="yes" layout-padding>
    </o-currency-input>

    <o-currency-input appearance="outline" attr="currency4" clear-button="yes"
      label="{{ 'INPUT.APPEARANCE.OUTLINE' | oTranslate }}" read-only="no" [data]="valueCurrency" required="yes" layout-padding>
    </o-currency-input>

    <o-combo attr="combo-editable" appearance="fill" label="{{ 'INPUT.APPEARANCE.FILL' | oTranslate }}" [static-data]="array"
      [data]="valueSimple" value-column="key" columns="key;value" visible-columns="value" required="yes" read-only="false"></o-combo>

    <o-combo attr="combo-editable2" appearance="outline" label="{{ 'INPUT.APPEARANCE.OUTLINE' | oTranslate }}"
      [static-data]="array" [data]="valueSimple" value-column="key" columns="key;value" visible-columns="value"
      required="yes" read-only="false"></o-combo>

  </o-form>
`;

const APPEARANCE_TS_DATA = `
@Component({
  selector: 'appearance',
  templateUrl: './appearance.component.html'
})
export class AppearanceComponent {

  protected valueText = 'John Doe';

  protected valueCurrency = 2574.99;

  protected array: Array<Object> = [{
    'key': 1,
    'value': 'Spain'
  },
  {
    'key': 2,
    'value': 'United States'
  },
  {
    'key': 3,
    'value': 'United Kingdom'
  },
  {
    'key': 4,
    'value': 'Germany'
  }];

  protected valueSimple = 2;

}
`;

@Component({
  selector: 'appearance',
  templateUrl: './appearance.component.html'
})
export class AppearanceComponent {

  html: string;

  @ViewChild('label') label: ElementRef;
  @ViewChild('placeholder') placeholder: ElementRef;
  @ViewChild('hideRequiredMarker') hideRequiredMarker: MatCheckbox;

  floatLabelFiles = {
    'html': {
      'data': FLOAT_LABEL_HTML_DATA
    },
    'scss': {
      'data': undefined
    }
  };

  placeholderFiles = {
    'html': {
      'data': PLACEHOLDER_HTML_DATA
    },
    'scss': {
      'data': undefined
    }
  };

  appearanceFiles = {
    'html': {
      'data': APPEARANCE_HTML_DATA
    },
    'scss': {
      'data': undefined
    },
    'typescript': {
      'data': APPEARANCE_TS_DATA
    }
  };

  customInputFiles = {
    'html': {
      'data': CUSTOM_INPUT_HTML_DATA
    }
  };

  floatLabelValue = 'auto';
  appearanceValue = 'fill';

  protected valueText = 'John Doe';

  protected valueCurrency = 2574.99;

  protected array: Array<Object> = [{
    'key': 1,
    'value': 'Spain'
  },
  {
    'key': 2,
    'value': 'United States'
  },
  {
    'key': 3,
    'value': 'United Kingdom'
  },
  {
    'key': 4,
    'value': 'Germany'
  }];

  protected valueSimple = 2;

  updateCodeValue(key: string, value: string) {
    const itemData: any = {
      floatLabel: this.floatLabelValue,
      appearanceValue: this.appearanceValue,
      labelValue: this.label.nativeElement.value,
      placeholderValue: this.placeholder.nativeElement.value,
      hideRequiredMarker: this.hideRequiredMarker.checked

    };
    for (let item in itemData) {
      if (item === key) {
        item = value;
      }
    }
    this.html = CUSTOM_INPUT_HTML_DATA
      .replace('{floatLabel}', itemData.floatLabel)
      .replace('{appearanceValue}', itemData.appearanceValue)
      .replace('{labelValue}', itemData.labelValue)
      .replace('{placeholderValue}', itemData.placeholderValue)
      .replace('{hideRequiredMarker}', itemData.hideRequiredMarker);
  }

  onShowSource(key: string, input?: any, exampleComp?: any) {
    const itemData: any = {
      floatLabel: this.floatLabelValue,
      appearanceValue: this.appearanceValue,
      labelValue: this.label.nativeElement.value,
      placeholderValue: this.placeholder.nativeElement.value,
      hideRequiredMarker: this.hideRequiredMarker.checked

    };
    this.html = CUSTOM_INPUT_HTML_DATA
      .replace('{floatLabel}', itemData.floatLabel)
      .replace('{appearanceValue}', itemData.appearanceValue)
      .replace('{labelValue}', itemData.labelValue)
      .replace('{placeholderValue}', itemData.placeholderValue)
      .replace('{hideRequiredMarker}', itemData.hideRequiredMarker);
  }
}
