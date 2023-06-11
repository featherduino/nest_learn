/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { Product } from './products.model';

@Injectable()
export class ProductsService{
    products: Product[]=[];

    insertProduct(title:string,desc:string,price:number){
        const prodid= new Date().toString();
        const newProduct= new Product(prodid,title,desc,price);
        this.products.push(newProduct)
        return prodid;
    }

    getProducts() {
    return this.products;
}
}