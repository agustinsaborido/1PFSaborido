import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { ICreateSaleData, ISale } from './models';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';



@Injectable({ providedIn: 'root' })
export class SalesService {
  // CRUD
  // Create, Read, Update y Delete

  constructor(private http: HttpClient) {
 
  }

  getSales(): Observable<ISale[]> {
    return this.http.get<ISale[]>(
      `${environment.baseAPIURL}/sales?_embed=user&_embed=product`
    );
  }

  getSalesByUserId(uid: string): Observable<ISale[]> {
    return this.http.get<ISale[]>(
      `${environment.baseAPIURL}/sales?userId=${uid}&_embed=product`
    );
  }

  createSales(data: ICreateSaleData) {
    if (data.user && data.product && data.quantity) {

    }
    return of([]);
  }

  deleteSale(id: number) {
    return of([]);
  }

  updateSale(id: number, data: ISale) {
    return of();
  }
}
