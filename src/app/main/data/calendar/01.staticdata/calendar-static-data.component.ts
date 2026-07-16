import { Component, OnInit, ViewEncapsulation } from '@angular/core';

const CALENDAR_HTML_DATA = `
  <o-calendar attr="calendarStaticData" [static-data]="staticData" columns="id;title;code;start;end;allDay" keys="id"
    start-column="start" end-column="end" title-column="title" description-column="code" all-day-column="allDay"
    view="month" (onEventClick)="onEventClick($event)" (onDayClick)="onDayClick($event)">
  </o-calendar>
`;

const CALENDAR_TS_DATA = `
  @Component({
    selector: 'calendar-static-data',
    templateUrl: './calendar-static-data.component.html',
    styleUrls: ['./calendar-static-data.component.scss']
  })
  export class CalendarStaticDataComponent implements OnInit {

    staticData: any[] = [];

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
      alert('Event: ' + evt.event.title);
    }

    onDayClick(evt: any): void {
      console.log('[o-calendar] day click', evt);
    }

  }
`;

@Component({
  selector: 'calendar-static-data',
  templateUrl: './calendar-static-data.component.html',
  styleUrls: ['./calendar-static-data.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.calendar-static-data]': 'true'
  }
})
export class CalendarStaticDataComponent implements OnInit {

  files = {
    html: {
      data: CALENDAR_HTML_DATA
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
      { id: 1, title: 'Kick-off meeting', code: 'MT-001', start: at(3, 9), end: at(3, 10), allDay: false },
      { id: 2, title: 'Code review', code: 'CR-208', start: at(3, 11), end: at(3, 12), allDay: false },
      { id: 3, title: 'Sprint planning', code: 'SP-014', start: at(6, 9), end: at(6, 11), allDay: false },
      { id: 4, title: 'Company holiday', code: 'HR-000', start: at(8), allDay: true },
      { id: 5, title: 'UX workshop', code: 'WS-032', start: at(14, 12), end: at(14, 13), allDay: false },
      // A day with more events than fit in a month cell to showcase the "+N more" link.
      { id: 6, title: 'Daily stand-up', code: 'DS-101', start: at(17, 9), end: at(17, 10), allDay: false },
      { id: 7, title: 'Design review', code: 'DR-045', start: at(17, 11), end: at(17, 12), allDay: false },
      { id: 8, title: 'Client demo', code: 'CD-077', start: at(17, 13), end: at(17, 14), allDay: false },
      { id: 9, title: 'Retrospective', code: 'RT-050', start: at(22, 16), end: at(22, 17), allDay: false }
    ];
  }

  onEventClick(evt: any): void {
    alert('Event: ' + evt.event.title);
  }

  onDayClick(evt: any): void {
    console.log('[o-calendar] day click', evt);
  }

}
