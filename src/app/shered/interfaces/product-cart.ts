import { iproducts } from './products';
export interface IcartProduct {
    count: number;
    _id: string;
    price: number;
    product: iproducts;
}