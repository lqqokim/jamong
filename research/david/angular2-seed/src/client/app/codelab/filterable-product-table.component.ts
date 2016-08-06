import { Component } from '@angular/core';
import { ProductTableComponent } from './product-table.component';
import { CategoryModel } from './model/category.model';
import { SearchBarComponent } from './search-bar.component';
import { ProductService } from './product.service';

@Component({
    selector: 'filterable-product-table',
    template: `
        <search-bar (stocked)="onChangeStocked($event)"></search-bar>
        <table>
            <thead>
                <tr>
                    <th>name</th>
                    <th>price</th>
                </tr>
            </thead>
            <tbody class="product-table" [categories]="sample" [isStockOnly]="isStockOnly">
            </tbody>
        </table>
    `,
    directives: [ProductTableComponent, SearchBarComponent],
    providers: [{ provide: ProductService, useFactory: () => new ProductService() }]
})
export class FilterableProductTableComponent {
    sample: CategoryModel[];
    isStockOnly: boolean;

    onChangeStocked(stocked: boolean) {
        console.log('checked', stocked);
        this.isStockOnly = stocked;
    }

  constructor(private productService: ProductService) {
    }

    ngOnInit() {
        this.sample = this.productService.getData();
        
        // this.productService.getData()
        // .subscribe((response: CategoryModel) => {
        // });
    }
    
}