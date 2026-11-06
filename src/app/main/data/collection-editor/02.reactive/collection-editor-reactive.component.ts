import { Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {
  OCollectionGroupEvent,
  OCollectionGroupMovedEvent
} from 'ontimize-web-ngx-extra-components';

interface DemoItem {
  id?: string;
  text: string;
}

interface DemoGroup {
  id?: string;
  name: string;
  items: DemoItem[];
}

const COLLECTION_EDITOR_REACTIVE_HTML_DATA = `
  <form [formGroup]="form">

    <button type="button" mat-stroked-button (click)="patchSample()">form.patchValue(...)</button>
    <button type="button" mat-stroked-button (click)="resetValue()">form.reset(...)</button>

    <o-collection-editor attr="sections" formControlName="sections" group-keys="id" item-keys="id"
      [create-group]="createGroup" [create-item]="createItem"
      [min-groups]="2"
      title="Questionnaire sections" group-label="Section" items-label="Questions"
      add-group-text="Add section" add-item-text="Add question" group-title-column="name"
      confirm-remove-group-message="Remove this section and all its questions?"
      confirm-remove-item-message=""
      (onGroupAdded)="onGroupAdded($event)" (onGroupRemoved)="onGroupRemoved($event)"
      (onGroupMoved)="onGroupMoved($event)">

      <!-- The projected controls are NOT part of the reactive form: they edit the
           group / item object in place and tell the editor with notifyChange(), which
           is what pushes a new value onto the "sections" control. Hence
           ngModelOptions="{ standalone: true }": without it Angular would try to
           register these ngModel controls in the parent formGroup and throw. -->
      <ng-template oCollectionGroupFields let-group let-index="index" let-invalid="invalid"
        let-notifyChange="notifyChange">
        <!-- Fixed attr is safe with no <o-form>; inside one it must be
             unique per row: [attr]="'sectionName_' + key" -->
        <o-text-input attr="sectionName" label="Section name" float-label="always" required="yes"
          [ngModel]="group.name" [ngModelOptions]="{ standalone: true }"
          (ngModelChange)="group.name = $event; notifyChange()">
        </o-text-input>
        @if (invalid) {
          <span class="reactive-hint">Section {{ index + 1 }} has fewer than minItemsPerGroup questions, so the whole control is invalid.</span>
        }
      </ng-template>

      <ng-template oCollectionItem let-item let-notifyChange="notifyChange">
        <o-text-input attr="questionText" label="Question" float-label="always" required="yes"
          [ngModel]="item.text" [ngModelOptions]="{ standalone: true }"
          (ngModelChange)="item.text = $event; notifyChange()">
        </o-text-input>
      </ng-template>

    </o-collection-editor>

    <!-- The editor provides NG_VALIDATORS, so its structural errors (minGroups /
         minItemsPerGroup) land on the control bound with formControlName. Field
         content (a blank section name or question) is validated by each
         o-text-input's own \`required\`, shown independently of this control. -->
    <span>form.valid: {{ form.valid }}</span>
    <span>sections.status: {{ form.get('sections')?.status }}</span>
    <pre>{{ form.get('sections')?.errors | json }}</pre>
    <pre>{{ form.value | json }}</pre>

  </form>

  <mat-list>
    @for (event of events; track $index) {
      <mat-list-item>{{ event }}</mat-list-item>
    }
  </mat-list>
`;

const COLLECTION_EDITOR_REACTIVE_TS_DATA = `
  interface DemoItem {
    id?: string;
    text: string;
  }

  interface DemoGroup {
    id?: string;
    name: string;
    items: DemoItem[];
  }

  @Component({
    selector: 'collection-editor-reactive',
    templateUrl: './collection-editor-reactive.component.html',
    styleUrls: ['./collection-editor-reactive.component.scss']
  })
  export class CollectionEditorReactiveComponent {

    /** ReactiveFormsModule is imported by the parent module. */
    form = new FormGroup({
      sections: new FormControl<DemoGroup[]>([])
    });

    events: string[] = [];

    /** Without create-group / create-item the add buttons stay disabled. */
    createGroup = (index: number): DemoGroup => ({ name: '', items: [{ text: '' }] });
    createItem = (): DemoItem => ({ text: '' });

    /** Value in: the editor rebuilds its rows from whatever the control receives. */
    patchSample(): void {
      this.form.patchValue({
        sections: [
          {
            id: 's1', name: 'Onboarding', items: [
              { id: 'q1', text: 'What is your full name?' },
              { id: 'q2', text: 'Which team do you join?' }
            ]
          },
          { id: 's2', name: 'Feedback', items: [{ id: 'q3', text: 'How was the setup process?' }] }
        ]
      });
      this.log('form.patchValue(...) :: 2 sections written into the control');
    }

    resetValue(): void {
      this.form.reset({ sections: [] });
      this.log('form.reset(...) :: the control is empty and invalid again (minGroups)');
    }

    onGroupAdded(event: OCollectionGroupEvent<DemoGroup>): void {
      this.log(\`onGroupAdded :: index \${event.index}\`);
    }

    onGroupRemoved(event: OCollectionGroupEvent<DemoGroup>): void {
      this.log(\`onGroupRemoved :: "\${event.group.name || '(unnamed)'}" at index \${event.index}\`);
    }

    onGroupMoved(event: OCollectionGroupMovedEvent<DemoGroup>): void {
      this.log(\`onGroupMoved :: \${event.previousIndex} -> \${event.currentIndex}\`);
    }

    clearLog(): void {
      this.events = [];
    }

    private log(message: string): void {
      this.events = [\`\${new Date().toLocaleTimeString()} :: \${message}\`, ...this.events].slice(0, 20);
    }

  }
`;

@Component({
  selector: 'collection-editor-reactive',
  templateUrl: './collection-editor-reactive.component.html',
  styleUrls: ['./collection-editor-reactive.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.collection-editor-reactive]': 'true'
  }
})
export class CollectionEditorReactiveComponent {

  files = {
    html: {
      data: COLLECTION_EDITOR_REACTIVE_HTML_DATA
    },
    typescript: {
      data: COLLECTION_EDITOR_REACTIVE_TS_DATA
    }
  };

  /**
   * Plain Angular reactive form. ReactiveFormsModule is imported by the parent
   * module (this component is not standalone).
   */
  form = new FormGroup({
    sections: new FormControl<DemoGroup[]>([])
  });

  /** On-screen log of the editor outputs. */
  events: string[] = [];

  /** Without create-group / create-item the add buttons stay disabled. */
  createGroup = (index: number): DemoGroup => ({ name: '', items: [{ text: '' }] });
  createItem = (): DemoItem => ({ text: '' });

  /** Value in: the editor rebuilds its rows from whatever the control receives. */
  patchSample(): void {
    this.form.patchValue({
      sections: [
        {
          id: 's1', name: 'Onboarding', items: [
            { id: 'q1', text: 'What is your full name?' },
            { id: 'q2', text: 'Which team do you join?' }
          ]
        },
        { id: 's2', name: 'Feedback', items: [{ id: 'q3', text: 'How was the setup process?' }] }
      ]
    });
    this.log('form.patchValue(...) :: 2 sections written into the control');
  }

  resetValue(): void {
    this.form.reset({ sections: [] });
    this.log('form.reset(...) :: the control is empty and invalid again (minGroups)');
  }

  onGroupAdded(event: OCollectionGroupEvent<DemoGroup>): void {
    this.log(`onGroupAdded :: index ${event.index}`);
  }

  onGroupRemoved(event: OCollectionGroupEvent<DemoGroup>): void {
    this.log(`onGroupRemoved :: "${event.group.name || '(unnamed)'}" at index ${event.index}`);
  }

  onGroupMoved(event: OCollectionGroupMovedEvent<DemoGroup>): void {
    this.log(`onGroupMoved :: ${event.previousIndex} -> ${event.currentIndex}`);
  }

  clearLog(): void {
    this.events = [];
  }

  private log(message: string): void {
    this.events = [`${new Date().toLocaleTimeString()} :: ${message}`, ...this.events].slice(0, 20);
  }

}
