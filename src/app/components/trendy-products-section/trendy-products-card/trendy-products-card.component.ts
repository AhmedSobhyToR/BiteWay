import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-trendy-products-card',
  standalone: true,
  imports: [],
  templateUrl: './trendy-products-card.component.html',
  styleUrl: './trendy-products-card.component.css'
})
export class TrendyProductsCardComponent {
  @Input({required: true}) img!:string;
  @Input({required: true}) title!:string;

}
