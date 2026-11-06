import { Component, ViewEncapsulation } from '@angular/core';
import { OCollectionGroupEvent } from 'ontimize-web-ngx-extra-components';

interface DemoItem {
  id?: string;
  text: string;
}

interface DemoGroup {
  id?: string;
  name: string;
  items: DemoItem[];
}

const COLLECTION_EDITOR_NGMODEL_HTML_DATA = `
  <!-- No <o-form>, no FormGroup: just [(ngModel)] against a plain array. -->
  <mat-checkbox [(ngModel)]="failRemoval">The simulated DELETE fails</mat-checkbox>
  <button mat-stroked-button type="button" (click)="reset()">Reset data</button>

  <o-collection-editor attr="ngModelGroups" [(ngModel)]="groups"
    [create-group]="createGroup" [create-item]="createItem"
    [remove-group-handler]="removeGroupHandler"
    group-title-column="name" item-title-column="text"
    group-label="Group" items-label="Tasks in this group"
    add-group-text="Add a group" add-item-text="Add a task"
    empty-groups-text="No groups yet. Use the button below to add the first one."
    empty-items-text="This group has no tasks yet."
    confirm-remove-group-message=""
    (onGroupRemoved)="onGroupRemoved($event)">

    <ng-template oCollectionGroupFields let-group let-notifyChange="notifyChange">
      <!-- A fixed \`attr\` is fine here because there is no o-form to register into.
           Inside <o-form> it must be unique per row, e.g. [attr]="'groupName_' + key". -->
      <o-text-input attr="groupName" label="Group name" read-only="no"
        [(ngModel)]="group.name" (onValueChange)="notifyChange()">
      </o-text-input>
    </ng-template>

    <ng-template oCollectionItem let-item let-notifyChange="notifyChange">
      <o-text-input attr="itemText" label="Task" read-only="no"
        [(ngModel)]="item.text" (onValueChange)="notifyChange()">
      </o-text-input>
    </ng-template>

  </o-collection-editor>

  <!-- The model, live: every keystroke goes through notifyChange() -> ngModelChange. -->
  <pre>{{ groups | json }}</pre>
`;

const COLLECTION_EDITOR_NGMODEL_TS_DATA = `
  interface DemoItem { id?: string; text: string; }
  interface DemoGroup { id?: string; name: string; items: DemoItem[]; }

  @Component({
    selector: 'collection-editor-ngmodel',
    templateUrl: './collection-editor-ngmodel.component.html',
    styleUrls: ['./collection-editor-ngmodel.component.scss']
  })
  export class CollectionEditorNgModelComponent {

    /** The [(ngModel)] target. Reassigned by the editor on every change. */
    groups: DemoGroup[] = this.buildSeed();

    /** Flips the deferred handler between "resolves true" and "resolves false". */
    failRemoval = false;

    removalLog = '';

    // Without create-group / create-item the add buttons stay disabled.
    createGroup = (index: number): DemoGroup => ({ name: '', items: [{ text: '' }] });
    createItem = (): DemoItem => ({ text: '' });

    /**
     * Deferred removal: the component awaits this handler and keeps the row
     * visible, marked busy (skeleton), while it is pending. Resolving true
     * removes the row; resolving false — or throwing — leaves the data
     * untouched, so the row simply comes back.
     *
     * Arrow property, not a method: it is passed as an input, so it must keep
     * its \`this\`.
     */
    removeGroupHandler = async (group: DemoGroup, index: number): Promise<boolean> => {
      this.removalLog = 'DELETE /groups/' + index + ' ... (1.5s)';
      await this.delay(1500);
      if (this.failRemoval) {
        this.removalLog = 'DELETE /groups/' + index + ' failed: the group was restored untouched.';
        return false;
      }
      this.removalLog = 'DELETE /groups/' + index + ' -> 200 OK';
      return true;
    };

    onGroupRemoved(event: OCollectionGroupEvent<DemoGroup>): void {
      console.log('[o-collection-editor] group removed', event);
    }

    reset(): void {
      // A brand new array reaches the editor through writeValue and rebuilds it.
      this.groups = this.buildSeed();
      this.removalLog = '';
    }

    private buildSeed(): DemoGroup[] {
      return [
        {
          id: 'g1', name: 'Release checklist',
          items: [
            { id: 'i1', text: 'Bump the version' },
            { id: 'i2', text: 'Write the changelog' }
          ]
        },
        {
          id: 'g2', name: 'Onboarding',
          items: [{ id: 'i3', text: 'Create the accounts' }]
        }
      ];
    }

    private delay(ms: number): Promise<void> {
      return new Promise(resolve => setTimeout(resolve, ms));
    }

  }
`;

@Component({
  selector: 'collection-editor-ngmodel',
  templateUrl: './collection-editor-ngmodel.component.html',
  styleUrls: ['./collection-editor-ngmodel.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.collection-editor-ngmodel]': 'true'
  }
})
export class CollectionEditorNgModelComponent {

  files = {
    html: {
      data: COLLECTION_EDITOR_NGMODEL_HTML_DATA
    },
    typescript: {
      data: COLLECTION_EDITOR_NGMODEL_TS_DATA
    }
  };

  /** The [(ngModel)] target. The editor reassigns it on every change. */
  groups: DemoGroup[] = this.buildSeed();

  /** Flips the deferred handler between "resolves true" and "resolves false". */
  failRemoval = false;

  removalLog = '';

  // Without create-group / create-item the add buttons stay disabled.
  createGroup = (index: number): DemoGroup => ({ name: '', items: [{ text: '' }] });
  createItem = (): DemoItem => ({ text: '' });

  /**
   * Deferred removal, the point of this page.
   *
   * The component awaits this handler and keeps the row in place, marked busy
   * (it renders a skeleton with the same height, so nothing jumps), while the
   * call is pending. Resolving `true` removes the row; resolving `false` — or
   * throwing — leaves the data untouched, so the row comes back exactly as it
   * was, including whatever the user had typed in it.
   *
   * An arrow property, not a method: it travels as an input, so it has to keep
   * its own `this`.
   */
  removeGroupHandler = async (group: DemoGroup, index: number): Promise<boolean> => {
    this.removalLog = 'DELETE /groups/' + index + ' ... (1.5s)';
    await this.delay(1500);
    if (this.failRemoval) {
      this.removalLog = 'DELETE /groups/' + index + ' failed: the group was restored untouched.';
      return false;
    }
    this.removalLog = 'DELETE /groups/' + index + ' -> 200 OK';
    return true;
  };

  onGroupRemoved(event: OCollectionGroupEvent<DemoGroup>): void {
    console.log('[o-collection-editor] group removed', event);
  }

  reset(): void {
    // A brand new array reaches the editor through writeValue, which rebuilds it.
    this.groups = this.buildSeed();
    this.removalLog = '';
  }

  private buildSeed(): DemoGroup[] {
    return [
      {
        id: 'g1', name: 'Release checklist',
        items: [
          { id: 'i1', text: 'Bump the version' },
          { id: 'i2', text: 'Write the changelog' }
        ]
      },
      {
        id: 'g2', name: 'Onboarding',
        items: [{ id: 'i3', text: 'Create the accounts' }]
      }
    ];
  }

  private delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

}
