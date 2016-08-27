import { Input, Output, EventEmitter } from '@angular/core';
import { ChartConfiguration } from './chart-config.type';

import { ChartBaseClass } from './chart-base.class';
import { ChartJuiClass } from '../jui/chart-jui.class'

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

  public draw(config?: ChartConfiguration) {
    console.log('draw', 'ChartCommonClass');

    if(!config) {
      this.configuration = config;
    }

    this.chartClass.draw(this.configuration);
  }
  public reDraw() {
    console.log('reDraw', 'ChartCommonClass');

    this.chartClass.reDraw();
  }
  public resize() {
  }
}