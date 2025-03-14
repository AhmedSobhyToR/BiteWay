import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-categories-card',
  standalone: true,
  imports: [],
  templateUrl: './categories-card.component.html',
  styleUrl: './categories-card.component.css'
})
export class CategoriesCardComponent {

  @Input({required: true}) img!:string;
  @Input({required: true}) title!:string;

}
