import { Component } from '@angular/core';
import { Burger3DComponent } from "../burger-3-d/burger-3-d.component";
import { BitewayLogoComponent } from "../header/biteway-logo/biteway-logo.component";
import { HeaderComponent } from "../header/header.component";

@Component({
  selector: 'app-intro-section',
  standalone: true,
  imports: [Burger3DComponent, BitewayLogoComponent, HeaderComponent],
  templateUrl: './intro-section.component.html',
  styleUrl: './intro-section.component.css'
})
export class IntroSectionComponent {


  prevCard(){

  }
  
  nextCard(){

  }
}
