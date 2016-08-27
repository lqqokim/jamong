import { Component, OnInit } from '@angular/core';
import { FormsService } from '../../vdk';

import { ChartComponent } from '../../vdk/charts/chart.component';
import { ChartConfiguration, OrientType, BrushType, AxisType } from '../../vdk/charts/core/chart-config.type';
import { NgGrid, NgGridItem } from 'angular2-grid';

@Component({
  moduleId: module.id,
  selector: 'atlier',
  templateUrl: 'atlier.component.html',
  styles: [`
    .navbar {
      text-align : center;
    }
    
    .grid {
    background-color: #efefef ;
    width: 100%;
    min-height: 750px;
}

.grid-item {
    background-color: #ffffff ;
    -webkit-transition: width 0.25s, height 0.25s, left 0.25s, top 0.25s, right 0.25s, bottom 0.25s;
    -moz-transition: width 0.25s, height 0.25s, left 0.25s, top 0.25s, right 0.25s, bottom 0.25s;
    -o-transition: width 0.25s, height 0.25s, left 0.25s, top 0.25s, right 0.25s, bottom 0.25s;
    transition: width 0.25s, height 0.25s, left 0.25s, top 0.25s, right 0.25s, bottom 0.25s;
    border: solid 1px;
}

.grid-item:active, .grid-item.moving {
    z-index: 2;
    -webkit-transition: none;
    -moz-transition: none;
    -o-transition: none;
    transition: none;
}

.grid-placeholder {
    background-color: rgba(0, 0, 0, 0.3);
}

@media (max-width: 767px) {
    .grid {
        width: 100% !important;
        height: auto !important;
        padding: 10px;
    }
    .grid-item {
        position: static !important;
        width: 100% !important;
        margin-bottom: 10px;
    }
    .grid-item:last-child {
        margin-bottom: 0;
    }
}

  `],
  directives: [ChartComponent, NgGrid, NgGridItem]
})
export class AtlierComponent implements OnInit {
  components: any;
  dropdown:any;

  constructor(private formsService: FormsService) { }

  chartConfigs: Array<ChartConfiguration> = [];

  ngOnInit() {
    this.components = this.formsService.getComponents();
    jui.ready([ "ui.dropdown" ], (dropdown: any) => {
    this.dropdown = dropdown("#componentList", {
        event: {
            change: (data: any) => {
            alert(data.value + ", " + data.text);
          }
        }
      });
    });

    let chartConfig:ChartConfiguration = {};
    chartConfig.brush = [{
      type: BrushType.Scatter,
      target: ["sales", "profit"]
    }];
    chartConfig.axisX = {
      type: AxisType.Range,
      domain: [-40, 60],
      step: 10,
      line: true
    };
    chartConfig.axisY = {
      type: AxisType.Block,
      domain: "quarter",
      line: true
    };
    chartConfig.data = [
      { quarter: "1Q", sales: 50, profit: 35 },
      { quarter: "2Q", sales: -20, profit: -30 },
      { quarter: "3Q", sales: 10, profit: -5 },
      { quarter: "4Q", sales: 30, profit: 25 }
    ];
    chartConfig.widget = [
      { type: "title", text: "Bar Sample" },
      { type: "tooltip", orient: OrientType.Left },
      { type: "legend" }
    ];

    this.chartConfigs.push(chartConfig);
   }

   show(e: any) {
     this.dropdown.move(e.clientX,e.clientY)
     this.dropdown.show();
   }
}