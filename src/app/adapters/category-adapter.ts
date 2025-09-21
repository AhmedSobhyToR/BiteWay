import { Category } from "../models/category.model";

export class CategoryAdapter{

  static  adaptCategory(categoryBackend: any){
        return{
            categoryId: categoryBackend.CategoryId,
            categoryName: categoryBackend.CategoryName,
            imagePath: categoryBackend.ImagePath
        } as Category
    }
}