
import { Injectable } from '@angular/core';
import { BaseRequestArgument, Expression, FilterExpressionUtils, IBaseRequestArgument, Util } from 'ontimize-web-ngx';


@Injectable()
export class RickAndMortyRequestArgumentsAdapter extends BaseRequestArgument implements IBaseRequestArgument {
  parseQueryParameters(params: any) {
    let queryargs = [params.filter, params.columns, params.entity, params.sqlTypes];

    const { filter, columns } = params;
    queryargs[0] = this.deCompose(filter, columns, {});
    return queryargs;
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
        return Object.assign(kv, { [expresion.lop]: expresion.rop });
      }
    }
  }
}
