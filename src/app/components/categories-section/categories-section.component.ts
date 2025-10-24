import { Component} from '@angular/core';
import { CategoriesCardComponent } from "./categories-card/categories-card.component";
import { Category } from '../../models/category.model';
import { CategoriesApiService } from '../../services/categories-api.service';

@Component({
  selector: 'app-categories-section',
  standalone: true,
  imports: [CategoriesCardComponent],
  templateUrl: './categories-section.component.html',
  styleUrl: './categories-section.component.css'
})
export class CategoriesSectionComponent {

  categories!: Category[];

  constructor(private categoriesSer: CategoriesApiService){}


  ngAfterViewInit(): void {
    this.categoriesSer.getCategories().subscribe({
      next:(data) => {
        this.categories  = data;
      }
    
    })
  }

}
