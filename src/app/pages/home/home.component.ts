import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { Burger3DComponent } from "../../components/burger-3-d/burger-3-d.component";
import { BitewayLogoComponent } from "../../components/biteway-logo/biteway-logo.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, Burger3DComponent, BitewayLogoComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
