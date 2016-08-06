import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs/rx';
// import 'rxjs/add/overableof/';

@Injectable()
export class ProductService {
  cnt:number = 0;

  constructor() {
    this.cnt++;
    console.log('this.cnt', this.cnt);
  }

  getData() {
    return [
        {
            name: 'Sports',
            products: [
                {
                    stocked: false,
                    name: 'football',
                    price: 5000
                }
            ]
        },
        {
            name: 'Electronics',
            products: [
                {
                    stocked: false,
                    name: 'iPhone',
                    price: 50000
                }
            ]
        }
    ];

  }
}