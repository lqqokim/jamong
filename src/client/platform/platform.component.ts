import { Component, OnInit } from '@angular/core';

import { ChartComponent } from '../vdk/charts/chart.component';

@Component({
    moduleId: module.id,
    selector: 'jm-app',
    template: `
        <p>app</p>
        <chart></chart>
    `,
    directives: [ ChartComponent ]
})
export class PlatformComponent implements OnInit {
    constructor() { }

    ngOnInit() { }

}