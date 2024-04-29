import { IProduct } from "./models";

export class ProductsMockService {
    getProducts(): IProduct [] {
        return [
            {
                id: 2,
                name: 'Product Mock 1',
                turno: 'Turno Mañana',
            },
            {
                id: 2,
                name: 'Product Mock 2',
                turno: 'Turno Mañana',
            },
        ];
    }
}