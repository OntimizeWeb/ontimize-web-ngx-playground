import { Component, ViewEncapsulation } from '@angular/core';

const CALENDAR_HTML_DATA = `
  <o-calendar attr="calendarService" service-type="events" entity="events" columns="id;title;code;start;end;allDay;color"
    keys="id" start-column="start" end-column="end" title-column="title" description-column="code" all-day-column="allDay"
    color-column="color" view="month" views="month;week;day" week-starts-on="1"
    [tooltip-function]="getEventTooltip" (onEventClick)="onEventClick($event)">
  </o-calendar>
`;

const CALENDAR_TS_DATA = `
  @Component({
    selector: 'calendar-service',
    templateUrl: './calendar-service.component.html',
    styleUrls: ['./calendar-service.component.scss']
  })
  export class CalendarServiceComponent {

    onEventClick(evt: any): void {
      alert('Event: ' + evt.event.title);
    }

    // tooltip-function: lighter-weight tooltip text override, without a full
    // oCalendarTooltip template. Same convention as o-table-column's own
    // tooltip-function (receives the source row, returns the tooltip text).
    getEventTooltip = (row: any): string => {
      return row.title + ' — ' + row.code;
    };

  }

  // The 'events' service type is registered in the module providers:
  @NgModule({
    ...
    providers: [
      { provide: 'events', useValue: CalendarEventsService }
    ]
  })
  export class CalendarModule { }
`;

const CALENDAR_SERVICE_DATA = `
  @Injectable()
  export class CalendarEventsService extends OntimizeService {

    private readonly sqlTypes = { id: 4, title: 12, code: 12, start: 93, end: 93, allDay: 16, color: 12 };

    constructor(protected injector: Injector) {
      super(injector);
    }

    public query(kv: any = {}, av: string[] = [], entity?: string): Observable<any> {
      const rows = this.buildRows();
      return of(new OntimizeServiceResponse(0, rows, '', this.sqlTypes, 0, rows.length));
    }

    private buildRows(): any[] {
      const now = new Date();
      const y = now.getFullYear();
      const m = now.getMonth();
      const at = (monthOffset: number, day: number, hour = 9) => new Date(y, m + monthOffset, day, hour, 0, 0).toISOString();

      return [
        { id: 1, title: 'Sprint planning', code: 'SP-101', start: at(0, 2, 9), end: at(0, 2, 11), allDay: false, color: '#3f51b5' },
        { id: 2, title: 'Code review', code: 'CR-208', start: at(0, 4, 11), end: at(0, 4, 12), allDay: false, color: '#3f51b5' },
        { id: 3, title: 'Version release', code: 'RL-180', start: at(0, 10, 10), end: at(0, 10, 11), allDay: false, color: '#e91e63' },
        { id: 4, title: 'Angular workshop', code: 'TR-021', start: at(0, 12, 15), end: at(0, 12, 17), allDay: false, color: '#009688' },
        { id: 5, title: 'Company holiday', code: 'HR-000', start: at(0, 16, 0), allDay: true, color: '#ff9800' },
        { id: 6, title: 'Sprint review', code: 'SR-101', start: at(0, 19, 9), end: at(0, 19, 10), allDay: false, color: '#3f51b5' },
        { id: 7, title: 'Retrospective', code: 'RT-101', start: at(0, 19, 11), end: at(0, 19, 12), allDay: false, color: '#3f51b5' },
        { id: 8, title: 'Client demo', code: 'CD-077', start: at(0, 19, 13), end: at(0, 19, 14), allDay: false, color: '#e91e63' },
        { id: 9, title: 'UX workshop', code: 'TR-032', start: at(0, 24, 12), end: at(0, 24, 13), allDay: false, color: '#009688' },
        { id: 10, title: 'Quarterly planning', code: 'QP-004', start: at(1, 3, 9), end: at(1, 3, 12), allDay: false, color: '#3f51b5' },
        { id: 11, title: 'Security audit', code: 'SA-009', start: at(1, 8, 9), end: at(1, 8, 17), allDay: false, color: '#e91e63' },
        { id: 12, title: 'Onboarding session', code: 'HR-115', start: at(-1, 26, 10), end: at(-1, 26, 12), allDay: false, color: '#009688' }
      ];
    }

  }
`;

@Component({
  selector: 'calendar-service',
  templateUrl: './calendar-service.component.html',
  styleUrls: ['./calendar-service.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.calendar-service]': 'true'
  }
})
export class CalendarServiceComponent {

  files = {
    html: {
      data: CALENDAR_HTML_DATA
    },
    typescript: {
      data: CALENDAR_TS_DATA
    },
    files: [
      { label: 'SERVICE', data: CALENDAR_SERVICE_DATA, type: 'typescript' }
    ]
  };

  onEventClick(evt: any): void {
    alert('Event: ' + evt.event.title);
  }

  // tooltip-function: lighter-weight tooltip text override, without a full
  // oCalendarTooltip template. Same convention as o-table-column's own
  // tooltip-function (receives the source row, returns the tooltip text).
  getEventTooltip = (row: any): string => {
    return row.title + ' — ' + row.code;
  };

}
