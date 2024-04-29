import { Injectable } from '@angular/core';
import { IProduct } from './models';

@Injectable()
export class ProductsService {

  constructor() {}
    getProducts(): IProduct[] {
      return[
        {
          id:1,
          name: 'Elementos de Psicología y Sociología',
          turno: '(Turno Mañana)',
        },
        {
          id:2,
          name: 'Contabilidad y Administración',
          turno: '(Turno Tarde)',
        },
        {
          id:3,
          name: 'Derecho Civil',
          turno: '(Turno Mañana)',
        },
        {
          id:4,
          name: 'Arquitectura y Construcción',
          turno: '(Turno Noche)',
        },
        {
          id:5,
          name: 'Tasaciones',
          turno: '(Turno Tarde)',
        },
        
      ]
    }
  }

