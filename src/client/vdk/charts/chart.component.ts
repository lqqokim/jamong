import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ChartCommonClass } from './core/chart-common.class';
import { ChartConfiguration } from './core/chart-config.type';

@Component({
  moduleId: module.id,
  selector: 'jm-chart',
  template: `
      <div class="chartComponent" style="height: 500px;">
      </div>
  `
})
export class ChartComponent extends ChartCommonClass {
  constructor() {
    super();
  }

  @Input() configuration: ChartConfiguration;

  // TODO: event 테스트
  // @Ouput

  ngOnInit() {
    // TODO: 유니크한 값을 생성하여 전달해야 한다.
    let uuidSelector = '.chartComponent';
    this.init(uuidSelector, this.configuration);
  }
}