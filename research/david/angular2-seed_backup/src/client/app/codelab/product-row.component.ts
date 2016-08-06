import { Component, Input } from '@angular/core';
import { ProductModel } from './model/product.model';

@Component({
    selector: 'product-row',
    template: `
        <tr>
            <td>
                <span [style.color]="product?.stocked ? 'blue' : 'red'">
                    {{ product?.name }}
                </span>
            </td>
            <td>
                {{ product?.price }}
            </td>
        </tr>
    `
})
export class ProductRowComponent {
    @Input() product: ProductModel;

    ngOnChanges() {
        
    }
}