import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { Burger3DComponent } from "../../components/burger-3-d/burger-3-d.component";
import { BitewayLogoComponent } from "../../components/header/biteway-logo/biteway-logo.component";
import { AdvantagesSectionComponent } from "../../components/advantages-section/advantages-section.component";
import { CategoriesSectionComponent } from "../../components/categories-section/categories-section.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, Burger3DComponent, BitewayLogoComponent, AdvantagesSectionComponent, CategoriesSectionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {


  prevCard(){

  }
  
  nextCard(){

  }
}
