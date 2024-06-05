
import { Injectable } from '@angular/core';
import { ICreateProductPayload, IProduct } from './models';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable()
export class ProductsService {
  constructor(private httpClient: HttpClient) {}

  getProducts(): Observable<IProduct[]> {
    return this.httpClient.get<IProduct[]>(
      environment.baseAPIURL + '/products'
    );
  }

  createProduct(payload: ICreateProductPayload): Observable<IProduct> {
    return this.httpClient.post<IProduct>(
      environment.baseAPIURL + '/products',
      payload
    );
  }

  deleteProductById(id: string): Observable<IProduct> {
    return this.httpClient.delete<IProduct>(
      environment.baseAPIURL + '/product/' + id
    );
  }
}
// import { Injectable } from '@angular/core';
// import { IProduct } from './models';

// @Injectable()
// export class ProductsService {

//   constructor() {}
//     getProducts(): IProduct[] {
//       return[
//         {
//           id:1,
//           name: 'Elementos de Psicología y Sociología',
//           turno: '(Turno Mañana)',
//         },
//         {
//           id:2,
//           name: 'Contabilidad y Administración',
//           turno: '(Turno Tarde)',
//         },
//         {
//           id:3,
//           name: 'Derecho Civil',
//           turno: '(Turno Mañana)',
//         },
//         {
//           id:4,
//           name: 'Arquitectura y Construcción',
//           turno: '(Turno Noche)',
//         },
//         {
//           id:5,
//           name: 'Tasaciones',
//           turno: '(Turno Tarde)',
//         },
        
//       ]
//     }
//   }


















