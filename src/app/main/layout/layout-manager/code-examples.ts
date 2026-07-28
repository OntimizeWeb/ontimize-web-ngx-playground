const SIDENAV_HTML_DATA = `
  <o-form-layout-manager attr="o-form-layout-manager-sidenav" mode="sidenav" title="CUSTOMERS"
    label-columns="SURNAME;NAME" separator="," title-data-origin="customers_form_edit" sidenav-width="80%">

    <o-table #table attr="table" keys="CUSTOMERID" columns="CUSTOMERID;PHOTO;NAME;SURNAME;STARTDATE;EMAIL;ADDRESS"
      visible-columns="PHOTO;NAME;SURNAME;STARTDATE;EMAIL;ADDRESS" sort-columns="SURNAME" quick-filter="no"      select-all-checkbox="no" export-button="no" show-configuration-option="no" columns-visibility-button="no" delete-button="no"
      service-type="DummyService" service="customers" entity="customer" query-rows="50"  virtual-scroll="false">

      <o-table-column attr="PHOTO" orderable="no" searchable="no" width="64px" tooltip="no">
        <o-table-cell-renderer-image image-type="base64" empty-image="assets/images/no-image.png" avatar="yes">
        </o-table-cell-renderer-image>
      </o-table-column>
      <o-table-column attr="STARTDATE" title="STARTDATE" type="date"> </o-table-column>
    </o-table>

  </o-form-layout-manager>
`;
const TABGROUP_HTML_DATA = `
  <o-form-layout-manager attr="o-form-layout-manager-tabgroup" mode="tab" title="CUSTOMERS"
    label-columns="SURNAME;NAME" separator="," title-data-origin="customers_form_edit">

    <o-table #table attr="table" keys="CUSTOMERID" columns="CUSTOMERID;PHOTO;NAME;SURNAME;STARTDATE;EMAIL;ADDRESS"
      visible-columns="PHOTO;NAME;SURNAME;STARTDATE;EMAIL;ADDRESS" sort-columns="SURNAME" quick-filter="no"      select-all-checkbox="no" export-button="no" show-configuration-option="no" columns-visibility-button="no" delete-button="no"
      service-type="DummyService" service="customers" entity="customer" query-rows="50"  virtual-scroll="false">

      <o-table-column attr="PHOTO" orderable="no" searchable="no" width="64px" tooltip="no">
        <o-table-cell-renderer-image image-type="base64" empty-image="assets/images/no-image.png" avatar="yes">
        </o-table-cell-renderer-image>
      </o-table-column>
      <o-table-column attr="STARTDATE" title="STARTDATE" type="date"> </o-table-column>
    </o-table>

  </o-form-layout-manager>
`;
const DIALOG_HTML_DATA = `
  <o-form-layout-manager attr="o-form-layout-manager-dialog" mode="dialog" title="CUSTOMERS"
    label-columns="SURNAME;NAME" separator="," title-data-origin="customers_form_edit">

    <o-table #table attr="table" keys="CUSTOMERID" columns="CUSTOMERID;PHOTO;NAME;SURNAME;STARTDATE;EMAIL;ADDRESS"
      visible-columns="PHOTO;NAME;SURNAME;STARTDATE;EMAIL;ADDRESS" sort-columns="SURNAME" quick-filter="no"      select-all-checkbox="no" export-button="no" show-configuration-option="no" columns-visibility-button="no" delete-button="no"
      service-type="DummyService" service="customers" entity="customer" query-rows="50"  virtual-scroll="false">

      <o-table-column attr="PHOTO" orderable="no" searchable="no" width="64px" tooltip="no">
        <o-table-cell-renderer-image image-type="base64" empty-image="assets/images/no-image.png" avatar="yes">
        </o-table-cell-renderer-image>
      </o-table-column>
      <o-table-column attr="STARTDATE" title="STARTDATE" type="date"> </o-table-column>
    </o-table>

  </o-form-layout-manager>
`;
const SPLIT_PANE_HTML_DATA = `
  <o-form-layout-manager attr="o-form-layout-manager-split-pane" mode="split-pane" title="CUSTOMERS"
    label-columns="SURNAME;NAME" separator="," title-data-origin="customers_form_edit">

    <o-table #table attr="table" keys="CUSTOMERID" columns="CUSTOMERID;PHOTO;NAME;SURNAME;STARTDATE;EMAIL;ADDRESS"
      visible-columns="PHOTO;NAME;SURNAME;STARTDATE;EMAIL;ADDRESS" sort-columns="SURNAME" quick-filter="no"      select-all-checkbox="no" export-button="no" show-configuration-option="no" columns-visibility-button="no" delete-button="no"
      service-type="DummyService" service="customers" entity="customer" query-rows="50"  virtual-scroll="false">

      <o-table-column attr="PHOTO" orderable="no" searchable="no" width="64px" tooltip="no">
        <o-table-cell-renderer-image image-type="base64" empty-image="assets/images/no-image.png" avatar="yes">
        </o-table-cell-renderer-image>
      </o-table-column>
      <o-table-column attr="STARTDATE" title="STARTDATE" type="date"> </o-table-column>
    </o-table>

  </o-form-layout-manager>
`;


export class LayoutCodeExamples {
  public static readonly files_sidenav = {
    html: {
      data: SIDENAV_HTML_DATA
    },
  };
  public static readonly files_tabgroup = {
    html: {
      data: TABGROUP_HTML_DATA
    },
  };
  public static readonly files_dialog = {
    html: {
      data: DIALOG_HTML_DATA
    },
  };
  public static readonly files_split_pane = {
    html: {
      data: SPLIT_PANE_HTML_DATA
    },
  };


}

