import { Component, OnInit } from '@angular/core';

import { ChartComponent } from '../vdk/charts/chart.component';
import { ChartConfiguration, Orient } from '../vdk/charts/core/chart-config.interface';

@Component({
  moduleId: module.id,
  selector: 'jm-app',
  template: `
        <p>app</p>
        <chart #chart [configuration]="chartConfiguration"></chart>
        <button (click)="toggleChart(chart)">toggle</button>
    `,
  directives: [ChartComponent]
})
export class PlatformComponent implements OnInit {
  constructor() { }

  chartConfiguration: ChartConfiguration;

  ngOnInit() {

    this.chartConfiguration = {
      axisX: {
        type: "range",
        domain: [-40, 60],
        step: 10,
        line: true
      },
      axisY: {
        type: "block",
        domain: "quarter",
        line: true
      },
      data: [
        { quarter: "1Q", sales: 50, profit: 35 },
        { quarter: "2Q", sales: -20, profit: -30 },
        { quarter: "3Q", sales: 10, profit: -5 },
        { quarter: "4Q", sales: 30, profit: 25 }
      ],
      brush: {
        type: "bar",
        target: ["sales", "profit"]
      },
      widget: [
        { type: "title", text: "Bar Sample" },
        { type: "tooltip", orient: Orient.Left },
        { type: "legend" }
      ]
    };
  }

  toggleChart(chart: ChartComponent) {
    console.log('toggleChart');

    this.chartConfiguration.brush.type = "column";
    chart.reDraw();
  }
}