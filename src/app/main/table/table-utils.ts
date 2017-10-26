const FAKE_ACCOUNTS_TABLE = [
    { "STARTDATE": 631148400000, "OFFICEID": "0002", "ENTITYID": "2095", "ENDDATE": 1010271600000, "ACCOUNTTYP": "Savings account", "ANID": "0000000010", "INTERESRATE": 0.009899999999999999, "ACCOUNTID": 1, "BALANCE": 17835.0, "CDID": "34" },
    { "STARTDATE": 966722400000, "OFFICEID": "0000", "ENTITYID": "2095", "ENDDATE": 1072825200000, "ACCOUNTTYP": "Savings account", "ANID": "0000000002", "INTERESRATE": 0.009899999999999999, "ACCOUNTID": 2, "BALANCE": 1958.2299999999998, "CDID": "00" },
    { "STARTDATE": 1215554400000, "OFFICEID": "0000", "ENTITYID": "2095", "ENDDATE": 1224626400000, "ACCOUNTTYP": "Personal account", "ANID": "0000000003", "INTERESRATE": 0.0125, "ACCOUNTID": 3, "BALANCE": 15000.0, "CDID": "00" },
    { "STARTDATE": 1049493600000, "OFFICEID": "0001", "ENTITYID": "2095", "ENDDATE": 1072825200000, "ACCOUNTTYP": "Personal account", "ANID": "0000000001", "INTERESRATE": 0.0125, "ACCOUNTID": 5, "BALANCE": 20000.0, "CDID": "00" },
    { "STARTDATE": 995320800000, "OFFICEID": "0001", "ENTITYID": "2095", "ENDDATE": 1009753200000, "ACCOUNTTYP": "Savings account", "ANID": "0000000004", "INTERESRATE": 0.043, "ACCOUNTID": 6, "BALANCE": 660.13, "CDID": "00" },
    { "STARTDATE": 1061071200000, "OFFICEID": "0001", "ENTITYID": "2095", "ENDDATE": 1072825200000, "ACCOUNTTYP": "Savings account", "ANID": "0000000005", "INTERESRATE": 0.043, "ACCOUNTID": 7, "BALANCE": 11500.0, "CDID": "00" }
    
];


const HTML_DATA = `
<o-table fxFill  columns="ACCOUNTID;ENTITYID;OFFICEID;CDID;ANID;BALANCE;STARTDATE;ENDDATE;INTERESRATE;ACCOUNTTYP"
visible-columns="ENTITYID;OFFICEID;CDID;ANID;ACCOUNTTYP"  layout-padding attr="accounts" title="{title}" [static-data]="getTableData()"
sort-columns="ANID:DESC" query-on-init="false" quick-filter="{quickFilter}" pageable="no" filter-case-sensitive="{filterCaseSensitive}">
<o-table-column attr="ENTITYID" title="ENTITYID" searchable="no"></o-table-column>
<o-table-column attr="OFFICEID" title="OFFICEID" orderable="no"></o-table-column>
</o-table>
`;

const TYPESCRIPT_DATA = `

    getTableData() {
            return [
                { "STARTDATE": 631148400000, "OFFICEID": "0002", "ENTITYID": "2095", "ENDDATE": 1010271600000, "ACCOUNTTYP": "Savings account", "ANID": "0000000010", "INTERESRATE": 0.009899999999999999, "ACCOUNTID": 1, "BALANCE": 17835.0, "CDID": "34" },
                { "STARTDATE": 966722400000, "OFFICEID": "0000", "ENTITYID": "2095", "ENDDATE": 1072825200000, "ACCOUNTTYP": "Savings account", "ANID": "0000000002", "INTERESRATE": 0.009899999999999999, "ACCOUNTID": 2, "BALANCE": 1958.2299999999998, "CDID": "00" },
                { "STARTDATE": 1215554400000, "OFFICEID": "0000", "ENTITYID": "2095", "ENDDATE": 1224626400000, "ACCOUNTTYP": "Personal account", "ANID": "0000000003", "INTERESRATE": 0.0125, "ACCOUNTID": 3, "BALANCE": 15000.0, "CDID": "00" },
                { "STARTDATE": 1049493600000, "OFFICEID": "0001", "ENTITYID": "2095", "ENDDATE": 1072825200000, "ACCOUNTTYP": "Personal account", "ANID": "0000000001", "INTERESRATE": 0.0125, "ACCOUNTID": 5, "BALANCE": 20000.0, "CDID": "00" },
                { "STARTDATE": 995320800000, "OFFICEID": "0001", "ENTITYID": "2095", "ENDDATE": 1009753200000, "ACCOUNTTYP": "Savings account", "ANID": "0000000004", "INTERESRATE": 0.043, "ACCOUNTID": 6, "BALANCE": 660.13, "CDID": "00" },
                { "STARTDATE": 1061071200000, "OFFICEID": "0001", "ENTITYID": "2095", "ENDDATE": 1072825200000, "ACCOUNTTYP": "Savings account", "ANID": "0000000005", "INTERESRATE": 0.043, "ACCOUNTID": 7, "BALANCE": 11500.0, "CDID": "00" },
                
            ];
          }
        `;

export class TableUtils {
    public static getAccounts(): Array<any> {
        return FAKE_ACCOUNTS_TABLE;
    }
    public static getHtml(key: string, table: any,data:any) {
        let tpl = HTML_DATA;

        if (table) {
            tpl = tpl.replace('{title}', data.title || '')
                .replace('{quickFilter}', data.filter)
                .replace('{filterCaseSensitive}', data.filterCaseSensitive)
        }

        return tpl;
    }

    public static getFiles(){
        return [
            {
                'type': 'html',
                'data': HTML_DATA
            },
            {
                'type': 'scss',
                'data': ''
            }, {
                'type': 'typescript',
                'data': TYPESCRIPT_DATA
            }];
    }

  

}