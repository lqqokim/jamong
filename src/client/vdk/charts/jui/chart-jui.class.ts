import { Input, Output, EventEmitter } from '@angular/core';
import { ChartConfiguration } from '../core/chart-config.type';

import { ChartBaseClass } from '../core/chart-base.class';

export class ChartJuiClass extends ChartBaseClass {
  constructor() {
    super();
  }

  chart: any;
  selector: string;
  configuration: ChartConfiguration;

  public init(selector: string, config: ChartConfiguration) {
    console.log('init', 'ChartJuiClass');

    this.selector = selector;
    this.configuration = config;

    this.chart = jui.include("chart.builder");

    this.chart(this.selector, {
        axis : {
            x : this.configuration.axisX,
            y : this.configuration.axisY,
            data : this.configuration.data
        },
        brush : {
            type : this.configuration.brush.type,
            target : this.configuration.brush.target
        },
        widget : this.configuration.widget
    });
  }

  public draw() {
  }
  public reDraw() {
    console.log(this.configuration, this.selector);
  }
  public resize() {
  }
}