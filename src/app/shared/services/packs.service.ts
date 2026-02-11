
import { Injectable, Injector } from '@angular/core';
import { Expression, FilterExpressionUtils, Observable, OntimizeService, OntimizeServiceResponse, Util } from 'ontimize-web-ngx';
import { of } from 'rxjs';

@Injectable()
export class PacksService extends OntimizeService {
  private packsAventura = {
    code: 0,
    message: "",
    data: [
      {
        id: 1,
        name: "Adventure in the Pyrenees",
        location: "Pyrenees, Spain",
        price: 450,
        duration: 5,
        score: 4.7,
        people: 8,
        dateBegin: "2025-05-01",
        dateEnd: "2025-10-15"
      },
      {
        id: 2,
        name: "Extreme Rafting on the White Nile",
        location: "Jinja, Uganda",
        price: 890,
        duration: 7,
        score: 4.9,
        people: 6,
        dateBegin: "2025-06-01",
        dateEnd: "2025-09-30"
      },
      {
        id: 3,
        name: "Expedition to the Sahara Desert",
        location: "Merzouga, Morocco",
        price: 720,
        duration: 6,
        score: 4.6,
        people: 10,
        dateBegin: "2025-03-15",
        dateEnd: "2025-06-30"
      },
      {
        id: 4,
        name: "Diving in the Great Barrier Reef",
        location: "Queensland, Australia",
        price: 1200,
        duration: 8,
        score: 5.0,
        people: 4,
        dateBegin: "2025-04-01",
        dateEnd: "2025-11-30"
      },
      {
        id: 5,
        name: "Kayaking Route through the Norwegian Fjords",
        location: "Bergen, Norway",
        price: 980,
        duration: 7,
        score: 4.8,
        people: 6,
        dateBegin: "2025-05-15",
        dateEnd: "2025-09-15"
      },
      {
        id: 6,
        name: "Trekking the Inca Trail",
        location: "Cusco, Peru",
        price: 650,
        duration: 4,
        score: 4.9,
        people: 12,
        dateBegin: "2025-04-01",
        dateEnd: "2025-10-31"
      },
      {
        id: 7,
        name: "Rock Climbing in El Chaltén",
        location: "Patagonia, Argentina",
        price: 770,
        duration: 6,
        score: 4.5,
        people: 5,
        dateBegin: "2025-11-01",
        dateEnd: "2026-03-31"
      },
      {
        id: 8,
        name: "Photographic Safari in Kenya",
        location: "Masai Mara, Kenya",
        price: 1550,
        duration: 10,
        score: 4.8,
        people: 8,
        dateBegin: "2025-07-01",
        dateEnd: "2025-10-30"
      },
      {
        id: 9,
        name: "Hike through the Amazon Rainforest",
        location: "Manaus, Brazil",
        price: 820,
        duration: 5,
        score: 4.4,
        people: 6,
        dateBegin: "2025-01-10",
        dateEnd: "2025-06-15"
      },
      {
        id: 10,
        name: "Paragliding over the Swiss Alps",
        location: "Interlaken, Switzerland",
        price: 590,
        duration: 3,
        score: 4.9,
        people: 2,
        dateBegin: "2025-04-15",
        dateEnd: "2025-09-30"
      },
      {
        id: 11,
        name: "Canyoning Adventure in Sierra de Guara",
        location: "Huesca, Spain",
        price: 510,
        duration: 4,
        score: 4.7,
        people: 9,
        dateBegin: "2025-04-15",
        dateEnd: "2025-10-20"
      },
      {
        id: 12,
        name: "Cycling Route through Tuscany",
        location: "Florence, Italy",
        price: 740,
        duration: 6,
        score: 4.6,
        people: 10,
        dateBegin: "2025-03-20",
        dateEnd: "2025-11-05"
      },
      {
        id: 13,
        name: "Northern Lights in Lapland",
        location: "Rovaniemi, Finland",
        price: 1350,
        duration: 5,
        score: 4.9,
        people: 8,
        dateBegin: "2025-11-15",
        dateEnd: "2026-03-20"
      },
      {
        id: 14,
        name: "Surf Getaway in Nazaré",
        location: "Nazaré, Portugal",
        price: 620,
        duration: 5,
        score: 4.5,
        people: 7,
        dateBegin: "2025-09-01",
        dateEnd: "2026-02-28"
      },
      {
        id: 15,
        name: "Sailing Voyage through the Greek Islands",
        location: "Cyclades, Greece",
        price: 1100,
        duration: 7,
        score: 4.8,
        people: 6,
        dateBegin: "2025-05-10",
        dateEnd: "2025-10-10"
      },
      {
        id: 16,
        name: "Volcanic Hiking in Iceland",
        location: "Reykjavík, Iceland",
        price: 980,
        duration: 6,
        score: 4.9,
        people: 12,
        dateBegin: "2025-06-01",
        dateEnd: "2025-09-25"
      },
      {
        id: 17,
        name: "Snorkeling and Sea Caves in Yucatán",
        location: "Tulum, Mexico",
        price: 790,
        duration: 5,
        score: 4.7,
        people: 8,
        dateBegin: "2025-02-01",
        dateEnd: "2025-08-31"
      },
      {
        id: 18,
        name: "Ice Climbing in the Tatras",
        location: "Zakopane, Poland",
        price: 860,
        duration: 6,
        score: 4.6,
        people: 6,
        dateBegin: "2025-12-01",
        dateEnd: "2026-03-15"
      },
      {
        id: 19,
        name: "Glacier Camping in Alaska",
        location: "Anchorage, USA",
        price: 1750,
        duration: 9,
        score: 4.8,
        people: 5,
        dateBegin: "2025-06-15",
        dateEnd: "2025-09-10"
      },
      {
        id: 20,
        name: "Waterfall Route in Costa Rica",
        location: "La Fortuna, Costa Rica",
        price: 830,
        duration: 6,
        score: 4.7,
        people: 10,
        dateBegin: "2025-01-20",
        dateEnd: "2025-07-15"
      },

      // Added more in the same locations
      {
        id: 21,
        name: "High-Altitude Trail Run in the Pyrenees",
        location: "Pyrenees, Spain",
        price: 520,
        duration: 4,
        score: 4.6,
        people: 10,
        dateBegin: "2025-06-01",
        dateEnd: "2025-10-05"
      },
      {
        id: 22,
        name: "Source-to-Rapids Rafting on the White Nile",
        location: "Jinja, Uganda",
        price: 940,
        duration: 6,
        score: 4.8,
        people: 8,
        dateBegin: "2025-06-10",
        dateEnd: "2025-09-20"
      },
      {
        id: 23,
        name: "Sahara Dunes & Stargazing Expedition",
        location: "Merzouga, Morocco",
        price: 690,
        duration: 5,
        score: 4.7,
        people: 12,
        dateBegin: "2025-03-25",
        dateEnd: "2025-06-10"
      },
      {
        id: 24,
        name: "Liveaboard Dive Week in the Great Barrier Reef",
        location: "Queensland, Australia",
        price: 1450,
        duration: 7,
        score: 4.9,
        people: 6,
        dateBegin: "2025-05-01",
        dateEnd: "2025-11-15"
      },
      {
        id: 25,
        name: "Sea Kayaking & Waterfalls in the Fjords",
        location: "Bergen, Norway",
        price: 1050,
        duration: 6,
        score: 4.8,
        people: 8,
        dateBegin: "2025-06-01",
        dateEnd: "2025-09-05"
      },
      {
        id: 26,
        name: "Inca Trail Express: 3-Day Challenge",
        location: "Cusco, Peru",
        price: 610,
        duration: 3,
        score: 4.7,
        people: 10,
        dateBegin: "2025-04-10",
        dateEnd: "2025-10-20"
      },
      {
        id: 27,
        name: "Patagonian Granite Climbing Camp",
        location: "Patagonia, Argentina",
        price: 820,
        duration: 7,
        score: 4.6,
        people: 6,
        dateBegin: "2025-11-15",
        dateEnd: "2026-03-20"
      },
      {
        id: 28,
        name: "Big Five Sunrise Safari",
        location: "Masai Mara, Kenya",
        price: 1680,
        duration: 8,
        score: 4.9,
        people: 8,
        dateBegin: "2025-07-10",
        dateEnd: "2025-10-20"
      },
      {
        id: 29,
        name: "Amazon Night Walk & River Survival",
        location: "Manaus, Brazil",
        price: 860,
        duration: 6,
        score: 4.5,
        people: 6,
        dateBegin: "2025-02-01",
        dateEnd: "2025-06-10"
      },
      {
        id: 30,
        name: "Alpine Paragliding & Via Ferrata Combo",
        location: "Interlaken, Switzerland",
        price: 650,
        duration: 4,
        score: 4.8,
        people: 4,
        dateBegin: "2025-05-01",
        dateEnd: "2025-09-15"
      },
      {
        id: 31,
        name: "Canyon Slides & Natural Pools in Sierra de Guara",
        location: "Huesca, Spain",
        price: 540,
        duration: 4,
        score: 4.7,
        people: 10,
        dateBegin: "2025-05-01",
        dateEnd: "2025-10-10"
      },
      {
        id: 32,
        name: "Tuscan Hills Gravel Bike Week",
        location: "Florence, Italy",
        price: 780,
        duration: 7,
        score: 4.7,
        people: 12,
        dateBegin: "2025-04-01",
        dateEnd: "2025-10-25"
      },
      {
        id: 33,
        name: "Aurora Hunt & Snowshoeing Escape",
        location: "Rovaniemi, Finland",
        price: 1420,
        duration: 6,
        score: 4.9,
        people: 8,
        dateBegin: "2025-11-20",
        dateEnd: "2026-03-10"
      },
      {
        id: 34,
        name: "Big Waves & Coastal Hikes in Nazaré",
        location: "Nazaré, Portugal",
        price: 640,
        duration: 5,
        score: 4.6,
        people: 8,
        dateBegin: "2025-09-15",
        dateEnd: "2026-02-15"
      },
      {
        id: 35,
        name: "Cyclades Sailing & Hidden Coves",
        location: "Cyclades, Greece",
        price: 1180,
        duration: 8,
        score: 4.8,
        people: 6,
        dateBegin: "2025-06-01",
        dateEnd: "2025-10-01"
      },
      {
        id: 36,
        name: "Iceland Highlands Trek & Hot Springs",
        location: "Reykjavík, Iceland",
        price: 1090,
        duration: 7,
        score: 4.9,
        people: 10,
        dateBegin: "2025-06-10",
        dateEnd: "2025-09-10"
      },
      {
        id: 37,
        name: "Cenotes, Snorkel & Jungle Trails",
        location: "Tulum, Mexico",
        price: 820,
        duration: 6,
        score: 4.8,
        people: 10,
        dateBegin: "2025-02-15",
        dateEnd: "2025-08-15"
      },
      {
        id: 38,
        name: "Frozen Waterfalls Ice Climbing Camp",
        location: "Zakopane, Poland",
        price: 910,
        duration: 7,
        score: 4.7,
        people: 6,
        dateBegin: "2025-12-10",
        dateEnd: "2026-03-05"
      },
      {
        id: 39,
        name: "Alaskan Glacier Traverse & Basecamp",
        location: "Anchorage, USA",
        price: 1890,
        duration: 10,
        score: 4.9,
        people: 6,
        dateBegin: "2025-06-25",
        dateEnd: "2025-09-01"
      },
      {
        id: 40,
        name: "Volcano Trails & Hot Springs in Arenal",
        location: "La Fortuna, Costa Rica",
        price: 870,
        duration: 6,
        score: 4.8,
        people: 10,
        dateBegin: "2025-02-01",
        dateEnd: "2025-07-01"
      }
    ],

    sqlTypes: {
      "id": 4,
      "name": 12,
      "location": 12,
      "price": 4,
      "duration": 4,
      "score": 6,
      "people": 4,
      "dateBegin": 93,
      "dateEnd": 93
    },
    startRecordIndex: 0,
    totalQueryRecordsNumber: 20
  };

