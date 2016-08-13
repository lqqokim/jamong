import { Input, Output, EventEmitter } from '@angular/core';
import { ChartBaseClass } from './chartBase.class';

export abstract class ChartJuiClass implements ChartBaseClass {
  constructor() {
      
  }

  public init(selector:string, config:Object) {
    console.log('init', 'ChartJuiClass');
  }
}