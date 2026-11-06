import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { OFormComponent, OFormValidation } from 'ontimize-web-ngx';
import { OCollectionEditorComponent } from 'ontimize-web-ngx-extra-components';

interface DemoItem {
  id?: string;
  text: string;
}

interface DemoGroup {
  id?: string;
  name: string;
  items: DemoItem[];
}

const COLLECTION_EDITOR_OFORM_HTML_DATA = `
  <o-form attr="templateForm" show-header="no" query-on-init="no" editable-detail="yes"
    layout-direction="column" [form-data-validation-function]="validationFunction">

    <!-- Inside an <o-form> the editor binds through \`attr\`, never through formControlName. -->
    <o-collection-editor class="o-flex" attr="sections" [static-data]="sections"
      group-keys="id" item-keys="id"
      [create-group]="createGroup" [create-item]="createItem"
      [min-groups]="1" [min-items-per-group]="1"
      title="Form sections"
      description="Each section holds the questions shown on one step of the wizard."
      group-label="Section" items-label="Questions"
      add-group-text="Add section" add-item-text="Add question"
      group-title-column="name"
      empty-groups-text="No sections yet" empty-items-text="No questions in this section"
      confirm-remove-group-message="Remove this section and all of its questions?"
      confirm-remove-item-message="Remove this question?"
      (onGroupAdded)="log('onGroupAdded', $event)" (onGroupRemoved)="log('onGroupRemoved', $event)"
      (onItemAdded)="log('onItemAdded', $event)" (onItemRemoved)="log('onItemRemoved', $event)">

      <ng-template oCollectionGroupFields let-group let-key="key" let-invalid="invalid" let-notifyChange="notifyChange">
        <!-- MANDATORY: a UNIQUE attr per projected input. Every input rendered by
             this template registers itself in the SAME o-form, so a fixed attr
             would let only the first section register and o-form would log a
             console.error for every other one. -->
        <o-text-input class="o-flex" [attr]="'groupName_' + key" label="Section name" read-only="no"
          required="yes" [(ngModel)]="group.name" [ngModelOptions]="{ standalone: true }" (onChange)="notifyChange()">
        </o-text-input>
        @if (invalid) {
          <span class="collection-editor-oform__invalid-hint">This section needs at least one question</span>
        }
      </ng-template>

      <ng-template oCollectionItem let-item let-key="key" let-groupKey="groupKey" let-notifyChange="notifyChange">
        <o-text-input class="o-flex" [attr]="'itemText_' + groupKey + '_' + key" label="Question" read-only="no"
          required="yes" [(ngModel)]="item.text" [ngModelOptions]="{ standalone: true }" (onChange)="notifyChange()">
        </o-text-input>
      </ng-template>

    </o-collection-editor>

    <div class="collection-editor-oform__actions">
      <button mat-raised-button color="primary" type="button" (click)="save()">Validate and save</button>
      <button mat-button type="button" (click)="clear()">Clear result</button>
    </div>

    @if (validation) {
      <div class="collection-editor-oform__result">
        @if (validation.valid) {
          <div class="collection-editor-oform__valid">validateStructure(): valid</div>
        } @else {
          <div class="collection-editor-oform__invalid">
            <span>validateStructure(): invalid</span>
            @for (message of validation.messages; track $index) {
              <span class="collection-editor-oform__message">{{ message }}</span>
            }
          </div>
        }

        @if (payload) {
          <span class="collection-editor-oform__payload-label">form.getFieldValue('sections')</span>
          <pre class="collection-editor-oform__payload">{{ payload | json }}</pre>
        }
      </div>
    }

  </o-form>
`;

