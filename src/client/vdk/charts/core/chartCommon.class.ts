import { Input, Output, EventEmitter } from '@angular/core';
import { ChartBaseClass } from './chartBase.class';

import { ChartC3Class } from './chartC3.class';
import { ChartJuiClass } from './chartJui.class';

/**
 * 
 */
export abstract class ChartCommonClass implements ChartBaseClass {
  constructor() {

  }

  public init(selector:string, config:Object) {
    console.log('init', 'ChartCommonClass');

    /**
     * library, type에 따라서 사용할 c3, jui를 결정하여 호출한다.
     */

    let chartClass:any = ChartC3Class;

    if(true) {
      chartClass = ChartJuiClass;
    }

    chartClass = new chartClass();
    chartClass.init();

  }
}