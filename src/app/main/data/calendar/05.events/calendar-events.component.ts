import { Component, OnInit, ViewEncapsulation } from '@angular/core';

class ConsoleLogEvent {
  eventName: string;
  detail: string;
}

const CALENDAR_HTML_DATA = `
  <o-calendar attr="calendarEvents" [static-data]="staticData" columns="id;title;code;start;end;allDay" keys="id"
    start-column="start" end-column="end" title-column="title" description-column="code" all-day-column="allDay"
    view="month" (onEventClick)="onEventClick($event)" (onDayClick)="onDayClick($event)"
    (onViewChange)="onViewChange($event)" (onViewDateChange)="onViewDateChange($event)">
  </o-calendar>

  <mat-toolbar class="playground-toolbar">
    <mat-toolbar-row>
      <span>{{ 'CONSOLE.LOG' | oTranslate }}</span>
      <span class="mat-toolbar-space"></span>
      <button mat-icon-button (click)="clearConsole()">
        <mat-icon>delete</mat-icon>
      </button>
    </mat-toolbar-row>
  </mat-toolbar>
  <mat-list dense class="console">
    @for (log of consoleLog; track log) {
      <mat-list-item>
        Event&nbsp;<b>{{ log.eventName }}</b> :: {{ log.detail }}
        <mat-divider></mat-divider>
      </mat-list-item>
    }
  </mat-list>
`;

const CALENDAR_TS_DATA = `
  @Component({
    selector: 'calendar-events',
    templateUrl: './calendar-events.component.html',
    styleUrls: ['./calendar-events.component.scss']
  })
  export class CalendarEventsComponent implements OnInit {

    staticData: any[] = [];
    consoleLog: ConsoleLogEvent[] = [];

    ngOnInit(): void {
      // ... same static-data as the other examples
    }

    onEventClick(evt: OCalendarEventClick): void {
      this.log('onEventClick', evt.event.title + ' (' + evt.row.code + ')');
    }

    onDayClick(evt: OCalendarDayClick): void {
      this.log('onDayClick', evt.date.toDateString() + ' :: ' + evt.events.length + ' event(s)');
    }

    onViewChange(view: OCalendarView): void {
      this.log('onViewChange', view);
    }

    onViewDateChange(date: Date): void {
      this.log('onViewDateChange', date.toDateString());
    }

    private log(eventName: string, detail: string): void {
      const entry = new ConsoleLogEvent();
      entry.eventName = eventName;
      entry.detail = detail;
      this.consoleLog.unshift(entry);
    }

    clearConsole(): void {
      this.consoleLog = [];
    }

  }
`;

@Component({
  selector: 'calendar-events',
  templateUrl: './calendar-events.component.html',
  styleUrls: ['./calendar-events.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.calendar-events]': 'true'
  }
})
export class CalendarEventsComponent implements OnInit {

  files = {
    html: {
      data: CALENDAR_HTML_DATA
    },
    typescript: {
      data: CALENDAR_TS_DATA
    }
  };

  staticData: any[] = [];
  consoleLog: ConsoleLogEvent[] = [];

  ngOnInit(): void {
    const now = new Date();
    const y = now.getFullYear();
    const m = now.getMonth();
    const at = (day: number, hour = 9) => new Date(y, m, day, hour, 0, 0);

    this.staticData = [
      { id: 1, title: 'Kick-off meeting', code: 'MT-001', start: at(3, 9), end: at(3, 10), allDay: false },
      { id: 2, title: 'Code review', code: 'CR-208', start: at(3, 11), end: at(3, 12), allDay: false },
      { id: 3, title: 'Sprint planning', code: 'SP-014', start: at(6, 9), end: at(6, 11), allDay: false },
      { id: 4, title: 'Company holiday', code: 'HR-000', start: at(8), allDay: true },
      { id: 5, title: 'UX workshop', code: 'WS-032', start: at(14, 12), end: at(14, 13), allDay: false },
      { id: 6, title: 'Daily stand-up', code: 'DS-101', start: at(17, 9), end: at(17, 10), allDay: false },
      { id: 7, title: 'Design review', code: 'DR-045', start: at(17, 11), end: at(17, 12), allDay: false },
      { id: 8, title: 'Client demo', code: 'CD-077', start: at(17, 13), end: at(17, 14), allDay: false },
      { id: 9, title: 'Retrospective', code: 'RT-050', start: at(22, 16), end: at(22, 17), allDay: false }
    ];
  }

  onEventClick(evt: any): void {
    this.log('onEventClick', evt.event.title + ' (' + evt.row.code + ')');
  }

  onDayClick(evt: any): void {
    this.log('onDayClick', evt.date.toDateString() + ' :: ' + evt.events.length + ' event(s)');
  }

  onViewChange(view: any): void {
    this.log('onViewChange', view);
  }

  onViewDateChange(date: Date): void {
    this.log('onViewDateChange', date.toDateString());
  }

  private log(eventName: string, detail: string): void {
    const entry = new ConsoleLogEvent();
    entry.eventName = eventName;
    entry.detail = detail;
    this.consoleLog.unshift(entry);
  }

  clearConsole(): void {
    this.consoleLog = [];
  }

}
