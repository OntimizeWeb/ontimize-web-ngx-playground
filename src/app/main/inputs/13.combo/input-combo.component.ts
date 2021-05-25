import { Component } from '@angular/core';
import { ComboCodeExamples } from './code-examples';

@Component({
  selector: 'input-combo',
  templateUrl: './input-combo.component.html'
})
export class InputComboComponent {

  ComboCodeExamples = ComboCodeExamples;
  
  public countriesArray = [{
    countryCode: 1,
    countryText: 'Spain'
  }, {
    countryCode: 2,
    countryText: 'United States'
  }, {
    countryCode: 3,
    countryText: 'United Kingdom'
  }, {
    countryCode: 4,
    countryText: 'Germany'
  }, {
    countryCode: 5,
    countryText: 'Portugal'
  }, {
    countryCode: 6,
    countryText: 'France'
  }, {
    countryCode: 7,
    countryText: 'Italy'
  }, {
    countryCode: 8,
    countryText: 'Belgium'
  }, {
    countryCode: 9,
    countryText: 'Greece'
  }, {
    countryCode: 10,
    countryText: 'Finland'
  }];

  public integersArray = [{
    integerCode: 1,
    integerValue: '1615472370'
  }, {
    integerCode: 2,
    integerValue: '1515472370'
  }, {
    integerCode: 3,
    integerValue: '1415472370'
  }, {
    integerCode: 4,
    integerValue: '1215472370'
  }, {
    integerCode: 5,
    integerValue: '1115472370'
  }];

  public booleanArray = [{
    booleanCode: 0,
    booleanString: 'falseString',
    booleanValue: false
  }, {
    booleanCode: 1,
    booleanString: 'trueString',
    booleanValue: true
  }];

  public datesArray = [{
    dateCode: 0,
    dateValue: "10/05/2005"
  }, {
    dateCode: 1,
    dateValue: "04/03/1980"
  }, {
    dateCode: 2,
    dateValue: "24/08/2011"
  }, {
    dateCode: 3,
    dateValue: "01/12/1980"
  }, {
    dateCode: 4,
    dateValue: "30/01/2016"
  }];

  public percentagesArray = [{
    percentageCode: 16,
    percentageValue: "16"
  }, {
    percentageCode: 23,
    percentageValue: "23"
  }, {
    percentageCode: 45,
    percentageValue: "45"
  }, {
    percentageCode: 68,
    percentageValue: "68"
  }, {
    percentageCode: 97,
    percentageValue: "97"
  }];

  public translationsArray = [{
    itemCode: 0,
    itemTranslationKey: 'TRANSLATION_0'
  }, {
    itemCode: 1,
    itemTranslationKey: 'TRANSLATION_1'
  }, {
    itemCode: 2,
    itemTranslationKey: 'TRANSLATION_2'
  }];

  public selectedCountryCode = 2;

  public selectedCountriesCode = [1, 2];

  public selectedIntegerCode = 2;

  public selectedIntegerValues = [1, 2];

  public selectedDateCode = 3;

  public selectedPercentageCode = 16;

  public selectedBooleanCode = 1;

  public selectedBooleanString = 'trueString';

  public selectedTranslationCode = 2;
}
