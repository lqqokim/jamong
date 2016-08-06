import { Component } from '@angular/code';
import { ProductRowComponent } from './product-row.component';
import { ProductModel } from './model/product.model';

@Component({
    selector: 'filterable-product-table',
    template: `
        <product-row [product]="sample"></product-row>
    `,
    directives: [ ProductRowComponent ]
})
export class FilterableProductTableComponent {
    sample: ProductModel;

    constructor() {
        this.sample = {
            stocked: false,
            name: 'football',
            price: 5000
        }
    }
}