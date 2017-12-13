const FAKE_ACCOUNTS_TABLE =
    [{ 'STARTDATE': 631148400000, 'OFFICEID': '0002', 'ENTITYID': '2095', 'ENDDATE': 1010271600000, 'ACCOUNTTYP': 'Savings account', 'ANID': '0000000010', 'INTERESRATE': 0.009899999999999999, 'ACCOUNTID': 1, 'BALANCE': 17835.0, 'CDID': '34' },
    { 'STARTDATE': 966722400000, 'OFFICEID': '0000', 'ENTITYID': '2095', 'ENDDATE': 1072825200000, 'ACCOUNTTYP': 'Savings account', 'ANID': '0000000002', 'INTERESRATE': 0.009899999999999999, 'ACCOUNTID': 2, 'BALANCE': 1958.2299999999998, 'CDID': '00' },
    { 'STARTDATE': 1215554400000, 'OFFICEID': '0000', 'ENTITYID': '2095', 'ENDDATE': 1224626400000, 'ACCOUNTTYP': 'Personal account', 'ANID': '0000000003', 'INTERESRATE': 0.0125, 'ACCOUNTID': 3, 'BALANCE': 15000.0, 'CDID': '00' },
    { 'STARTDATE': 1049493600000, 'OFFICEID': '0001', 'ENTITYID': '2095', 'ENDDATE': 1072825200000, 'ACCOUNTTYP': 'Personal account', 'ANID': '0000000001', 'INTERESRATE': 0.0125, 'ACCOUNTID': 5, 'BALANCE': 20026.0, 'CDID': '00' },
    { 'STARTDATE': 995320800000, 'OFFICEID': '0001', 'ENTITYID': '2095', 'ENDDATE': 1009753200000, 'ACCOUNTTYP': 'Savings account', 'ANID': '0000000004', 'INTERESRATE': 0.043, 'ACCOUNTID': 6, 'BALANCE': 660.13, 'CDID': '00' },
    { 'STARTDATE': 1061071200000, 'OFFICEID': '0001', 'ENTITYID': '2095', 'ENDDATE': 1072825200000, 'ACCOUNTTYP': 'Savings account', 'ANID': '0000000005', 'INTERESRATE': 0.043, 'ACCOUNTID': 7, 'BALANCE': 11500.0, 'CDID': '00' },
    { 'STARTDATE': 1049407200000, 'OFFICEID': '0001', 'ENTITYID': '2095', 'ENDDATE': 1221602400000, 'ACCOUNTTYP': 'Time deposit account', 'ANID': '0000000006', 'INTERESRATE': 0.15, 'ACCOUNTID': 8, 'BALANCE': 1937.0, 'CDID': '00' },
    { 'STARTDATE': 1049493600000, 'OFFICEID': '0001', 'ENTITYID': '2095', 'ENDDATE': 1072825200000, 'ACCOUNTTYP': 'Time deposit account', 'ANID': '0000000007', 'INTERESRATE': 0.15, 'ACCOUNTID': 9, 'BALANCE': 834.77, 'CDID': '00' },
    { 'STARTDATE': 1049493600000, 'OFFICEID': '0001', 'ENTITYID': '2095', 'ENDDATE': 1072825200000, 'ACCOUNTTYP': 'Personal account', 'ANID': '0000000008', 'INTERESRATE': 0.0097, 'ACCOUNTID': 10, 'BALANCE': 799.0, 'CDID': '00' },
    { 'STARTDATE': 1064008800000, 'OFFICEID': '0001', 'ENTITYID': '2095', 'ENDDATE': 1072825200000, 'ACCOUNTTYP': 'Personal account', 'ANID': '0000000009', 'INTERESRATE': 0.0097, 'ACCOUNTID': 11, 'BALANCE': 1058.92, 'CDID': '00' },
    { 'STARTDATE': 1049493600000, 'OFFICEID': '0001', 'ENTITYID': '2095', 'ENDDATE': 1072825200000, 'ACCOUNTTYP': 'Individual Savings account', 'ANID': '0001125411', 'INTERESRATE': 0.0175, 'ACCOUNTID': 27, 'BALANCE': 1195.0900000000001, 'CDID': '00' },
    { 'STARTDATE': 1049493600000, 'OFFICEID': '0001', 'ENTITYID': '2095', 'ENDDATE': 1072825200000, 'ACCOUNTTYP': 'Individual Savings account', 'ANID': '0015811111', 'INTERESRATE': 0.0175, 'ACCOUNTID': 36, 'BALANCE': 6296.0, 'CDID': '00' },
    { 'STARTDATE': 1144188000000, 'OFFICEID': '0003', 'ENTITYID': '2095', 'ENDDATE': 1167519600000, 'ACCOUNTTYP': 'Tax-Exempt Special Savings account', 'ANID': '0000251442', 'INTERESRATE': 0.0125, 'ACCOUNTID': 41, 'BALANCE': 963.0, 'CDID': '00' },
    { 'STARTDATE': 1053234420250, 'OFFICEID': '0070', 'ENTITYID': '2095', 'ACCOUNTTYP': 'Tax-Exempt Special Savings account', 'ANID': '5734988462', 'INTERESRATE': 0.0125, 'ACCOUNTID': 7040, 'BALANCE': 863.0, 'CDID': '31' },
    { 'STARTDATE': 1074079201493, 'OFFICEID': '0103', 'ENTITYID': '2095', 'ACCOUNTTYP': 'Automatic transfer service account', 'ANID': '1009255260', 'INTERESRATE': 0.033, 'ACCOUNTID': 7041, 'BALANCE': 1069.0, 'CDID': '43' }];