const COLLECTION_EDITOR_OFORM_TS_DATA = `
  import { Component, ViewChild } from '@angular/core';
  import { OFormComponent, OFormValidation } from 'ontimize-web-ngx';
  import { OCollectionEditorComponent } from 'ontimize-web-ngx-extra-components';

  interface DemoItem { id?: string; text: string; }
  interface DemoGroup { id?: string; name: string; items: DemoItem[]; }

  @Component({
    selector: 'collection-editor-oform',
    templateUrl: './collection-editor-oform.component.html',
    styleUrls: ['./collection-editor-oform.component.scss']
  })
  export class CollectionEditorOFormComponent {

    @ViewChild(OFormComponent) form?: OFormComponent;
    @ViewChild(OCollectionEditorComponent) editor?: OCollectionEditorComponent<DemoGroup, DemoItem>;

    /** Seed data. The form value always wins over it once the user edits. */
    sections: DemoGroup[] = [
      {
        id: 'S1', name: 'Personal data', items: [
          { id: 'I1', text: 'Full name' },
          { id: 'I2', text: 'Date of birth' }
        ]
      },
      {
        id: 'S2', name: 'Contact', items: [
          { id: 'I3', text: 'Email address' }
        ]
      }
    ];

    /** Without create-group / create-item the add buttons stay disabled. */
    createGroup = (index: number): DemoGroup => ({ name: '', items: [{ text: '' }] });
    createItem = (): DemoItem => ({ text: '' });

    /**
     * Bound to the o-form's \`form-data-validation-function\`. An arrow FIELD, not
     * a method: o-form stores the reference and calls it detached, so \`this\` has
     * to be captured here.
     */
    validationFunction = (): OFormValidation => this.editor ? this.editor.validateStructure() : { valid: true };

    validation: OFormValidation | null = null;
    payload: DemoGroup[] | null = null;

    /** Stands in for the toolbar's save action, which would need a real service. */
    save(): void {
      this.validation = this.validationFunction();
      this.payload = this.validation.valid ? this.form?.getFieldValue('sections') ?? null : null;
    }

    clear(): void {
      this.validation = null;
      this.payload = null;
    }

    log(event: string, data: any): void {
      console.log('[o-collection-editor] ' + event, data);
    }
  }
`;

@Component({
  selector: 'collection-editor-oform',
  templateUrl: './collection-editor-oform.component.html',
  styleUrls: ['./collection-editor-oform.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.collection-editor-oform]': 'true'
  }
})
export class CollectionEditorOFormComponent {

  files = {
    html: {
      data: COLLECTION_EDITOR_OFORM_HTML_DATA
    },
    typescript: {
      data: COLLECTION_EDITOR_OFORM_TS_DATA
    }
  };

  @ViewChild(OFormComponent)
  form?: OFormComponent;

  @ViewChild(OCollectionEditorComponent)
  editor?: OCollectionEditorComponent<DemoGroup, DemoItem>;

  /** Seed data. The form value always wins over it once the user edits. */
  sections: DemoGroup[] = [
    {
      id: 'S1', name: 'Personal data', items: [
        { id: 'I1', text: 'Full name' },
        { id: 'I2', text: 'Date of birth' }
      ]
    },
    {
      id: 'S2', name: 'Contact', items: [
        { id: 'I3', text: 'Email address' }
      ]
    }
  ];

  /** Without create-group / create-item the add buttons stay disabled. */
  createGroup = (index: number): DemoGroup => ({ name: '', items: [{ text: '' }] });
  createItem = (): DemoItem => ({ text: '' });

  /**
   * Bound to the o-form's `form-data-validation-function`. An arrow FIELD, not a
   * method: o-form stores the reference and calls it detached, so `this` has to
   * be captured here.
   */
  validationFunction = (): OFormValidation => this.editor ? this.editor.validateStructure() : { valid: true };

  validation: OFormValidation | null = null;
  payload: DemoGroup[] | null = null;

  /** Stands in for the toolbar's save action, which would need a real service. */
  save(): void {
    this.validation = this.validationFunction();
    this.payload = this.validation.valid ? this.form?.getFieldValue('sections') ?? null : null;
  }

  clear(): void {
    this.validation = null;
    this.payload = null;
  }

  log(event: string, data: any): void {
    console.log('[o-collection-editor] ' + event, data);
  }

}
