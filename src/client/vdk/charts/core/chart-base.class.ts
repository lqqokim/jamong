import { Input, Output, EventEmitter } from '@angular/core';
import { ChartConfiguration } from './chart-config.type';

export abstract class ChartBaseClass {
  constructor() {

  }

  public init(selector: string, config: ChartConfiguration) {
    console.log('ChartBaseClass');
  }

  abstract draw(): void;
  abstract reDraw(): void;
  abstract resize(): void;

  /*
  API
  
  init

  resize
  draw

  destory
  */
}