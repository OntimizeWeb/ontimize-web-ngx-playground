import { Component } from '@angular/core';
import { TableUtils } from '../table-utils';

const FAKE_ACCOUNTS_TABLE = [
  { 'NUMCARDS': 2, 'NAME': 'Bugle Smith', 'STARTDATE': 1215554400000, 'ACCOUNT': '0000 2095 00 0000000003', 'ENDDATE': 1224626400000, 'ACCOUNTTYP': 'Personal account', 'INTERESRATE': 0.0125, 'ACCOUNTID': 3, 'BALANCE': 15000.0, 'CDID': '00', 'COMMISSION': 'true', 'CLOSED': 1 },
  { 'NUMCARDS': 3, 'NAME': 'Murray Bugle', 'STARTDATE': 1049493600000, 'ACCOUNT': '0001 2095 00 0000000001', 'ENDDATE': 1072825200000, 'ACCOUNTTYP': 'Personal account', 'INTERESRATE': 0.0125, 'ACCOUNTID': 5, 'BALANCE': 20000.0, 'COMMISSION': 'true', 'CLOSED': 0 },
  { 'NUMCARDS': 2, 'NAME': 'Baños Marquez, Murray', 'STARTDATE': 995320800000, 'ACCOUNT': '0001 2095 00 0000000004', 'ACCOUNTTYP': 'Savings account', 'INTERESRATE': 0.043, 'ACCOUNTID': 6, 'BALANCE': 660.13, 'COMMISSION': 'true', 'CLOSED': 1 },
  { 'NUMCARDS': 1, 'NAME': 'ButterCup, Buendía Lorente', 'STARTDATE': 1061071200000, 'ACCOUNT': '0001 2095 00 0000000005', 'ENDDATE': 1072825200000, 'ACCOUNTTYP': 'Savings account', 'INTERESRATE': 0.043, 'ACCOUNTID': 7, 'BALANCE': 11500.0, 'CDID': '00', 'COMMISSION': 'true', 'CLOSED': 0 }
];

@Component({
  selector: 'table-multiple-sort',
  templateUrl: 'table-multiple-sort.component.html'
})
export class TableMultipleSortComponent {

  tableData: Array<any> = FAKE_ACCOUNTS_TABLE;

  getFiles(key: string) {
    return TableUtils.getFiles(key);
  }

}
