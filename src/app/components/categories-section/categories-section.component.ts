import { Component, OnInit } from '@angular/core';
import { CategoriesCardComponent } from "./categories-card/categories-card.component";

@Component({
  selector: 'app-categories-section',
  standalone: true,
  imports: [CategoriesCardComponent],
  templateUrl: './categories-section.component.html',
  styleUrl: './categories-section.component.css'
})
export class CategoriesSectionComponent implements OnInit {

  categories!: {title:string, img: string}[];


  ngOnInit(){
    this.categories = [
      {
        title:"Burgers",
        img:"assets/images/categories/burger.png"
      },
      {
        title:"Rolls",
        img:"assets/images/categories/roll.png"
      },
      {
        title:"Hot Dogs",
        img:"assets/images/categories/hot-dog.png"
      },
      {
        title:"Salads",
        img:"assets/images/categories/salad.png"
      },
      {
        title:"Desserts",
        img:"assets/images/categories/desert.png"
      },
      
    ]
  }
}
