import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { OCollectionEditorComponent } from 'ontimize-web-ngx-extra-components';
import { OFormValidation } from 'ontimize-web-ngx';

const COLLECTION_EDITOR_HTML_DATA = `
<o-collection-editor #editor class="collection-editor-example" [static-data]="staticData"
  group-keys="id" item-keys="id"
  [create-group]="createGroup" [create-item]="createItem"

  [enabled]="enabled" [min-groups]="minGroups" [min-items-per-group]="minItemsPerGroup"
  [groups-draggable]="groupsDraggable" [items-draggable]="itemsDraggable"
  [groups-sortable]="groupsSortable" [items-sortable]="itemsSortable"
  [groups-addable]="groupsAddable" [items-addable]="itemsAddable"
  [groups-removable]="groupsRemovable" [items-removable]="itemsRemovable"

  [title]="title" [description]="description"
  [group-label]="groupLabel" [item-label]="itemLabel" [items-label]="itemsLabel"
  [add-group-text]="addGroupText" [add-item-text]="addItemText"
  [empty-groups-text]="emptyGroupsText" [empty-items-text]="emptyItemsText"

  (onGroupAdded)="log('onGroupAdded', $event)"
  (onGroupRemoved)="log('onGroupRemoved', $event)"
  (onItemAdded)="log('onItemAdded', $event)"
  (onItemRemoved)="log('onItemRemoved', $event)"
  (onGroupMoved)="log('onGroupMoved', $event)"
  (onItemMoved)="log('onItemMoved', $event)">

  <ng-template oCollectionGroupFields let-group let-key="key" let-invalid="invalid" let-notifyChange="notifyChange">
    <o-text-input class="test-field" [attr]="'groupName_' + key" label="Group name"
      [(ngModel)]="group.name" (onChange)="notifyChange()"></o-text-input>
  </ng-template>

  <ng-template oCollectionItem let-item let-key="key" let-groupKey="groupKey" let-notifyChange="notifyChange">
    <o-text-input class="test-field" [attr]="'itemText_' + groupKey + '_' + key" label="Item text"
      [(ngModel)]="item.text" (onChange)="notifyChange()"></o-text-input>
  </ng-template>
</o-collection-editor>
`;

const COLLECTION_EDITOR_TS_DATA = `
interface DemoItem { id?: string; text: string; }
interface DemoGroup { id?: string; name: string; items: DemoItem[]; }

@Component({
  selector: 'collection-editor-test',
  templateUrl: './collection-editor-test.component.html'
})
export class CollectionEditorTestComponent {
  @ViewChild('editor') editor?: OCollectionEditorComponent<DemoGroup, DemoItem>;

  // Data
  staticData: DemoGroup[] = [
    { id: '1', name: 'Group 1', items: [{ id: '1', text: 'Item 1' }, { id: '2', text: 'Item 2' }] },
    { id: '2', name: 'Group 2', items: [{ id: '3', text: 'Item 3' }] }
  ];
  createGroup = (index: number): DemoGroup => ({ name: 'New group', items: [{ text: '' }] });
  createItem = (): DemoItem => ({ text: '' });

  // Inputs exercised live from the panel
  enabled = true;
  minGroups = 1;
  minItemsPerGroup = 1;
  groupsDraggable = true;
  itemsDraggable = true;
  groupsSortable = true;
  itemsSortable = true;
  groupsAddable = true;
  itemsAddable = true;
  groupsRemovable = true;
  itemsRemovable = true;
  title = 'Collection editor';
  description = 'Every input on the left, every output logged on the right.';
  groupLabel = 'Group';
  itemLabel = 'Item';
  itemsLabel = 'Items';
  addGroupText = 'Add group';
  addItemText = 'Add item';
  emptyGroupsText = 'No groups yet';
  emptyItemsText = 'No items in this group';

  // Outputs
  events: { time: string; name: string; payload: any }[] = [];

  log(name: string, payload: any): void {
    this.events.unshift({ time: new Date().toLocaleTimeString(), name, payload });
  }

  // Imperative API (setGroupBusy / setItemBusy / validateStructure)
  toggleFirstGroupBusy(): void {
    const group = this.editor?.groups[0];
    if (group) {
      this.editor!.setGroupBusy(group.key, !group.busy);
    }
  }

  validationResult: OFormValidation | null = null;
  runValidateStructure(): void {
    this.validationResult = this.editor ? this.editor.validateStructure() : null;
  }
}
`;

interface DemoItem { id?: string; text: string; }
interface DemoGroup { id?: string; name: string; items: DemoItem[]; }

@Component({
  selector: 'collection-editor-test',
  templateUrl: './collection-editor-test.component.html',
  styleUrls: ['./collection-editor-test.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.collection-editor-test]': 'true'
  }
})
export class CollectionEditorTestComponent {
  files = {
    html: {
      data: COLLECTION_EDITOR_HTML_DATA
    },
    typescript: {
      data: COLLECTION_EDITOR_TS_DATA
    }
  };

  @ViewChild('editor') editor?: OCollectionEditorComponent<DemoGroup, DemoItem>;

  // ── Data ─────────────────────────────────────────────────
  staticData: DemoGroup[] = [
    { id: '1', name: 'Group 1', items: [{ id: '1', text: 'Item 1' }, { id: '2', text: 'Item 2' }] },
    { id: '2', name: 'Group 2', items: [{ id: '3', text: 'Item 3' }] }
  ];
  createGroup = (_index: number): DemoGroup => ({ name: 'New group', items: [{ text: '' }] });
  createItem = (): DemoItem => ({ text: '' });

  // ── Every input the panel drives live ───────────────────────
  enabled = true;
  minGroups = 1;
  minItemsPerGroup = 1;
  groupsDraggable = true;
  itemsDraggable = true;
  groupsSortable = true;
  itemsSortable = true;
  groupsAddable = true;
  itemsAddable = true;
  groupsRemovable = true;
  itemsRemovable = true;
  title = 'Collection editor';
  description = 'Every input on the left, every output logged on the right.';
  groupLabel = 'Group';
  itemLabel = 'Item';
  itemsLabel = 'Items';
  addGroupText = 'Add group';
  addItemText = 'Add item';
  emptyGroupsText = 'No groups yet';
  emptyItemsText = 'No items in this group';

  // ── Every output, appended to a visible log ─────────────────
  events: { time: string; name: string; payload: any }[] = [];

  log(name: string, payload: any): void {
    this.events.unshift({ time: new Date().toLocaleTimeString(), name, payload });
  }

  clearLog(): void {
    this.events = [];
  }

  // ── Imperative API: setGroupBusy / setItemBusy / validateStructure ──
  toggleFirstGroupBusy(): void {
    const group = this.editor?.groups[0];
    if (group) {
      this.editor!.setGroupBusy(group.key, !group.busy);
    }
  }

  toggleFirstItemBusy(): void {
    const group = this.editor?.groups[0];
    const item = group?.items[0];
    if (group && item) {
      this.editor!.setItemBusy(group.key, item.key, !item.busy);
    }
  }

  validationResult: OFormValidation | null = null;
  runValidateStructure(): void {
    this.validationResult = this.editor ? this.editor.validateStructure() : null;
  }
}
