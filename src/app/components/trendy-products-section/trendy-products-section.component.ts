import { Component, OnInit } from '@angular/core';
import { TrendyProductsCardComponent } from "./trendy-products-card/trendy-products-card.component";
import { Product } from '../../models/product.model';
import { ProductsApiService } from '../../services/products-api.service';

@Component({
  selector: 'app-trendy-products-section',
  standalone: true,
  imports: [TrendyProductsCardComponent],
  templateUrl: './trendy-products-section.component.html',
  styleUrl: './trendy-products-section.component.css'
})
export class TrendyProductsSectionComponent implements OnInit {
  trendyProducts!: Product[];

  constructor(private productApiService: ProductsApiService){

  }

  ngOnInit() {
    this.productApiService.getTrendyProducts().subscribe({
      next: (data) =>{
        this.trendyProducts= data
      }
    })
  }


}
