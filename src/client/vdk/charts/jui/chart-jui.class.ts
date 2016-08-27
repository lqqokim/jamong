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
  }

  public draw(config?: ChartConfiguration) {
    console.log('draw', 'ChartJuiClass');

    if(!config) {
      this.configuration = config;
    }
    
    this.chart(this.selector, {
      axis : {
          x : this.configuration.axisX,
          y : this.configuration.axisY,
          data : this.configuration.data
      },
      brush : this.configuration.brush,
      widget : this.configuration.widget
    });
  }
  public reDraw() {
    console.log('reDraw', 'ChartJuiClass');
  }
  public resize() {
  }
}