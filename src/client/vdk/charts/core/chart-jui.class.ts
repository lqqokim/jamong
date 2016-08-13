import { Input, Output, EventEmitter } from '@angular/core';
import { ChartBaseClass } from './chart-base.class';

export abstract class ChartJuiClass implements ChartBaseClass {
  constructor() {
  }

  public init(selector: string, config: Object) {
    console.log('init', 'ChartJuiClass');
    console.log(jui);
  }

  public draw() {
  }
}