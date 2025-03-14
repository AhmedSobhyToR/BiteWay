import { Component, OnInit } from '@angular/core';
import { AdvantagesCardComponent } from "./advantages-card/advantages-card.component";

@Component({
  selector: 'app-advantages-section',
  standalone: true,
  imports: [AdvantagesCardComponent],
  templateUrl: './advantages-section.component.html',
  styleUrl: './advantages-section.component.css'
})
export class AdvantagesSectionComponent implements OnInit{

  advantages!: {title1: string, title2: string, img: string}[];

  ngOnInit(){
    this.advantages = [
      {
      title1: "Free",
      title2: "Delivery",
      img: "fa-solid fa-car"
      },

      {
        title1: "Wide",
        title2: "Selections",
        img: "fa-solid fa-cart-shopping"
      },

      {
        title1: "Quality",
        title2: "Products",
        img: "fa-solid fa-star"
      },

      {
        title1: "Discounts",
        title2: "Promotions",
        img: "fa-solid fa-tag"
      },
    ]
  }
}