  constructor(protected injector: Injector) {
    super(injector);
  }

  public getLocation(): Observable<any> {
    const seen = new Set<string>();
    const uniqueLocations = this.packsAventura.data
      .map(p => p.location)
      .filter(loc => {
        if (!loc) return false;
        const key = String(loc).trim();
        if (seen.has(key)) return false;
        seen.add(key);
        return true;
      });

    const rows = uniqueLocations.map(location => ({ location }));

    return of(new OntimizeServiceResponse(
      0,
      rows,
      '',
      { location: 12 },
      0,
      rows.length
    ));
  }

  public query(
    kv: any = {}, av: string[] = [], entity?: string,
    sqltypes: any = {}, offset?: number, pagesize?: number,
    orderby?: Array<{ column: string; asc: boolean }>
  ): Observable<any> {

    let rows = [...this.packsAventura.data];

    const flat = this.convert(kv);
    if (flat?.terms?.length) {
      const pred = this.buildPredicate(flat);
      rows = rows.filter(pred);
    }

    if (orderby?.length) {
      const { column, asc } = orderby[0];
      rows.sort((a: any, b: any) => {
        const va = a[column], vb = b[column];
        if (va == null && vb == null) return 0;
        if (va == null) return asc ? -1 : 1;
        if (vb == null) return asc ? 1 : -1;
        return (va < vb ? -1 : va > vb ? 1 : 0) * (asc ? 1 : -1);
      });
    }

    const total = rows.length;
    const start = Math.max(0, offset || 0);
    const size = pagesize ?? total;
    const page = rows.slice(start, start + size);

    const data = (av?.length) ? page.map(r => av.reduce((acc: any, c: string) => { acc[c] = (r as any)[c]; return acc; }, {} as any)) : page;

    return of(new OntimizeServiceResponse(
      this.packsAventura.code,
      data,
      this.packsAventura.message,
      this.packsAventura.sqlTypes,
      start,
      total
    ));
  }

