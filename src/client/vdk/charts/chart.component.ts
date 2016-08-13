import { Component } from '@angular/core';
import { ChartCommonClass } from './core/chartCommon.class';

@Component({
    moduleId: module.id,
    selector: 'chart',
    template: `
        <div class="chartComponent">
        </div>
        <p>chart component</p>
    `
})
export class ChartComponent extends ChartCommonClass {
    constructor() {
        super();
    }

    ngOnInit() {
        // 유니크한 값을 생성하여 전달해야 한다.
        let uuidSelector = '.chartComponent';
        let config = {
        };

        this.init(uuidSelector, config);
    }
}