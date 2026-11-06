import { Component } from '@angular/core';

const TWO_LISTS_HTML_DATA = `
<div class="o-flex-row o-gap-10 o-flex-fill">

  <o-list class="o-flex-50" #left attr="left" keys="id" columns="id;name;email" quick-filter-columns="name;email"
    [static-data]="leftUsers" title="LIST.TWO_LISTS.LEFT" detail-mode="none" insert-button="yes"
    insert-button-floatable="yes" scroll-to-top-button="yes">
    <o-list-item *ngFor="let row of left.dataArray">
      <o-list-item-text primary-text="{{ row.name }}" secondary-text="{{ row.email }}"></o-list-item-text>
    </o-list-item>
  </o-list>

  <o-list class="o-flex-50" #right attr="right" keys="id" columns="id;name;email" quick-filter-columns="name;email"
    [static-data]="rightUsers" title="LIST.TWO_LISTS.RIGHT" detail-mode="none" insert-button="yes"
    insert-button-floatable="yes" scroll-to-top-button="yes">
    <o-list-item *ngFor="let row of right.dataArray">
      <o-list-item-text primary-text="{{ row.name }}" secondary-text="{{ row.email }}"></o-list-item-text>
    </o-list-item>
  </o-list>

</div>
`;

/**
 * Two o-list side by side, both with the insert FAB and the scroll-to-top button enabled: shows how
 * the two floating stacks behave when more than one list is on screen at the same time.
 */
@Component({
  selector: 'two-lists',
  templateUrl: './two-lists.component.html'
})
export class TwoListsComponent {

  files = {
    'html': {
      'data': TWO_LISTS_HTML_DATA
    },
    'scss': {
      'data': undefined
    },
    'typescript': {
      'data': undefined
    }
  };

  // Enough rows for both lists to scroll, which is what makes the scroll-to-top button appear.
  protected leftUsers = TwoListsComponent.buildUsers('Left');
  protected rightUsers = TwoListsComponent.buildUsers('Right');

  private static buildUsers(prefix: string): Array<any> {
    return Array.from({ length: 40 }, (_x, i) => ({
      id: i + 1,
      name: `${prefix} user ${i + 1}`,
      email: `${prefix.toLowerCase()}.user${i + 1}@ontimize.com`
    }));
  }

}
