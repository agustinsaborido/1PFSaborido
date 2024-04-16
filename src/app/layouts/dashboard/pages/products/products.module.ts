import { InjectionToken, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { SharedModule } from '../../../../shared/shared.module';
import { ProductsService } from './products.service';


export const API_URL = new InjectionToken('API_URL');
export const RAMDOM_NUMBER = new InjectionToken('RAMDOM_NUMBER');
export const PRODUCTS = new InjectionToken('PRODUCTS');

@NgModule({
  declarations: [
    ProductsComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    SharedModule,
  ],
  exports:[
    ProductsComponent,
  ],
  providers:[
    // ProductsService,
    {
      provide: ProductsService,
      useClass: ProductsService,
    },
    {
      provide: API_URL,
      useValue:'http://localhost:5001/api',
    },
    {
      provide: RAMDOM_NUMBER,
      useFactory: () => {
        return Math.random();
      },
    },
    {
      provide: PRODUCTS,
      useFactory: (productsService: ProductsService) =>{
        return productsService.getProducts();
      },
      deps:[ProductsService],
    }
  ],
})
export class ProductsModule {

  // displayedColumns = ['id','name', 'price', 'actions'];

 }
