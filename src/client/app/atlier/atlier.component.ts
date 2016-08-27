import { Component, OnInit } from '@angular/core';
import { FormsService } from '../../vdk';

import { ChartComponent } from '../../vdk/charts/chart.component';
import { ChartConfiguration, Orient } from '../../vdk/charts/core/chart-config.type';

@Component({
  moduleId: module.id,
  selector: 'atlier',
  templateUrl: 'atlier.component.html',
  styles: [`
    .navbar {
      text-align : center;
    }
  `],
  directives: [ChartComponent]
})
export class AtlierComponent implements OnInit {
  components: any;
  dropdown:any;

  constructor(private formsService: FormsService) { }

  chartConfiguration: ChartConfiguration;

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

   show(e: any) {
     this.dropdown.move(e.clientX,e.clientY)
     this.dropdown.show();
   }
}