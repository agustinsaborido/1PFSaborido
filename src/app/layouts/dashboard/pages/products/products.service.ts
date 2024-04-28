import { Injectable } from '@angular/core';
import { IProduct } from './models';

@Injectable()
export class ProductsService {

  constructor() {}
    getProducts(): IProduct[] {
      return[
        {
          id:1,
          name: 'TV',
          price: 299999,
        },
        {
          id:2,
          name: 'PS5',
          price: 1500000,
        },
        {
          id:3,
          name: 'Parlante',
          price: 200000,
        },
        {
          id:4,
          name: 'Notebook',
          price: 1700000,
        },
        {
          id:5,
          name: 'Auriculares',
          price: 145000,
        },
        
      ]
    }
  }

