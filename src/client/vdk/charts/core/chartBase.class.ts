import { Input, Output, EventEmitter } from '@angular/core';

export abstract class ChartBaseClass {
  constructor() {

  }

  public init(selector:string, config:Object) {
    console.log('init', 'ChartBaseClass');
  }

  /*
  API
  
  init

  resize
  draw

  destory
  */
}