import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ChartCommonClass } from './core/chart-common.class';
import { ChartConfiguration } from './core/chart-config.interface';

@Component({
  moduleId: module.id,
  selector: 'chart',
  template: `
      <div class="chartComponent" style="height: 500px;">
      </div>
      <p>chart component</p>
  `
})
export class ChartComponent extends ChartCommonClass {
  constructor() {
    super();
  }

  @Input() configuration: ChartConfiguration;

  ngOnInit() {
    // TODO: 유니크한 값을 생성하여 전달해야 한다.
    let uuidSelector = '.chartComponent';
    this.init(uuidSelector, this.configuration);
  }
}