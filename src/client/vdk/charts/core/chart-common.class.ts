import { Input, Output, EventEmitter } from '@angular/core';
import { ChartConfiguration } from './chart-config.interface';

import { ChartBaseClass } from './chart-base.class';
import { ChartJuiClass } from './chart-jui.class'

export class ChartCommonClass extends ChartBaseClass {
  constructor() {
    super();
  }

  chartClass: ChartJuiClass;
  configuration: ChartConfiguration;

  public init(selector: string, config: ChartConfiguration) {
    console.log('init', 'ChartCommonClass');

    this.configuration = config;

    this.chartClass = new ChartJuiClass();
    this.chartClass.init(selector, this.configuration);
  }

  public draw() {
  }
  public reDraw() {
    this.chartClass.reDraw();
  }
  public resize() {
  }
}