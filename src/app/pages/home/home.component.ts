import { Component } from '@angular/core';
import { AdvantagesSectionComponent } from "../../components/advantages-section/advantages-section.component";
import { CategoriesSectionComponent } from "../../components/categories-section/categories-section.component";
import { IntroSectionComponent } from "../../components/intro-section/intro-section.component";
import { TrendyProductsSectionComponent } from "../../components/trendy-products-section/trendy-products-section.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AdvantagesSectionComponent, CategoriesSectionComponent, IntroSectionComponent, TrendyProductsSectionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {


}