  deCompose(expresion, columns: Array<string>, kv: Object) {
    const basicExpresion: Expression = expresion[FilterExpressionUtils.BASIC_EXPRESSION_KEY];
    const filterExpresion: Expression = expresion[FilterExpressionUtils.FILTER_EXPRESSION_KEY];

    let decomposedExpresion = kv;
    if (Util.isDefined(basicExpresion)) {
      decomposedExpresion = this.deComposeExpresion(basicExpresion, columns, kv);
    }

    /* Required for column filtering which is currently disabled */
    if (Util.isDefined(filterExpresion)) {
      decomposedExpresion = this.deComposeExpresion(filterExpresion, columns, decomposedExpresion);
    }
    return decomposedExpresion;
  }

  deComposeExpresion(expresion: any, columns: Array<string>, kv: Object) {
    if (FilterExpressionUtils.instanceofExpression(expresion)) {
      if (typeof expresion.lop !== 'string') {
        kv = this.deComposeExpresion(expresion.lop, columns, kv);
        return this.deComposeExpresion(expresion.rop, columns, kv);
      } else {
        return kv;
      }
    }
  }

  convert(input: any): any {
    const result: any = { logic: 'AND', terms: [] };
    if (input && input['@basic_expression']) {
      this.parseExpression(input['@basic_expression'], result);
    }
    if (input && input['@filter_expression']) {
      this.parseExpression(input['@filter_expression'], result);
    }
    return result;
  }

