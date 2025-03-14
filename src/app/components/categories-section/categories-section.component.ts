import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CategoriesCardComponent } from "./categories-card/categories-card.component";

@Component({
  selector: 'app-categories-section',
  standalone: true,
  imports: [CategoriesCardComponent],
  templateUrl: './categories-section.component.html',
  styleUrl: './categories-section.component.css'
})
export class CategoriesSectionComponent implements OnInit, AfterViewInit {

  categories!: {title:string, img: string}[];

  currentIndex: number = 0;
  itemWidth: number = 0;
  itemsPerView: number = 1;

  @ViewChild('categoriesWrapper', { static: false }) categoriesWrapper!: ElementRef;
  @ViewChild('categoriesContainer', { static: false }) categoriesContainer!: ElementRef;


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

  ngAfterViewInit(): void {
      this.calculateItemsPerView();
  }

  calculateItemsPerView() {
    const containerWidth = this.categoriesWrapper.nativeElement.offsetWidth;
    const firstItem = this.categoriesWrapper.nativeElement.children[0];

    if (firstItem) {
        this.itemWidth = firstItem.offsetWidth + 48;
        this.itemsPerView = Math.floor(containerWidth / this.itemWidth);
        console.log(this.itemWidth);
        console.log(this.itemsPerView);
        console.log(containerWidth);
        this.updateSlide();
    }
}

  
  nextSlide() {
    const maxIndex = this.categories.length - this.itemsPerView;
    if (this.currentIndex < maxIndex) {
        this.currentIndex++;
        this.updateSlide();
    }
}

prevSlide() {
    if (this.currentIndex > 0) {
        this.currentIndex--;
        this.updateSlide();
    }
}

updateSlide() {
    const offset = -this.currentIndex * this.itemWidth;
    this.categoriesWrapper.nativeElement.style.transform = `translateX(${offset}px)`;
}
}
