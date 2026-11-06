import { Component, ViewEncapsulation } from '@angular/core';

type Priority = 'low' | 'medium' | 'high';

interface DemoTask {
  id?: string;
  text: string;
  priority: Priority;
  done: boolean;
}

interface DemoPhase {
  id?: string;
  name: string;
  tasks: DemoTask[];
}

const COLLECTION_EDITOR_NATIVE_CONTROLS_HTML_DATA = `
  <!--
    None of the projected fields below is an Ontimize input: a plain <input>/<textarea>
    for the text fields, mat-select and mat-checkbox (Angular Material, no o- wrapper)
    for the rest. o-collection-editor only projects a template and calls notifyChange()
    after it — it has no idea, and no opinion, about what renders inside.
  -->
  <o-collection-editor attr="phases" [(ngModel)]="phases"
    [create-group]="createPhase" [create-item]="createTask"
    group-items-column="tasks" group-title-column="name"
    group-label="Phase" items-label="Tasks" item-title-column="text"
    add-group-text="Add a phase" add-item-text="Add a task"
    empty-groups-text="No phases yet." empty-items-text="This phase has no tasks yet.">

    <ng-template oCollectionGroupFields let-group let-key="key" let-notifyChange="notifyChange">
      <!-- Plain native <input>, no o-text-input. Standalone because there is no
           surrounding <form>/ngForm for NgModel to register into. -->
      <input class="native-field" [name]="'phaseName_' + key" placeholder="Phase name"
        [(ngModel)]="group.name" [ngModelOptions]="{ standalone: true }" (ngModelChange)="notifyChange()" />
    </ng-template>

    <ng-template oCollectionItem let-item let-key="key" let-notifyChange="notifyChange">
      <div class="native-task-row">
        <textarea class="native-field" rows="1" [name]="'taskText_' + key" placeholder="Task"
          [(ngModel)]="item.text" [ngModelOptions]="{ standalone: true }" (ngModelChange)="notifyChange()"></textarea>

        <mat-form-field appearance="outline" class="native-priority">
          <mat-label>Priority</mat-label>
          <mat-select [(ngModel)]="item.priority" [ngModelOptions]="{ standalone: true }" (selectionChange)="notifyChange()">
            <mat-option value="low">Low</mat-option>
            <mat-option value="medium">Medium</mat-option>
            <mat-option value="high">High</mat-option>
          </mat-select>
        </mat-form-field>

        <mat-checkbox [(ngModel)]="item.done" [ngModelOptions]="{ standalone: true }" (change)="notifyChange()">
          Done
        </mat-checkbox>
      </div>
    </ng-template>

  </o-collection-editor>

  <pre>{{ phases | json }}</pre>
`;

const COLLECTION_EDITOR_NATIVE_CONTROLS_TS_DATA = `
  type Priority = 'low' | 'medium' | 'high';
  interface DemoTask { id?: string; text: string; priority: Priority; done: boolean; }
  interface DemoPhase { id?: string; name: string; tasks: DemoTask[]; }

  @Component({
    selector: 'collection-editor-native-controls',
    templateUrl: './collection-editor-native-controls.component.html',
    styleUrls: ['./collection-editor-native-controls.component.scss']
  })
  export class CollectionEditorNativeControlsComponent {

    phases: DemoPhase[] = [
      {
        id: 'p1', name: 'Kickoff',
        tasks: [
          { id: 't1', text: 'Confirm scope with the client', priority: 'high', done: false },
          { id: 't2', text: 'Assign the team', priority: 'medium', done: true }
        ]
      }
    ];

    // Without create-group / create-item the add buttons stay disabled.
    createPhase = (index: number): DemoPhase => ({ name: '', tasks: [this.newTask()] });
    createTask = (): DemoTask => this.newTask();

    private newTask(): DemoTask {
      return { text: '', priority: 'medium', done: false };
    }
  }
`;

@Component({
  selector: 'collection-editor-native-controls',
  templateUrl: './collection-editor-native-controls.component.html',
  styleUrls: ['./collection-editor-native-controls.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.collection-editor-native-controls]': 'true'
  }
})
export class CollectionEditorNativeControlsComponent {

  files = {
    html: {
      data: COLLECTION_EDITOR_NATIVE_CONTROLS_HTML_DATA
    },
    typescript: {
      data: COLLECTION_EDITOR_NATIVE_CONTROLS_TS_DATA
    }
  };

  phases: DemoPhase[] = [
    {
      id: 'p1', name: 'Kickoff',
      tasks: [
        { id: 't1', text: 'Confirm scope with the client', priority: 'high', done: false },
        { id: 't2', text: 'Assign the team', priority: 'medium', done: true }
      ]
    }
  ];

  // Without create-group / create-item the add buttons stay disabled.
  createPhase = (index: number): DemoPhase => ({ name: '', tasks: [this.newTask()] });
  createTask = (): DemoTask => this.newTask();

  private newTask(): DemoTask {
    return { text: '', priority: 'medium', done: false };
  }
}
