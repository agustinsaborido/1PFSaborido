import { IProduct } from './models';

export class ProductsMockService {
  getProducts(): IProduct[] {
    return [
      {
        id: '2',
        name: 'Producto mock 1',
        price: 9999,
      },
      {
        id: '2',
        name: 'Producto mock 2',
        price: 2000,
      },
    ];
  }
}

// import { IProduct } from "./models";

// export class ProductsMockService {
//     getProducts(): IProduct [] {
//         return [
//             {
//                 id: 2,
//                 name: 'Product Mock 1',
//                 turno: 'Turno Mañana',
//             },
//             {
//                 id: 2,
//                 name: 'Product Mock 2',
//                 turno: 'Turno Mañana',
//             },
//         ];
//     }
// }
