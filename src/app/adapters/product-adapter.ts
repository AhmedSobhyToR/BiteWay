import { Product, ProductBackend } from "../models/product.model";


export class ProductAdapter {
 static adaptProduct(productBackend: ProductBackend): Product {
 return {
    productId: productBackend.ProductId,
    productName: productBackend.ProductName,
    productPrice: productBackend.ProductPrice,
    imagePath: productBackend.ImagePath,
    categoryId: productBackend.CategoryId,    
 };
 }
}
    