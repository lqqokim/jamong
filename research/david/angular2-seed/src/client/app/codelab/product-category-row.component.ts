import { Component, Input } from '@angular/core';
import { CategoryModel } from './model/category.model';
import { ProductModel } from './model/product.model';
import { ProductRowComponent } from './product-row.component';
import { ProductService } from './product.service';

@Component({
  selector: 'div.product-category-row',
  template: `
    <tr>
      <th colspan="2">{{ category?.name }}</th>
    </tr>
    <tr class="product-row" [product]="prd" *ngFor="let prd of filteredProducts">
    </tr>
  `,
  directives: [ProductRowComponent]
})
export class ProductCategoryRowComponent {

  constructor(private productService: ProductService) {
  }

  @Input() category: CategoryModel;

  private stocked: boolean;
  filteredProducts: ProductModel[];

  @Input()
  set isStockOnly(value: any) {
    this.stocked = value;

    this.filteredProducts = this.category.products.filter((product: ProductModel) => {
      let visible = true;

      if(this.stocked) {
        if(!product.stocked) {
          visible = false;
        }
      }

      return visible;
    });
  }
  get isStockOnly() {
    return this.stocked;
  }
}