const HTML_DATA = `
    <o-table
    [fixed-header]="{fixed-header}"  [static-data]="getTableData()"
    columns="ACCOUNTID;ENTITYID;OFFICEID;CDID;ANID;BALANCE;STARTDATE;ENDDATE;INTERESRATE;ACCOUNTTYP"
    visible-columns="ENTITYID;OFFICEID;CDID;ANID;ACCOUNTTYP;BALANCE"
    attr="accounts" title="ACCOUNTS" layout-padding  sort-columns="ANID" 
    query-on-init="false" quick-filter="yes"
    insert-button="no" delete-button="no" refresh-button="no" pagination-controls="no"
    [ngStyle]="{ngStyle}" >
        <o-table-column attr="ENTITYID" title="ENTITYID" width="14%" ></o-table-column>
        <o-table-column attr="CDID" title="CDID" width="14%" ></o-table-column>
        <o-table-column attr="ANID" title="ANID" width="14%" ></o-table-column>
        <o-table-column attr="BALANCE" title="BALANCE"   currency-symbol="€" type="currency" grouping="yes" thousand-separator=","> </o-table-column>
        <o-table-column-aggregate attr="BALANCE" title="sum:"></o-table-column-aggregate>
    </o-table>
`;


const TYPESCRIPT_DATA = `

    getTableData() {
        return ${JSON.stringify(FAKE_ACCOUNTS_TABLE)}
    }
    `;
export class TableLayoutUtils {
    public static getAccounts(): Array<any> {
        return FAKE_ACCOUNTS_TABLE;
    }
    public static getFiles(key: string) {
        const files = [
            {
                'type': 'html',
                'data': TableLayoutUtils.getTypeHtml()
            },
            {
                'type': 'typescript',
                'data': TableLayoutUtils.getTypescript()
            },
            {
                'type': 'scss',
                'data': ''
            }];
        return files;
    }


    public static getTypescript() {
        return TYPESCRIPT_DATA;
    }

    public static getTypeHtml() {
        let tpl = HTML_DATA;

        return tpl;
    }

    public static getHtml(data: any) {
        let tpl = HTML_DATA;

        tpl = tpl.replace('{title}', data.title || '')
            .replace('{fixed-header}', data.fixedHeader)
            .replace('{ngStyle}', '{\'height\':' + data.height + '}');
        return tpl;
    }



}