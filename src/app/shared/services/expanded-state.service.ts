import { EventEmitter, Injectable } from '@angular/core';
import { ObservableWrapper } from 'ontimize-web-ngx';

@Injectable()
export class ExpandedStateService {
  public expanded = true;

  private emitter: EventEmitter<Boolean> = new EventEmitter<Boolean>();

  setState(val: boolean) {
    this.expanded = val;
    this._emitStateChanged(val);
  }

  public onStateChange(onNext: (value: boolean) => void): Object {
    return ObservableWrapper.subscribe(this.emitter, onNext);
  }

  private _emitStateChanged(visible): void {
    ObservableWrapper.callEmit(this.emitter, visible);
  }
}