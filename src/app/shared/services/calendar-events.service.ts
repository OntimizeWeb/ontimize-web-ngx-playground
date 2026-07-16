import { Injectable, Injector } from '@angular/core';
import { FilterExpressionUtils, Observable, OntimizeService, OntimizeServiceResponse } from 'ontimize-web-ngx';
import { of } from 'rxjs';

/**
 * Mock backed by o-calendar's own query range: it reads the start/end filter
 * o-calendar sends for the active view (month/week/day) and regenerates its
 * rows around that range, instead of returning a fixed list. Navigating the
 * calendar re-queries with a different range and gets different rows back,
 * demonstrating that the view range is actually reaching the service.
 */
@Injectable()
export class CalendarEventsService extends OntimizeService {

  private readonly sqlTypes = {
    id: 4,
    title: 12,
    code: 12,
    start: 93,
    end: 93,
    allDay: 16,
    color: 12
  };

  constructor(protected injector: Injector) {
    super(injector);
  }

  public query(
    kv: any = {}, av: string[] = [], entity?: string,
    sqltypes: any = {}, offset?: number, pagesize?: number,
    orderby?: Array<{ column: string; asc: boolean }>
  ): Observable<any> {
    const range = this.extractDateRange(kv);
    // eslint-disable-next-line no-console
    console.log('[CalendarEventsService] query range', range);
    const rows = this.buildRows(range);
    console.log('[CalendarEventsService] returning rows', rows);
    return of(new OntimizeServiceResponse(
      0,
      rows,
      '',
      this.sqlTypes,
      0,
      rows.length
    ));
  }

  /** Pulls the start/end boundaries o-calendar builds from `start-column`/`end-column`. */
  private extractDateRange(kv: any): { start?: Date; end?: Date } {
    const expr = kv?.[FilterExpressionUtils.FILTER_EXPRESSION_KEY];
    const range: { start?: Date; end?: Date } = {};
    const visit = (node: any): void => {
      if (!node || typeof node !== 'object') {
        return;
      }
      if (node.op === FilterExpressionUtils.OP_AND || node.op === FilterExpressionUtils.OP_OR) {
        visit(node.lop);
        visit(node.rop);
        return;
      }
      if (node.lop === 'start' && node.op === FilterExpressionUtils.OP_LESS_EQUAL) {
        range.end = new Date(node.rop);
      } else if (node.lop === 'start' && node.op === FilterExpressionUtils.OP_MORE_EQUAL) {
        range.start = new Date(node.rop);
      } else if (node.lop === 'end' && node.op === FilterExpressionUtils.OP_MORE_EQUAL) {
        range.start = new Date(node.rop);
      }
    };
    visit(expr);
    return range;
  }

  /** Events are regenerated around the queried range so navigating shows different rows. */
  private buildRows(range: { start?: Date; end?: Date }): any[] {
    const anchor = range.start && range.end
      ? new Date((range.start.getTime() + range.end.getTime()) / 2)
      : new Date();
    const y = anchor.getFullYear();
    const m = anchor.getMonth();
    const at = (day: number, hour = 9) => new Date(y, m, day, hour, 0, 0).toISOString();

    return [
      { id: 1, title: 'Sprint planning', code: 'SP-101', start: at(2, 9), end: at(2, 11), allDay: false, color: '#3f51b5' },
      { id: 2, title: 'Code review', code: 'CR-208', start: at(4, 11), end: at(4, 12), allDay: false, color: '#3f51b5' },
      { id: 3, title: 'Version release', code: 'RL-180', start: at(10, 10), end: at(10, 11), allDay: false, color: '#e91e63' },
      { id: 4, title: 'Angular workshop', code: 'TR-021', start: at(12, 15), end: at(12, 17), allDay: false, color: '#009688' },
      { id: 5, title: 'Company holiday', code: 'HR-000', start: at(16, 0), allDay: true, color: '#ff9800' },
      { id: 6, title: 'Sprint review', code: 'SR-101', start: at(19, 9), end: at(19, 10), allDay: false, color: '#3f51b5' },
      { id: 7, title: 'Retrospective', code: 'RT-101', start: at(19, 11), end: at(19, 12), allDay: false, color: '#3f51b5' },
      { id: 8, title: 'Client demo', code: 'CD-077', start: at(19, 13), end: at(19, 14), allDay: false, color: '#e91e63' },
      { id: 9, title: 'UX workshop', code: 'TR-032', start: at(24, 12), end: at(24, 13), allDay: false, color: '#009688' },
      { id: 10, title: 'Quarterly planning', code: 'QP-004', start: at(26, 9), end: at(26, 12), allDay: false, color: '#3f51b5' },
      { id: 11, title: 'Security audit', code: 'SA-009', start: at(28, 9), end: at(28, 17), allDay: false, color: '#e91e63' }
    ];
  }

}
