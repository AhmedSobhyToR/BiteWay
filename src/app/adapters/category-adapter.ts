import { Category, CategoryBackend } from "../models/category.model";

export class CategoryAdapter{

  static  adaptCategory(categoryBackend: CategoryBackend){
        return{
            categoryId: categoryBackend.CategoryId,
            categoryName: categoryBackend.CategoryName,
            imagePath: categoryBackend.ImagePath
        } as Category
    }
}