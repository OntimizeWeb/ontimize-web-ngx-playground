import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { OCalendarView } from 'ontimize-web-ngx-extra-components';

const CALENDAR_HTML_DATA = `
  <o-calendar attr="calendarDynamic" [static-data]="staticData" columns="id;title;code;start;end;allDay" keys="id"
    start-column="start" end-column="end" title-column="title" description-column="code" all-day-column="allDay"{title}
    view="{view}" views="{views}" week-starts-on="{weekStartsOn}" week-header-day-format="{weekHeaderDayFormat}"
    show-toolbar="{showToolbar}" show-tooltip="{showTooltip}" show-hours="{showHours}" show-weekends="{showWeekends}"
    max-events-per-cell="{maxEventsPerCell}" locale="{locale}">
  </o-calendar>
`;

const CALENDAR_TS_DATA = `
  @Component({
    selector: 'calendar-dynamic',
    templateUrl: './calendar-dynamic.component.html',
    styleUrls: ['./calendar-dynamic.component.scss']
  })
  export class CalendarDynamicComponent implements OnInit {

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

  }
`;

@Component({
  selector: 'calendar-dynamic',
  templateUrl: './calendar-dynamic.component.html',
  styleUrls: ['./calendar-dynamic.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.calendar-dynamic]': 'true'
  }
})
export class CalendarDynamicComponent implements OnInit {

  html: string;

  files = {
    typescript: {
      data: CALENDAR_TS_DATA
    }
  };

  staticData: any[] = [];

  readonly viewOptions: OCalendarView[] = ['month', 'week', 'day'];
  readonly localeOptions: string[] = ['en', 'es', 'fr', 'de'];
  readonly weekHeaderFormatOptions: string[] = ['D', 'MMM D'];

  view: OCalendarView = 'month';
  views: OCalendarView[] = ['month', 'week', 'day'];
  weekStartsOn: number = 1;
  weekHeaderDayFormat: string = 'D';
  showToolbar: boolean = true;
  title: string = '';
  showTooltip: boolean = true;
  showHours: boolean = true;
  showWeekends: boolean = true;
  maxEventsPerCell: number = 3;
  locale: string = 'en';

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
    this.refreshHtml();
  }

  onViewChange(view: OCalendarView): void {
    this.view = view;
    this.refreshHtml();
  }

  onToggleView(view: OCalendarView, checked: boolean): void {
    const enabled = new Set(this.views);
    if (checked) {
      enabled.add(view);
    } else {
      enabled.delete(view);
    }
    const next = this.viewOptions.filter(v => enabled.has(v));
    if (!next.length) {
      return;
    }
    this.views = next;
    if (next.indexOf(this.view) === -1) {
      this.view = next[0];
    }
    this.refreshHtml();
  }

  onWeekStartsOnChange(value: number): void {
    this.weekStartsOn = value;
    this.refreshHtml();
  }

  onWeekHeaderFormatChange(value: string): void {
    this.weekHeaderDayFormat = value;
    this.refreshHtml();
  }

  onTitleChange(value: string): void {
    this.title = value;
    this.refreshHtml();
  }

  onShowTooltipChange(checked: boolean): void {
    this.showTooltip = checked;
    this.refreshHtml();
  }

  onShowHoursChange(checked: boolean): void {
    this.showHours = checked;
    this.refreshHtml();
  }

  onShowWeekendsChange(checked: boolean): void {
    this.showWeekends = checked;
    this.refreshHtml();
  }

  onShowToolbarChange(checked: boolean): void {
    this.showToolbar = checked;
    this.refreshHtml();
  }

  onMaxEventsChange(value: number): void {
    this.maxEventsPerCell = value;
    this.refreshHtml();
  }

  onLocaleChange(value: string): void {
    this.locale = value;
    this.refreshHtml();
  }

  private refreshHtml(): void {
    this.html = CALENDAR_HTML_DATA
      .replace('{title}', this.title ? ' title="' + this.title + '"' : '')
      .replace('{view}', this.view)
      .replace('{views}', this.views.join(';'))
      .replace('{weekStartsOn}', String(this.weekStartsOn))
      .replace('{weekHeaderDayFormat}', this.weekHeaderDayFormat)
      .replace('{showToolbar}', this.showToolbar ? 'yes' : 'no')
      .replace('{showTooltip}', this.showTooltip ? 'yes' : 'no')
      .replace('{showHours}', this.showHours ? 'yes' : 'no')
      .replace('{showWeekends}', this.showWeekends ? 'yes' : 'no')
      .replace('{maxEventsPerCell}', String(this.maxEventsPerCell))
      .replace('{locale}', this.locale);
  }

}
