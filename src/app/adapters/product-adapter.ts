import { Product } from "../models/product.model";


export class ProductAdapter {
 static adaptProduct(productBackend: any): Product {
 return {
    productId: productBackend.ProductId,
    productName: productBackend.ProductName,
    productPrice: productBackend.ProductPrice,
    imagePath: productBackend.ImagePath,
    categoryId: productBackend.CategoryId,    
 };
 }
}
    