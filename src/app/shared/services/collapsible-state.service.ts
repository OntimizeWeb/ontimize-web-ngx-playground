import { EventEmitter, Injectable } from '@angular/core';
import { ObservableWrapper } from 'ontimize-web-ngx';

@Injectable()
export class CollapsibleStateService {
  public expanded = true;

  private emitter: EventEmitter<boolean> = new EventEmitter<boolean>();

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