  private parseExpression(expr: any, out: any, parentLogic: any = 'AND'): void {
    if (!out.terms) out.terms = [];
    if (!out.logic) out.logic = 'AND';

    const op = String((expr.operator ?? expr.op) ?? '').toUpperCase();

    if (op === 'AND' || op === 'OR') {
      const logic = op;
      const left = expr.expr1 ?? expr.left ?? expr.lhs;
      const right = expr.expr2 ?? expr.right ?? expr.rhs;
      if (left) this.parseExpression(left, out, logic);
      if (right) this.parseExpression(right, out, logic);
      if (logic === 'OR') out.logic = 'OR';
      return;
    }

    const col =
      expr.left?.columnName ?? expr.left ?? expr.columnName ?? expr.attr ?? expr.field ?? expr.lop;
    const value = expr.right?.value ?? expr.value ?? expr.rop ?? null;
    if (!col) return;

    out.terms.push({ column: col, op: op, value: value });
  }

  private buildPredicate(flat: any): (row: any) => boolean {
    const norm = (v: any) => (v == null ? '' : String(v)).toLowerCase();
    const toNum = (v: any) => (v == null || v === '' ? NaN : Number(v));
    const toDate = (v: any) => (v ? Date.parse(v) : NaN);

    const test = (row: any, t: any): boolean => {
      const cell = row[t.column];

      switch (t.op) {
        case 'LIKE': {
          const needle = String(t.value).replace(/%/g, '').toLowerCase();
          return norm(cell).includes(needle);
        }
        case 'EQUALS':
        case '=': return String(cell) == String(t.value);

        case 'MORE':
        case '>': return toNum(cell) > toNum(t.value);
        case 'MORE_EQUAL':
        case '>=': return toNum(cell) >= toNum(t.value);
        case 'LESS':
        case '<': return toNum(cell) < toNum(t.value);
        case 'LESS_EQUAL':
        case '<=': return toNum(cell) <= toNum(t.value);

        case 'IN': {
          const arr = Array.isArray(t.value) ? t.value : [t.value];
          return arr.map(String).includes(String(cell));
        }

        case 'ISNULL': return cell == null || cell === '';
        case 'ISNOTNULL': return !(cell == null || cell === '');

        // Por si te llega operador de fecha “verbal”
        case 'DATE_MORE_EQUAL': return toDate(cell) >= toDate(t.value);
        case 'DATE_LESS_EQUAL': return toDate(cell) <= toDate(t.value);

        default: return true;
      }
    };

    return (row: any) => {
      const terms = flat?.terms || [];
      if (!terms.length) return true;
      return (flat.logic === 'OR')
        ? terms.some(term => test(row, term))
        : terms.every(term => test(row, term));
    };
  }

}
