/* eslint-disable prettier/prettier */
import { Controller, Post,Body, Get } from "@nestjs/common";
import { ProductsService } from "./products.service";
@Controller('products')
export class ProductsController {
    constructor(private readonly productsService:ProductsService){}
    @Post()
    addProduct(
    @Body('title') prodTitle:string,
    @Body('description') description:string,
    @Body('price') prodprice:number,
    ):any {
    const generatedId=this.productsService.insertProduct(prodTitle,description,prodprice);
    return {id:generatedId};
}
@Get()
getAllProducts(){
    return this.productsService.getProducts();
}
}