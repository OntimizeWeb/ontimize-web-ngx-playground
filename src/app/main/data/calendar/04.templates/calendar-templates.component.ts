import { Component, OnInit, ViewEncapsulation } from '@angular/core';

const CALENDAR_HTML_DATA = `
  <o-calendar attr="calendarTemplates" [static-data]="staticData" columns="id;title;code;start;end;allDay;icon" keys="id"
    start-column="start" end-column="end" title-column="title" description-column="code" all-day-column="allDay"
    view="month">

    <!-- Custom event: replaces the default event pill in every view. -->
    <ng-template oCalendarEvent let-event let-row="row">
      <div class="demo-event-chip">
        <mat-icon>{{ row.icon || 'event' }}</mat-icon>
        <span class="demo-event-chip-title">{{ event.title }}</span>
      </div>
    </ng-template>

    <!-- Custom tooltip: shown on event hover while show-tooltip is enabled. -->
    <ng-template oCalendarTooltip let-event let-row="row">
      <div class="demo-event-tooltip">
        <span class="demo-event-tooltip-title">{{ event.title }}</span>
        <span class="demo-event-tooltip-line">{{ row.code }}</span>
        @if (!event.allDay) {
          <span class="demo-event-tooltip-line">
            {{ event.start | date:'HH:mm' }}
            @if (event.end) {
              - {{ event.end | date:'HH:mm' }}
            }
          </span>
        }
      </div>
    </ng-template>

  </o-calendar>
`;

const CALENDAR_SCSS_DATA = `
  .demo-event-chip {
    display: flex;
    align-items: center;
    gap: 4px;
    min-width: 0;
    padding: 2px 6px;
    border-radius: 4px;
    background: var(--mat-sys-secondary-container);
    color: var(--mat-sys-on-secondary-container);
    font-size: 0.75rem;

    mat-icon {
      font-size: 14px;
      width: 14px;
      height: 14px;
      line-height: 14px;
    }

    .demo-event-chip-title {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }

  .demo-event-tooltip {
    display: flex;
    flex-direction: column;
    gap: 2px;

    .demo-event-tooltip-title {
      font-weight: 600;
    }

    .demo-event-tooltip-line {
      opacity: 0.8;
    }
  }
`;

const CALENDAR_TS_DATA = `
  @Component({
    selector: 'calendar-templates',
    templateUrl: './calendar-templates.component.html',
    styleUrls: ['./calendar-templates.component.scss']
  })
  export class CalendarTemplatesComponent implements OnInit {

    staticData: any[] = [];

    ngOnInit(): void {
      const now = new Date();
      const y = now.getFullYear();
      const m = now.getMonth();
      const at = (day: number, hour = 9) => new Date(y, m, day, hour, 0, 0);

      this.staticData = [
        { id: 1, title: 'Kick-off meeting', code: 'MT-001', start: at(3, 9), end: at(3, 10), allDay: false, icon: 'groups' },
        { id: 2, title: 'Code review', code: 'CR-208', start: at(3, 11), end: at(3, 12), allDay: false, icon: 'rate_review' },
        { id: 3, title: 'Sprint planning', code: 'SP-014', start: at(6, 9), end: at(6, 11), allDay: false, icon: 'checklist' },
        { id: 4, title: 'Company holiday', code: 'HR-000', start: at(8), allDay: true, icon: 'celebration' },
        { id: 5, title: 'UX workshop', code: 'WS-032', start: at(14, 12), end: at(14, 13), allDay: false, icon: 'design_services' },
        { id: 6, title: 'Daily stand-up', code: 'DS-101', start: at(17, 9), end: at(17, 10), allDay: false, icon: 'schedule' },
        { id: 7, title: 'Design review', code: 'DR-045', start: at(17, 11), end: at(17, 12), allDay: false, icon: 'draw' },
        { id: 8, title: 'Client demo', code: 'CD-077', start: at(17, 13), end: at(17, 14), allDay: false, icon: 'slideshow' },
        { id: 9, title: 'Retrospective', code: 'RT-050', start: at(22, 16), end: at(22, 17), allDay: false, icon: 'history' }
      ];
    }

  }
`;

@Component({
  selector: 'calendar-templates',
  templateUrl: './calendar-templates.component.html',
  styleUrls: ['./calendar-templates.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.calendar-templates]': 'true'
  }
})
export class CalendarTemplatesComponent implements OnInit {

  files = {
    html: {
      data: CALENDAR_HTML_DATA
    },
    scss: {
      data: CALENDAR_SCSS_DATA
    },
    typescript: {
      data: CALENDAR_TS_DATA
    }
  };

  staticData: any[] = [];

  ngOnInit(): void {
    const now = new Date();
    const y = now.getFullYear();
    const m = now.getMonth();
    const at = (day: number, hour = 9) => new Date(y, m, day, hour, 0, 0);

    this.staticData = [
      { id: 1, title: 'Kick-off meeting', code: 'MT-001', start: at(3, 9), end: at(3, 10), allDay: false, icon: 'groups' },
      { id: 2, title: 'Code review', code: 'CR-208', start: at(3, 11), end: at(3, 12), allDay: false, icon: 'rate_review' },
      { id: 3, title: 'Sprint planning', code: 'SP-014', start: at(6, 9), end: at(6, 11), allDay: false, icon: 'checklist' },
      { id: 4, title: 'Company holiday', code: 'HR-000', start: at(8), allDay: true, icon: 'celebration' },
      { id: 5, title: 'UX workshop', code: 'WS-032', start: at(14, 12), end: at(14, 13), allDay: false, icon: 'design_services' },
      { id: 6, title: 'Daily stand-up', code: 'DS-101', start: at(17, 9), end: at(17, 10), allDay: false, icon: 'schedule' },
      { id: 7, title: 'Design review', code: 'DR-045', start: at(17, 11), end: at(17, 12), allDay: false, icon: 'draw' },
      { id: 8, title: 'Client demo', code: 'CD-077', start: at(17, 13), end: at(17, 14), allDay: false, icon: 'slideshow' },
      { id: 9, title: 'Retrospective', code: 'RT-050', start: at(22, 16), end: at(22, 17), allDay: false, icon: 'history' }
    ];
  }

}
